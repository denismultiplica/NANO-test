import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const fadeIn = e => {
  gsap.from(e, { duration: 1, opacity: 0 })
}

export const fadeOut = e => {
  gsap.to(e, { duration: 1, opacity: 0 })
}

 export const eFadeIn = e => {
  gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0 })
}

 export const eFadeInUp = e => {
  gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, y: 100 })
}

 export const eFadeInDown = e => {
  gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, y: -100 })
}

 export const eFadeInLeft = e => {
  gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, x: -100 })
}

 export const eFadeInRight = e => {
  gsap.from(e, { scrollTrigger: e, duration: 1.5, opacity: 0, x: 100 })
}

 export const eSlideRight = e => {
  const eWidth = e.offsetWidth
  gsap.from(e, { scrollTrigger: e, duration: 2.5, x: eWidth })
}
