$(document).ready(function() {
					
					
    $(".question a").click(function() {
        $(this).toggleClass("active_qa");
    });
       
       $(".smiley").click(function() {
           $(this).toggleClass("test");                       
           $(this).siblings().removeClass("test");
           
           
    });
    
    });

document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
if(!entry.classList.contains('active')) {
document.querySelector('.feedback li.active').classList.remove('active');
entry.classList.add('active');
}
e.preventDefault();
}));