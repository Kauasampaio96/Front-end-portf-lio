// GSAP ANIMATIONS

gsap.from('.navbar', {
  duration: 1,
  delay: 1,
  ease: "back.out(1.7)",
  y: '-100%'
})

gsap.from('.hero', {
  duration: 3,
  delay: 1,
  ease: "power4",
  opacity: 0,
  x: '-8%',
  skewX: 20
  
})

gsap.from('.link-ancora', {
  duration: 2,
  delay: 1.5,
  ease: "power4",
  opacity: 0,
  bottom: '-100px',

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
const navbarmobLinks = document.querySelectorAll('.navbarmob-link')
let open = false

menuIcon.addEventListener('click', () => {
  window.scrollTo(0,0)
  sideNav.style.top = '0'
  
})

navbarmobLinks.forEach(element => {
  element.addEventListener('click', () => {
    sideNav.style.top = '-100vh'
  })
})


closeIcon.addEventListener('click', () => {
  sideNav.style.top = '-100vh'
  
})

//Scroll Top

window.onscroll = () => {
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    const scrollBtn = document.getElementById('scrollBtn')
    scrollBtn.style.display='flex'
    scrollBtn.addEventListener('click', () => {
      window.scrollTo(0,0)
    })
  }
  else{
    document.getElementById('scrollBtn').style.display='none'
  }
}
