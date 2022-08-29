import { transition } from './common/transition'
import { openMenu, closeMenu } from './components/menu'
import {
  eFadeIn,
  eFadeInUp,
  eFadeInDown,
  eFadeInLeft,
  eFadeInRight,
  eSlideRight,
} from './common/animations'
import { scrollTo } from './common/scroll'
import { hero } from './components/hero'

// Global
// Menu
const hamburger = document.querySelector('.js-hamburguer')
const navClose = document.querySelector('.js-nav-close')
const navBackdrop = document.querySelector('.js-nav-backdrop')

// Scroll
const scrollButtons = document.querySelectorAll('.js-scroll')

// Hero
const heroItems = document.querySelectorAll('.js-hero-item')

// Resize
const resize = () => {
}

// On Scroll
const onScroll = () => {
}

// Init
const init = () => {
  // Transition init
  transition()

  // Menu init
  hamburger.addEventListener('click', openMenu, false)
  navClose.addEventListener('click', closeMenu, false)
  navBackdrop.addEventListener('click', closeMenu, false)

  // Animations init
  const fadeInTrigger = document.querySelectorAll('.js-fade-in')
  const fadeInUpTrigger = document.querySelectorAll('.js-fade-in-up')
  const fadeInDownTrigger = document.querySelectorAll('.js-fade-in-down')
  const fadeInLeftTrigger = document.querySelectorAll('.js-fade-in-left')
  const fadeInRightTrigger = document.querySelectorAll('.js-fade-in-right')
  const slideRightTrigger = document.querySelectorAll('.js-slide-right')
  fadeInTrigger.forEach( e => eFadeIn(e))
  fadeInUpTrigger.forEach( e => eFadeInUp(e))
  fadeInDownTrigger.forEach( e => eFadeInDown(e))
  fadeInLeftTrigger.forEach( e => eFadeInLeft(e))
  fadeInRightTrigger.forEach( e => eFadeInRight(e))
  slideRightTrigger.forEach( e => eSlideRight(e))

  // Scroll init
  scrollButtons.forEach( e => e.addEventListener('click', scrollTo, false))

  // Hero init
  hero(heroItems)

  // Resize init
  window.addEventListener('resize', resize)

  // On Scroll init
  window.addEventListener('scroll', onScroll)
};

document.addEventListener('DOMContentLoaded', init, false)
