const headerSection = document.querySelector('.header_section')

addEventListener('scroll', e => {
    if (window.scrollY > 0) headerSection.classList.add('add-shadow')
    else headerSection.classList.remove('add-shadow')
})

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll' , scrollActive)
 
function scrollActive(){
    const scrollY = window.pageYOffset
 
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-100;
        sectionId = current.getAttribute('id')
        //console.log(sectionId)
 
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav-item a[href*=${sectionId}]`).classList.add('active')
        }else{
            document.querySelector(`.nav-item a[href*=${sectionId}]`).classList.remove('active')
        }
    })
}