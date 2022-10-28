const headerSection = document.querySelector('.header_section')
addEventListener('scroll', () => {
    if (window.scrollY > 0) headerSection.classList.add('add-shadow')
    else headerSection.classList.remove('add-shadow')
})