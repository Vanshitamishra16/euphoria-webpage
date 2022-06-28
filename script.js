var tl = gsap.timeline();
tl.from("#nav, #icons, #left>h1",{
    opacity:0,
    y:-50,
    duration:0.8
})

tl.from("#leftnav, #middle, #overlay",{
    opacity:0,
    x:-50,
    duration:0.8
})

tl.from("#big h1",{
    y:100,
    opacity:0,
    duration:3,
    ease: Expo.easeInOut
})