import gsap from 'gsap'

const nav = document.querySelector('.js-nav')
const navBackdrop = document.querySelector('.js-nav-backdrop')
const navWrapper = document.querySelector('.js-nav-wrapper')
const navContent = document.querySelector('.js-nav-content')

export const openMenu = () => {
  nav.classList.remove('hidden')
  const modalWrapperWidth = navWrapper.offsetWidth
  gsap.fromTo(navBackdrop, { opacity: 0 }, { duration: 0.5, opacity: 1 })
  gsap.fromTo(navWrapper, { x: modalWrapperWidth }, { duration: 0.5, x: 0 })
  gsap.fromTo(navContent, { opacity: 0 }, { duration: 0.5, opacity: 1, delay: 0.5 })
}

export const closeMenu = () => {
  const modalWrapperWidth = navWrapper.offsetWidth
  gsap.to(navContent, { duration: 0.5, opacity: 0 })
  gsap.to(navBackdrop, { duration: 0.5, opacity: 0, delay: 0.25 })
  gsap.to(navWrapper, { duration: 0.5, x: modalWrapperWidth, delay: 0.25 })
  setTimeout(() => {
    nav.classList.add('hidden')
  }, 750);
}
