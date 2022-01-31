const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');
var previous = "home"

window.addEventListener('scroll',()=>{
    let current = ""
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionHeight+sectionTop;
        if(scrollY >= (sectionTop) && scrollY < sectionBottom){
            current = section.getAttribute("id");
            if(previous && previous!=current){
                navbar.classList.remove(previous+"1");
                previous = section.getAttribute("id");
            }
            navbar.classList.add(current+"1")
        }
        if(scrollY < sections[0].offsetTop){
            navbar.classList.remove(previous+1);
            previous = 'home';
        }
    })
})

