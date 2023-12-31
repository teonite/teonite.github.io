#!/bin/bash

pnpm build && (cd dist && bsdtar --no-acls --no-mac-metadata --no-xattrs --exclude Dockerfile --exclude-vcs --exclude '*.yml' --exclude README.md --exclude '*.sh' -cf - . | kubectl -n dynamic-sites exec -it deploy/dynamic-sites -- tar -C /sites/teonite.com -xf -)
