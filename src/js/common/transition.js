import { fadeOut, fadeIn } from './animations'

export const transition = () => {
  const transitionLayer = document.querySelector('.js-transition')
  const header = document.querySelector('.js-header')
  const loader = transitionLayer.querySelector('.js-loader')

  fadeIn(header)
  setTimeout(() => {
    fadeOut(loader)
  }, 750)
  setTimeout(() => {
    fadeOut(transitionLayer)
  }, 1250)
  setTimeout(() => {
    transitionLayer.classList.add('hidden')
  }, 1750)
}
