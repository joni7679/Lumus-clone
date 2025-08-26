

gsap.registerPlugin(ScrollTrigger, SplitText);


document.addEventListener("DOMContentLoaded", () => {
    function smoothlenisAnimation() {
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

    }
    smoothlenisAnimation();

    function navbarAnimation() {
        gsap.timeline()
            .from("nav a, .social-icons, .logo", {
                y: -100,
                opacity: 0,
                stagger: 0.2
            });
    }
    navbarAnimation()

    function themeChange() {
        document.querySelectorAll(".section")
            .forEach((elem) => {
                ScrollTrigger.create({
                    trigger: elem,
                    start: "top 60%",
                    end: "bottom 60%",
                    // markers: true,
                    onEnter: function () {
                        document.body.setAttribute("theme", elem.dataset.color)
                    },
                    onEnterBack: function () {
                        document.body.setAttribute("theme", elem.dataset.color)
                    }
                })
            })
    }

    themeChange();

    // heroSection animation here.........
    function heroSection() {
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
    }
    heroSection();
    // leistungenSection  animation here...........
    function leistungenSection() {

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

    }
    leistungenSection();
    // darumlumusSectionAnimation  animation here.......
    function darumlumusSectionAnimation() {

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

    }
    darumlumusSectionAnimation();
    // feferenzensectionAnimation  animation here........
    function feferenzensectionAnimation() {

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
    }
    feferenzensectionAnimation();

    // showcase animation here.....
    function showCaseAnimation() {
        const customCursor = document.querySelector(".show-case-custom-cursor");
        const showcaseProjectCards = document.querySelectorAll(".project-card");
        const customicon = document.querySelector("#customicon")
        let heading = SplitText.create(".showcase-heading", { type: "chars", });
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".showcase-section",
                // markers: true,
                scroller: "body",
                start: "top 80%",
                end: "bottom 50%",
                scrub: true
            }
        });
        tl.from(heading.chars, {
            duration: 0.6,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05
        });
        showcaseProjectCards.forEach((card) => {
            const video = card.querySelector("video");
            card.addEventListener("mouseenter", () => {
                gsap.to(customCursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.out"
                });
            });

            card.addEventListener("mousemove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                gsap.to(customCursor, {
                    x: x + rect.left,
                    y: y + rect.top,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            card.addEventListener("click", () => {
                if (video.paused) {
                    video.play();
                    customicon.className = "ri-pause-circle-fill text-2xl"
                } else {
                    video.pause();
                    customicon.className = "ri-play-circle-fill text-2xl";
                }
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(customCursor, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }
    showCaseAnimation();

    // partner section animation here........
    function partner() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".partner-section",
                // markers: true,
                scroller: "body",
                start: "top 90%",
                end: "bottom 90%",
                scrub: 1
            }
        });
        let heading = SplitText.create(".partner-section h2", { type: "chars", });

        tl.from(heading.chars, {
            duration: 0.6,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05
        });

        let subHeading = SplitText.create(".partner-section .subHeading", { type: " words", });

        tl.from(subHeading.words, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05
        });
    }
    partner();


})
