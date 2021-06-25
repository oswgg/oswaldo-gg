// ------- Variables

const nav = document.querySelector('.nav');
const openMenu = document.getElementById('open-menu');


// ------- EventListeners
document.addEventListener('DOMContentLoaded', animate);
window.addEventListener('scroll', changeColorNav);
window.addEventListener('click', moverMenu);


// ------- Funciones

function animate() {
    
    const animations = document.querySelectorAll('.anim');
        
    const observer = new IntersectionObserver( entries => {
       entries.forEach(entry =>  {
            if ( entry.intersectionRatio > 0 ) {
                entry.target.style.animation = `${entry.target.dataset.type} 1s forwards`
            } else { 
                entry.target.style.animation = 'none';
            }
        })
    });

    animations.forEach( item => {
        observer.observe(item)
    } )

}

function changeColorNav() {
    if( window.innerWidth > 425 ) {
        if( scrollY !== 0 ) {
            nav.style.background = '#050505';
        } else {
            nav.style.background = 'none';
        }
    } else {
        if( scrollY > window.innerHeight - 10) {
            openMenu.style.fill = '#050505';
        } else {
            openMenu.style.fill = '#ffff';
        }
    }
}

function moverMenu(e) {
    if( e.target === openMenu || e.target.classList.contains('nav-menu__link') || e.target.classList.contains('nav') ) {
        nav.classList.toggle('move-menu')
    }
}

