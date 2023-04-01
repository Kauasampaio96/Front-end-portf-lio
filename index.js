gsap.from('.navbar', {
  duration: 1,
  delay: 0.5,
  ease: "back.out(1.7)",
  y: '-100%'
})

gsap.from('.hero', {
  duration: 2.5,
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

