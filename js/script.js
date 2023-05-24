// ------- Variables

const nav = $('.nav')
const openMenu = $('#open-menu')
const d = document
const w = window

// ------- EventListeners
$(document).ready(animate)

$(window).scroll(changeColorNav)

openMenu.click(moverMenu)
$('.nav-menu__link').click(moverMenu)

// ------- Funciones

function animate() {
   const toAnimate = d.querySelectorAll('.fragment')

   const cb = entries => {
      entries.forEach(entry => {
         const anim = entry.target.querySelectorAll('.anim')
         const id = entry.target.getAttribute('id')

         if (entry.isIntersecting) {
            anim.forEach(
               el => (el.style.animation = `${el.dataset.type} .8s forwards`)
            )
            d.querySelector(`a[href="#${id}"]`).classList.add('active')
         } else {
            anim.forEach(
               el =>
                  (el.style.animation = `${el.dataset.type}-disappear .8s forwards`)
            )
            d.querySelector(`a[href="#${id}"]`).classList.remove('active')
         }
      })
   }

   const observer = new IntersectionObserver(cb, { threshold: [0.48] })

   toAnimate.forEach(el => observer.observe(el))
}

function changeColorNav() {
   if (window.innerWidth > 425) {
      if (scrollY !== 0) {
         nav.css('background', '#050505')
      } else {
         nav.css('background', 'none')
      }
   } else {
      if (scrollY > window.innerHeight - 10) {
         openMenu.css('fill', '#050505')
      } else {
         openMenu.css('fill', '#ffff')
      }
   }
}

function moverMenu() {
   nav.toggleClass('move-menu')
}
