document.getElementById('scrollButton').addEventListener('click', function() {
    
    var targetSection = document.getElementById('targetSection');

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    setTimeout(function(){
        targetSection.classList.add('active');
    }, 500);
})