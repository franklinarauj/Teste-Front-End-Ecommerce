function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 320) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)