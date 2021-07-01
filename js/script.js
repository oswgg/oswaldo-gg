// ------- Variables

const nav = $('.nav');
const openMenu = $('#open-menu');


// ------- EventListeners
$(document).ready(animate);

$(window).scroll(changeColorNav);

openMenu.click(moverMenu);
$('.nav-menu__link').click(moverMenu)

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
            nav.css('background', '#050505') ;
        } else {
            nav.css('background', 'none') ;
        }
    } else {
        if( scrollY > window.innerHeight - 10) {
            openMenu.css('fill', '#050505');
        } else {
            openMenu.css('fill', '#ffff');
        }
    }
}

function moverMenu() {
    nav.toggleClass('move-menu')
}

