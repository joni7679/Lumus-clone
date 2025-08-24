gsap.registerPlugin(SplitText)

let heading = SplitText.create(".heading", { type: "words, chars" });

gsap.from(heading.chars, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});

let subHeading = SplitText.create(".subHeading", { type: "lines, words", });

// now animate the characters in a staggered fashion
gsap.from(subHeading.lines, {
    duration: 1,
    y: 100,       // animate from 100px below
    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
    stagger: 0.05 // 0.05 seconds between each
});