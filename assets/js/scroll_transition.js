const sections= document.querySelectorAll('.section');
const noSections= sections.length;

window.addEventListener('transition',() => {
    const scrollPosition=window.scrollY;
    const windowHeight=window.innerHeight;

    sections.forEach((section,index) => {
        if(scrollPosition >= index *windowHeight && scrollPosition < (index + 1) * windowHeight) {
            section.style.transform =`translateY(-${scrollPosition - index * windowHeight}px)`;

            if(sections[index + 1]){
                sections[index + 1].style.transform = `translateY(${(index + 1) * 100 - (scrollPosition / windowHeight) * 100}%)`;
            }
        }
    });
});