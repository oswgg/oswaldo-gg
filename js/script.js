// ------- Variables

const nav = document.querySelector('.nav');



// ------- EventListeners
document.addEventListener('DOMContentLoaded', animate);
window.addEventListener('scroll', changeColorNav);

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
    if( scrollY !== 0 ) {
        nav.style.background = '#050505';
    } else {
        nav.style.background = 'none';
    }
}