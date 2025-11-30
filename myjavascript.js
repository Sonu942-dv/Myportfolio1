 
    const navToggle = document.getElementById('navToggle');
    if(navToggle){
      navToggle.addEventListener('click',()=>{
        const ul = document.querySelector('.main-nav ul');
        if(ul.style.display === 'flex') ul.style.display = ''; else ul.style.display = 'flex';
        ul.style.flexDirection = 'row';
        
      });
    }


    (function(){
    const pre = document.getElementById('preloader');
    function hidePreloader(){
      if(!pre) return;
      pre.classList.add('hidden');
      // optional: remove from DOM after animation completes
      setTimeout(()=> pre.remove(), 1000);
    }
    window.addEventListener('load', hidePreloader);
    // Fallback: if load hangs, hide anyway after 8s
    setTimeout(()=> {
      if(pre && !pre.classList.contains('hidden')) hidePreloader();
    }, 8000);
   })();