gsap.from('.navbar', {
  duration: 1,
  delay: 1,
  ease: "back.out(1.7)",
  y: '-100%'
})

gsap.from('.hero', {
  duration: 2,
  delay: 0.5,
  ease: "power4",
  opacity: 0,
  x: '-8%',
  skewX: 20
  
})

const circle = document.querySelector('.circle')

const moveCircle = (e) => {
  gsap.to('.circle', {
    duration: 1,
    x: e.pageX + '%',
    y: e.pageY + '%',
    ease: 'power3.out'
  })
}

window.addEventListener('mousemove', moveCircle)


// Mobile Menu

const menuIcon = document.getElementById('menu-icon')
const closeIcon = document.querySelector('.close-icon')
const sideNav = document.querySelector('.side-navbar')
let open = false

menuIcon.addEventListener('click', () => {
  sideNav.style.right = '0'
  
})

closeIcon.addEventListener('click', () => {
  sideNav.style.right = '-100%'
  
})

