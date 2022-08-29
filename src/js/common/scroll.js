export const scrollTo = e => {
  e.preventDefault()
  const scrollTargetId = e.currentTarget.dataset.target
  const scrollTarget = document.getElementById(scrollTargetId)

  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: scrollTarget.offsetTop - 80
  })
}
