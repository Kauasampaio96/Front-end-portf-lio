import dados from './projectdata.js'
 

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
const navBar = document.getElementById('navbar')


menuIcon.addEventListener('click', () => {
  
  //window.scrollTo(0,0)
  sideNav.style.top = '0'
  navBar.style.justifyContent = 'center'
  menuIcon.style.display = 'none'
  
})

navbarmobLinks.forEach(element => {
  element.addEventListener('click', () => {
    sideNav.style.top = '-100vh'
    menuIcon.style.display = 'block'
  })
})


closeIcon.addEventListener('click', () => {
  sideNav.style.top = '-100vh'
  menuIcon.style.display = 'block'
  navBar.style.justifyContent = 'space-between'
})

//Scroll Top

window.onscroll = () => {
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    const scrollBtn = document.getElementById('scrollBtn')
    scrollBtn.style.opacity='1'
    scrollBtn.addEventListener('click', () => {
      window.scrollTo(0,0)
    })
  }
  else{
    document.getElementById('scrollBtn').style.opacity='0'
  }
}

// Projects

dados.map( pj => {
  const projectbox = document.querySelector('.sc2-projects-box')

  const newProject =  document.createElement('div')
  newProject.classList.add('project-single')

  newProject.innerHTML = `
    <div class="project-single-text">
      <h1>${pj.title}</h1>
      <ul>
        ${pj.tecnologies}
      </ul>
    </div>
`

newProject.style.backgroundImage = `url('${pj.bgImage}')`
  

  projectbox.appendChild(newProject)

})





/*
const projectSingle = document.querySelectorAll('.project-single')


projectSingle.forEach(pj => {

  const projectSingleTitle = pj.querySelector('.project-single-text h1').innerHTML

  const titleFormated = formatTitle(projectSingleTitle)

  console.log(titleFormated)

  pj.style.backgroundImage = `url('../assets/${titleFormated}.png')`
  
})

*/







function formatTitle(title){
  title = title.replace(' ', '')
  title = title.toLowerCase()
  title = title.replace(' ', '')

  return title
}
