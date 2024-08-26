---
title: "Publishing Rust crates to crates.io"
---

**Author:** Maciej Wójcik
**Email:** [mwojcik@teonite.com](mailto:mwojcik@teonite.com)  
**Copyright © teonite**

This document is meant to serve as a general guide for releasing public projects as crates and all the ancillary aspects that come with publishing something that’s meant to be used by other people.

# TL;DR

Thanks to great tooling in Rust publishing a crate to crates.io once everything is set up is just a matter of doing the following:

* go back and fill in the docs!
* bump crate version in `Cargo.toml` and `Cargo.lock` files
* run `cargo publish`

But before you first publish a new crate you should really at least skim through the stuff below.

# Before publishing

Below is a list of a couple steps that should probably be taken before you first publish a new Rust crate.

## Docs! Docs! Docs!

Documentation is probably the single most important aspect of releasing code that’s meant to be used by third parties. Fortunately generating documentation is also a part of `cargo` tooling. Whenever you publish a new version to crates.io the documentation is also built and published to docs.rs (with a small delay for processing. 

To test your documentation run `cargo doc --open` to build it and open in your browser.

Another useful `cargo` feature is that all the code blocks in your documentation are tested when you run `cargo test`. This should prevent your examples from becoming obsolete with subsequent releases.

Some important notes:

* It goes without saying that you should add as much documentation as reasonably possible. At bare minimum you have to document all public APIs that users are meant to interact with. 
* In general three slashes (`///`) are used for comments which will be rendered as documentation. Use them to document functions, structs, traits etc. Normal comments (`//`) can still be used for further explanations within the source code itself. Other relevant type of documentation comment is `//!` which can be used to add module-level docs.
* You can use Markdown in all documentation comments.
* Remember to add general crate-level docs in `src/lib.rs`. This part will be used as your docs homepage and for many users this will be the first look into your crate. Aside from README-like description you should also include a small code example which shows how the library is used. For example:\n

```rust
//! # `defguard_wireguard_rs`
//!
//! `defguard_wireguard_rs` is a multi-platform Rust library providing a unified high-level API
//! for managing WireGuard interfaces using native OS kernel and userspace WireGuard protocol implementations.
//!
//! It can be used to create your own [WireGuard:tm:](https://www.wireguard.com/) VPN servers or clients for secure and private networking.
//!
//! It was developed as part of [defguard](https://github.com/defguard/defguard) security platform and used in the [gateway/server](https://github.com/defguard/gateway) as well as [desktop client](https://github.com/defguard/client).
//!
//! ## Example
//!
//! ```no_run
//! use x25519_dalek::{EphemeralSecret, PublicKey};
//! use defguard_wireguard_rs::{InterfaceConfiguration, WGApi, WireguardInterfaceApi, host::Peer};
//! # use defguard_wireguard_rs::error::WireguardInterfaceError;
//!
//! // Create new API struct for interface
//! let ifname: String = if cfg!(target_os = "linux") || cfg!(target_os = "freebsd") {
//!     "wg0".into()
//! } else {
//!     "utun3".into()
//! };
//! let wgapi = WGApi::new(ifname.clone(), false)?;
//!
//! // Create host interfaces
//! wgapi.create_interface()?;
//!
//! // Configure host interface
//! let interface_config = InterfaceConfiguration {
//!     name: ifname.clone(),
//!     prvkey: "AAECAwQFBgcICQoLDA0OD/Dh0sO0pZaHeGlaSzwtHg8=".to_string(),
//!     address: "10.6.0.30".to_string(),
//!     port: 12345,
//!     peers: vec![],
//! };
//! wgapi.configure_interface(&interface_config)?;
//!
//! // Create, add & remove peers
//! for _ in 0..32 {
//!     let secret = EphemeralSecret::random();
//!     let key = PublicKey::from(&secret);
//!     let peer = Peer::new(key.as_ref().try_into().unwrap());
//!     wgapi.configure_peer(&peer)?;
//!     wgapi.remove_peer(&peer.public_key)?;
//! }
//!
//! // Remove host interface
//! wgapi.remove_interface()?;
//! # Ok::<(), WireguardInterfaceError>(())
//! ```
```

* Use `cargo doc --open` to test your documentation and add missing comments to all the public APIs. Try to put yourself in the headspace of a developer trying to actually use your crate.

## Fill in crate metadata

Aside from defining the basic stuff like your project’s name and current version, the `Cargo.toml` file contains some useful metadata in `[package]` section, which enables users to discover your crate easier on `crates.io`. 

Before publishing you must at least fill in values for `description` and `license` fields. Other fields are not mandatory but you should fill in some relevant info. For example:

```toml
[package]
name = "defguard_wireguard_rs"
version = "0.1.0"
edition = "2021"
description = "A unified multi-platform high-level API for managing WireGuard interfaces"
license = "Apache-2.0"
readme = "README.md"
homepage = "https://github.com/DefGuard/wireguard-rs"
repository = "https://github.com/DefGuard/wireguard-rs"
keywords = ["wireguard", "network", "vpn"]
categories = ["network-programming"]
```

## Set up release workflow in GitHub

Each crate version should have a corresponding GitHub release with a changelog. To automate this process add a simple workflow to generate a release for each commit tagged with `vX.X.X`:

```yaml
name: Create a new GitHub release
on:
  push:
    tags:
      - v*.*.*

jobs:
  create-release:
    runs-on: self-hosted
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Create release
        uses: softprops/action-gh-release@v1
        if: startsWith(github.ref, 'refs/tags/')
        with:
          draft: true
          generate_release_notes: true
```

\
# Configuring cargo

There are a couple of steps that need to be performed before you can just run `cargo publish` to publish a crate.

* Set up crates.io account. This requires authorizing with your GitHub account.
* Within account settings enter and verify your email address.
* Go to `Account Settings` > `API Tokens` and generate a new token.
* Go back to your project directory and run `cargo login`. This stores the token locally in `~/.cargo/credentials` and allows you to interact with crates.io

That’s it. You should now be able to publish your crate. You can also run `cargo publish --dry-run` to check if there are any outstanding issues.

## Delegating crate ownership

The user who uploads the crate initially is initially the only one with access to publishing new versions, yanking existing versions etc. To delegate access use the `cargo owner` command (note: this can only be done if a crate is already published), for example:

* `cargo owner --add github-handle` - give access to a specific user
* `cargo owner --add github:org-name:team-name` - give access to a GitHub team within an organization

# Release process in GitHub CI

Running `cargo publish` can easily be done within the release workflow, but for now we decided to do it manually.

# References

* <https://doc.rust-lang.org/cargo/reference/publishing.html>
* <https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html>
* <https://rust-lang.github.io/api-guidelines/>