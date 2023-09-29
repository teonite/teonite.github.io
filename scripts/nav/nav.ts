/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import { animate } from "motion";

var prevScrollPos = window.scrollY;
var navAnimationInProgress = false;
var navHidden = false;

const navElement = document.getElementById("nav-main");

const updateNavDesktop = () => {
  if(navAnimationInProgress) {
    return;
  }
  const currentScrollPos = window.scrollY;
  // detect if should be scrolled
  if(currentScrollPos > prevScrollPos) {
    // means we scroll down
    if(currentScrollPos > 124) {
      // we passed nav height
      if(navElement && !navHidden && !navAnimationInProgress) {
        navAnimationInProgress = true;
        animate(navElement, {
          y: navElement.clientHeight * -1,
        }).finished.then(() => {
            navHidden = true;
            navAnimationInProgress = false;
        });
      }
    }
  } else {
      // we scroll up
      if(navElement && navHidden && !navAnimationInProgress) {
          navAnimationInProgress = true;
        animate(navElement, {
        y: 0,
      }).finished.then(() => {
          navHidden = false;
          navAnimationInProgress = false;
        });
      }
  }
  prevScrollPos = currentScrollPos;
}

if(navElement) {
  window.addEventListener("scroll", updateNavDesktop);
}


// mobile nav section

const mobileNavTrigger = document.getElementById("mobile-nav-trigger");
const mobileNavDismissal = document.getElementById("close-mobile-nav");
const mobileNavDialog = document.getElementById("mobile-nav") as HTMLDialogElement | undefined;

var mobileNavAnimationInProgress = false;

const mobileNavAnimationDuration  = 0.25;

if(mobileNavDialog && mobileNavTrigger && mobileNavDismissal) {
  const handleOpenNav = () => {
    if(mobileNavAnimationInProgress) return;
    mobileNavAnimationInProgress = true;
    mobileNavDialog.showModal();
    document.body.classList.add("hide-scroll");
    animate(mobileNavDialog, {
      opacity: 1,
    }, {
        duration: mobileNavAnimationDuration,
      }).finished.then(() => {
        mobileNavAnimationInProgress = false;
      });
  }

  const closeMobileNav = () => {
    if(mobileNavAnimationInProgress) return;
    mobileNavAnimationInProgress = true;
    animate(mobileNavDialog, {
      opacity: 0,
    },
    {
        duration: mobileNavAnimationDuration,
    }).finished.then(() => {
    mobileNavDialog.close();
    document.body.classList.remove("hide-scroll");
        mobileNavAnimationInProgress = false;
      });
  }

  mobileNavTrigger.addEventListener("click", handleOpenNav);
  mobileNavDismissal.addEventListener("click", closeMobileNav);
}
