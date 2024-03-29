$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed1 = new Typed(".typing", {
        strings: ["Full-Stack Developer", "Freelancer", "Programmer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed3 = new Typed(".typing-3", {
        strings: ["Full-Stack Developer", "Freelancer", "Programmer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 50,
        
        responsive: {
            1:{
                items: 1,
                nav: false
            },
        
        }
    });
});

const tl = gsap.timeline({scrollTrigger:{
    trigger: '#about-animate',
    // markers: true,
    start: "50% 50%",
    end: "100% 50%",
    scrub:2,
    pin: true,
}});

tl.to('#about-top',{
    top: '-50vh'
}, 'a')
.to('#about-bottom',{
    bottom: '-50vh'
}, 'a')
.to('#top-h1',{
    top: '58vh'
}, 'a')
.to('#bottom-h1',{
    bottom: '14vh'
}, 'a')
.to('#about-animate #about-center-p',{
    marginTop: 0
}, 'a')

const tl2 = gsap.timeline({scrollTrigger:{
    trigger: '#animate-project',
    // markers: true,
    start: "38% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
}});

tl2.to('#animate-project .text',{
    top: "-15%"
},'a')
tl2.to('#animate-project #card-one',{
    top: "40%"
},'a')
tl2.to('#animate-project #card-two',{
    top: "100%"
},'a')
tl2.to('#animate-project #card-two',{
    top: "45%"
},'b')
tl2.to('#animate-project #card-one',{
    width: "65%",
    height: "65vh"
},'b')
tl2.to('#animate-project #card-three',{
    top: "140%"
},'b')
tl2.to('#animate-project #card-three',{
    top: "52%"
},'c')
tl2.to('#animate-project #card-two',{
    width: "70%",
    height: "70vh"
},'c')

gsap.from(['.html', '.css', '.js', '.vue', '.php', '.laravel', '.mysql'],{
    width: "0%",
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
        trigger: ".html",
    }
})

