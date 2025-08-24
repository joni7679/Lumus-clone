

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger, SplitText);

let heading = SplitText.create(".heading", { type: "words, chars" });

gsap.from(heading.chars, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});

let subHeading = SplitText.create(".subHeading", { type: " words", });

gsap.from(subHeading.words, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});

let leistungenSection = SplitText.create(".leistungen-section h2", { type: "chars", });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".leistungen-section",
        // markers: true,
        scroller: "body",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1
    }
});

tl.from(leistungenSection.chars, {
    duration: 0.6,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});

gsap.set(".leistungen-card",
    {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "bottom"
    });

tl.to(".leistungen-card", {
    scaleY: 1,
    opacity: 0.7,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.5
});

let darumlumusSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".darumlumus-section",
        // markers: true,
        scroller: "body",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1
    }
});

let darumlumusHeading = SplitText.create(".darumlumus-section h2", { type: "chars", });

darumlumusSection.from(darumlumusHeading.chars, {
    duration: 0.6,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});

darumlumusSection.to(".darumlumus-btn", {
    opacity: 0.7,
    duration: 1.2,
    ease: "power2.out",
})

let feferenzensection = gsap.timeline({
    scrollTrigger: {
        trigger: ".feferenzen-section",
        // markers: true,
        scroller: "body",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1
    }
});

let feferenzensectionHeading = SplitText.create(".feferenzen-heading", { type: "chars", });

feferenzensection.from(feferenzensectionHeading.chars, {
    duration: 0.6,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});
