document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.r1, .r2');
    
    const checkPosition = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top <= viewportHeight * 0.75 && rect.bottom >= 0) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();


    document.getElementById("one").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik/Q-Hired", '_blank')
    })
    document.getElementById("two").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik/Email-Priority-Sorting-System", '_blank')
    })
    document.getElementById("three").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik/AutoBuildML", '_blank')
    })
    document.getElementById("four").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik/STOCK_Movement", '_blank')
    })
    document.getElementById("five").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik/movieRecommendaionWebApp", '_blank')
    })
    document.getElementById("six").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik/NMT", '_blank')
    })
    document.getElementById("seven").addEventListener("click",()=>{
      window.open("https://github.com/areddysathvik?tab=repositories", '_blank')
    })
  });
