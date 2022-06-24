$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });
    // toogle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});

// typed animation script
var typed = new Typed(".typing",{
    strings:["Programmer.", "Full Stack Developer.", "Software Engineer.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2",{
    strings:["Programmer.", "Full Stack Developer.", "Software Developer.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});