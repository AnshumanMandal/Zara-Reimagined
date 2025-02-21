// function loco(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
if (window.matchMedia("(max-width: 600px)").matches) {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)


    var tl = gsap.timeline();
    tl.to(".section-2 .cards",{
        transform:"translateX(-100%)",
        duration:1,
        scrollTrigger:{
            trigger :".section-2",
            scroller:"body",
            start:"top 0",
            end:"top -100%",
            pin:true,
            scrub:3
    }
    })

    tl.from(".section-3 .products .product1",{
        x:-500,
        opacity:0,
        scrollTrigger:{
            trigger :".section-3",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin:true,
            scrub:3
        }
    })
    tl.from(".section-3 .products .product2",{
        x:500,
        opacity:0,
        duration:5,
        scrollTrigger:{
            trigger :".section-3",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-4 .products1 .product3",{
        x:-400,
        opacity:0,
        scrollTrigger:{
            trigger :".section-4",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-4 .products1 .product4",{
        x:400,
        opacity:0,
        scrollTrigger:{
            trigger :".section-4",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })

    tl.from(".section-5 .products2 .product5",{
        x:-300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-5",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-5 .products2 .product6",{
        x:300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-5",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-6 .products3 .product7",{
        x:-300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-6",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-6 .products3 .product8",{
        x:300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-6",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    gsap.to(".section-1 .text",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-1",
            start:"top 0%",
            end:"top -20%",
            scrub:2,
            pin:true,
        }
    })
    tl.from(".section-2 h1",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-1",
            start:"top -80%",
            end:"top 0",
            scrub:3,
        
        }
    })
    tl.from(".section-3 .text-1",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-2",
            start:"top -100%",
            end:"top 0",
            scrub:3,
        }
    })
    tl.from(".section-4 .text-2",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-3",
            start:"top -100%",
            end:"top 0",
            scrub:3,
        }
    })
    tl.from(".section-5 .text-3",{
        y:100,
        opacity:0,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-4",
            start:"top -100%",
            end:"top 0",
            scrub:3,
        }
    })
    tl.from(".section-6 .text-4",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-5",
            start:"top -90%",
            end:"top 10%",
            scrub:3,
        
        }
    })

    var line1 = document.querySelector(".line-1")
    var line2 = document.querySelector(".line-2")
    var lines = document.querySelector(".lines")
    var menu = document.querySelector(".menu");
    var come = document.querySelector(".come")
    var h2 = document.querySelector(".menu h2")
    

    /*menu.addEventListener("mouseenter", function(){
        lines.style.gap = "10px";
    })
    
    menu.addEventListener("mouseleave", function(){
        lines.style.gap = "5px";
    })*/
    var flag = 0
    menu.addEventListener("click", function(){
        if (flag==0){
            come.style.scale = "1";
            lines.style.gap = "5";
            lines.style.display = "fixed";
            line1.style.rotate = "-60deg";
            line2.style.rotate = "60deg";
            line1.style.backgroundColor = "black";
            line2.style.backgroundColor = "black";
            h2.innerHTML = "close";
            flag = 1;
        }
        else{
            come.style.scale = "0";
            line1.style.rotate = "0deg";
            line2.style.rotate = "0deg";
            h2.innerHTML = "Menu";
            lines.style.gap = "";
            lines.style.display = "5px";
            line1.style.backgroundColor = "white";
            line2.style.backgroundColor = "white";
            flag = 0;
        }
    })



    var elem = document.querySelector(".elem");
    var image = document.querySelector(".elem .image");

    elem.addEventListener("mouseenter", function() {
    image.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem.addEventListener("mousemove", function(dets) {
    var rect = elem.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image.style.left = x + "px";
    image.style.top = y + "px";
    });

    elem.addEventListener("mouseleave", function() {
    image.style.transform = "translate(-50%, -50%) scale(0)";
    });


    var elem1 = document.querySelector(".elem1");
    var image1 = document.querySelector(".elem1 .image1");

    elem1.addEventListener("mouseenter", function() {
    image1.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem1.addEventListener("mousemove", function(dets) {
    var rect = elem1.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image1.style.left = x + "px";
    image1.style.top = y + "px";
    });

    elem1.addEventListener("mouseleave", function() {
    image1.style.transform = "translate(-50%, -50%) scale(0)";
    });

    var elem2 = document.querySelector(".elem2");
    var image2 = document.querySelector(".elem2 .image2");

    elem2.addEventListener("mouseenter", function() {
    image2.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem2.addEventListener("mousemove", function(dets) {
    var rect = elem2.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image2.style.left = x + "px";
    image2.style.top = y + "px";
    });

    elem2.addEventListener("mouseleave", function() {
    image2.style.transform = "translate(-50%, -50%) scale(0)";
    });


    var elem3 = document.querySelector(".elem3");
    var image3 = document.querySelector(".elem3 .image3");

    elem3.addEventListener("mouseenter", function() {
    image3.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem3.addEventListener("mousemove", function(dets) {
    var rect = elem3.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image3.style.left = x + "px";
    image3.style.top = y + "px";
    });

    elem3.addEventListener("mouseleave", function() {
    image3.style.transform = "translate(-50%, -50%) scale(0)";
    });

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const navTextElements = navbar.querySelectorAll('h1, .profile h5, .menu h2, .menu .lines .line1, .menu ');
        if (window.scrollY > 2300) {
            navTextElements.forEach(element => {
                element.style.color = 'rgba(255, 255, 255, 1)'; 
            });
        } else {
            navTextElements.forEach(element => {
                element.style.color = '#000'; 
            });
        }
    });
    window.addEventListener('scroll', function() {
        const lines = document.getElementById('line-1');
        if (window.scrollY > 2300) {
            lines.style.backgroundColor = 'rgba(255,255,255,1)';  
        } else {
            lines.style.backgroundColor = 'rgba(0,0,0,1)';
        }
    })
    window.addEventListener('scroll', function() {
        const lines = document.getElementById('line-2');
        if (window.scrollY > 2300) {
            lines.style.backgroundColor = 'rgba(255,255,255,1)'; 
        } else {
            lines.style.backgroundColor = 'rgba(0,0,0,1)';
        }
    })
}



else{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)


    var tl = gsap.timeline();
    tl.to(".section-2 .cards",{
        transform:"translateX(-100%)",
        duration:1,
        scrollTrigger:{
            trigger :".section-2",
            scroller:"body",
            start:"top 0",
            end:"top -100%",
            pin:true,
            scrub:3
    }
    })

    tl.from(".section-3 .products .product1",{
        x:-500,
        opacity:0,
        scrollTrigger:{
            trigger :".section-3",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin:true,
            scrub:3
        }
    })
    tl.from(".section-3 .products .product2",{
        x:500,
        opacity:0,
        duration:5,
        scrollTrigger:{
            trigger :".section-3",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-4 .products1 .product3",{
        x:-400,
        opacity:0,
        scrollTrigger:{
            trigger :".section-4",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-4 .products1 .product4",{
        x:400,
        opacity:0,
        scrollTrigger:{
            trigger :".section-4",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })

    tl.from(".section-5 .products2 .product5",{
        x:-300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-5",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-5 .products2 .product6",{
        x:300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-5",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-6 .products3 .product7",{
        x:-300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-6",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    tl.from(".section-6 .products3 .product8",{
        x:300,
        opacity:0,
        scrollTrigger:{
            trigger :".section-6",
            scroller:"body",
            start:"top 0%",
            end:"top 0",
            pin: true,
            scrub:3
        }
    })
    gsap.to(".section-1 .text",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-1",
            start:"top 0%",
            end:"top -20%",
            scrub:2,
            pin:true,
        }
    })
    tl.from(".section-2 h1",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-1",
            start:"top -80%",
            end:"top 0",
            scrub:3,
        
        }
    })
    tl.from(".section-3 .text-1",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-2",
            start:"top -100%",
            end:"top 0",
            scrub:3,
        }
    })
    tl.from(".section-4 .text-2",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-3",
            start:"top -100%",
            end:"top 0",
            scrub:3,
        }
    })
    tl.from(".section-5 .text-3",{
        y:100,
        opacity:0,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-4",
            start:"top -100%",
            end:"top 0",
            scrub:3,
        }
    })
    tl.from(".section-6 .text-4",{
        y:100,
        opacity:0,
        pin:true,
        scrollTrigger:{
            scroller:"body",
            trigger:".section-5",
            start:"top -90%",
            end:"top 10%",
            scrub:3,
        
        }
    })

    var line1 = document.querySelector(".line-1")
    var line2 = document.querySelector(".line-2")
    var lines = document.querySelector(".lines")
    var menu = document.querySelector(".menu");
    var come = document.querySelector(".come")
    var h2 = document.querySelector(".menu h2")

    menu.addEventListener("mouseenter", function(){
        lines.style.gap = "10px";
    })
    
    menu.addEventListener("mouseleave", function(){
        lines.style.gap = "5px";
    })
    var flag = 0
    menu.addEventListener("click", function(){
        if (flag==0){
            come.style.scale = "1";
            lines.style.gap = "0px";
            lines.style.display = "inline";
            line1.style.rotate = "-30deg";
            line2.style.rotate = "30deg";
            h2.innerHTML = "close";
            flag = 1;
        }
        else{
            come.style.scale = "0";
            line1.style.rotate = "0deg";
            line2.style.rotate = "0deg";
            h2.innerHTML = "Menu";
            lines.style.gap = "";
            lines.style.display = "";
            flag =0;
        }
    })



    var elem = document.querySelector(".elem");
    var image = document.querySelector(".elem .image");

    elem.addEventListener("mouseenter", function() {
    image.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem.addEventListener("mousemove", function(dets) {
    var rect = elem.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image.style.left = x + "px";
    image.style.top = y + "px";
    });

    elem.addEventListener("mouseleave", function() {
    image.style.transform = "translate(-50%, -50%) scale(0)";
    });


    var elem1 = document.querySelector(".elem1");
    var image1 = document.querySelector(".elem1 .image1");

    elem1.addEventListener("mouseenter", function() {
    image1.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem1.addEventListener("mousemove", function(dets) {
    var rect = elem1.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image1.style.left = x + "px";
    image1.style.top = y + "px";
    });

    elem1.addEventListener("mouseleave", function() {
    image1.style.transform = "translate(-50%, -50%) scale(0)";
    });

    var elem2 = document.querySelector(".elem2");
    var image2 = document.querySelector(".elem2 .image2");

    elem2.addEventListener("mouseenter", function() {
    image2.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem2.addEventListener("mousemove", function(dets) {
    var rect = elem2.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image2.style.left = x + "px";
    image2.style.top = y + "px";
    });

    elem2.addEventListener("mouseleave", function() {
    image2.style.transform = "translate(-50%, -50%) scale(0)";
    });


    var elem3 = document.querySelector(".elem3");
    var image3 = document.querySelector(".elem3 .image3");

    elem3.addEventListener("mouseenter", function() {
    image3.style.transform = "translate(-50%, -50%) scale(1)";
    });

    elem3.addEventListener("mousemove", function(dets) {
    var rect = elem3.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;
    image3.style.left = x + "px";
    image3.style.top = y + "px";
    });

    elem3.addEventListener("mouseleave", function() {
    image3.style.transform = "translate(-50%, -50%) scale(0)";
    });

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const navTextElements = navbar.querySelectorAll('h1, .profile h5, .menu h2, .menu .lines .line1, .menu ');
        if (window.scrollY > 2300) {
            navTextElements.forEach(element => {
                element.style.color = 'rgba(255, 255, 255, 1)'; 
            });
        } else {
            navTextElements.forEach(element => {
                element.style.color = '#000'; 
            });
        }
    });
    window.addEventListener('scroll', function() {
        const lines = document.getElementById('line-1');
        if (window.scrollY > 2300) {
            lines.style.backgroundColor = 'rgba(255,255,255,1)';  
        } else {
            lines.style.backgroundColor = 'rgba(0,0,0,1)';
        }
    })
    window.addEventListener('scroll', function() {
        const lines = document.getElementById('line-2');
        if (window.scrollY > 2300) {
            lines.style.backgroundColor = 'rgba(255,255,255,1)'; 
        } else {
            lines.style.backgroundColor = 'rgba(0,0,0,1)';
        }
    })
}
