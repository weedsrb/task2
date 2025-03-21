document.addEventListener('DOMContentLoaded', () => {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
    
    function updateParallax() {
      const scrollY = window.pageYOffset;
      
      document.querySelector('.layer1').style.transform = `translateY(${scrollY * 0.3}px)`;
      document.querySelector('.layer2').style.transform = `translateY(${scrollY * 0.5}px)`;
      document.querySelector('.layer3').style.transform = `translateY(${scrollY * 0.7}px)`;
      document.querySelector('.layer4').style.transform = `translateY(${scrollY * 0.9}px)`;
      
      document.querySelector('.shape1').style.transform = `translateY(${scrollY * 0.6}px)`;
      document.querySelector('.shape2').style.transform = `translateY(${scrollY * 0.4}px)`;
      document.querySelector('.shape3').style.transform = `translateY(${scrollY * 0.8}px)`;
      document.querySelector('.shape4').style.transform = `translateY(${scrollY * 0.5}px)`;
      document.querySelector('.shape5').style.transform = `translateY(${scrollY * 0.7}px)`;
      document.querySelector('.shape6').style.transform = `translateY(${scrollY * 0.3}px)`;
      
      ticking = false;
    }
  });
  