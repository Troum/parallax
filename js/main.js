$().ready(function () {
    let controller = new ScrollMagic.Controller();
    $('.wrapper').each(function (item) {
        let tl = new TimelineMax();
        let child = $(this).find('.child');

        tl
            .to('.spacer', 2, {
                translateY: -210,
                autoAlpha: 0
            }, '-=3')
            .to(child, 1, {
                y: -190,
                scale: 1.09,
                ease: Linear.easeNone
            }, '-=3');

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '100%'
        })
            .setTween(tl)
            .addTo(controller)
    })

});
