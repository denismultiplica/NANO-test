import gsap from 'gsap'

let currentHeroItem = 0

export const hero = (e) => {
  if (e.length > 1) {
    e.forEach((e, i) => {
      if (i === 0) {
        e.classList.add('z-20')
        e.style.opacity = '1'
      } else if (i === 1) {
        e.classList.add('z-10')
        e.style.opacity = '0.5'
      } else {
        e.classList.add('z-0')
        e.style.opacity = '0'
      }
    })
    setInterval(() => goToHeroItem(e, currentHeroItem + 1), 6000)
  }
}

const goToHeroItem = (e, n) => {
  gsap.to(e[currentHeroItem], { duration: 0.3, opacity: 0 })
  setTimeout(() => {
    e[currentHeroItem].classList.remove('z-20')
    e[currentHeroItem].classList.add('z-0')
    currentHeroItem = (n + e.length) % e.length
  }, 300)
  setTimeout(() => {
    e[currentHeroItem].classList.remove('z-10')
    e[currentHeroItem].classList.add('z-20')
    gsap.to(e[currentHeroItem], { duration: 0.3, opacity: 1 })
    if (currentHeroItem + 1 < e.length) {
      e[currentHeroItem + 1].classList.remove('z-0')
      e[currentHeroItem + 1].classList.add('z-10')
      gsap.to(e[currentHeroItem + 1], { duration: 0.3, opacity: 0.5 })
    } else {
      e[0].classList.remove('z-0')
      e[0].classList.add('z-10')
      gsap.to(e[0], { duration: 0.3, opacity: 0.5 })
    }
  }, 600)
}
