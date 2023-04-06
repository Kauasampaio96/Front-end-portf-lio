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
  setTimeout(()=>{
    navBar.style.justifyContent = 'space-between'
  },500)
  
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
  newProject.style.backgroundImage = `url('${pj.bgImage}')`

  newProject.innerHTML = `
    <div class="project-single-text">
      <h1>${pj.title}</h1>
      <ul>
        ${pj.tecnologies}
      </ul>
      <div class="infobar">
        <p>${pj.title}</p>
        <button>Ver Mais</button>
      </div>
    </div>
`
  projectbox.appendChild(newProject)

})

// Modal

const modalbox =  document.querySelector('.modalbox')
const modal = document.createElement('div')
modal.classList.add('modal')

function modalData(pjId){

  const project = dados.filter(p=> p.title === pjId)

  modal.innerHTML = `
  
    <img id="closeiconmodal" class="close-icon" src="assets/close.svg" alt="">
  
    <div class="modal-video">
      <video autoplay muted controls loop src="${project[0].video}"></video>
  
    </div>
  
    <div class="modal-text">
  
      <h1>${project[0].title}</h1>
  
      ${project[0].modalContent}

    </div>
  
    <div class="project-links">
  
      <a target="_blank" href="${project[0].github}">Link do Repositório</a>
  
      <a target="_blank" href="${project[0].hospedagem}">Hospedagem</a>
  
    </div>
        
    `

  return modal


}




const projectSingle = document.querySelectorAll('.project-single')

projectSingle.forEach( pj=> {

  pj.addEventListener('click', ()=>{
    const pjTitle = (pj.querySelector('.project-single-text>h1').innerHTML)
    modalbox.style.display= 'flex'
    modal.classList.add('active')
    document.body.style.overflow = "hidden"
    document.querySelector('html').style.scrollBehavior = 'auto'
    
    window.scrollTo(0, 2100)
    document.querySelector('.modalbox').appendChild(modalData(pjTitle))

    document.getElementById('closeiconmodal').addEventListener('click', ()=>{
      modalbox.style.display= 'flex'
      modal.classList.remove('active')
      document.body.style.overflow = "visible"
      modalbox.style.display= 'none'
      
    })
  })
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
