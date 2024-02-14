$(document).on("scroll", function(event) {
    pageTopDisplayControl()
})

function pageTopDisplayControl() {
    const $pageTopButton = $(".c-scroll-pagetop-local")

    if (window.scrollY > 300) {
        $pageTopButton.css("display", "block")
    } else {
        $pageTopButton.css("display", "none")
    }

    if ($(window).width() > 768) {
        console.log('width > 768')
        const $footer = $(".l-footer__inr")
        const windowHeight = window.innerHeight
        const footerPosition = $footer.offset().top;
        const footerHeight = $footer.outerHeight()

        if (windowHeight + window.scrollY <  footerPosition) {
            $pageTopButton.removeClass('is-active').css('bottom', '20px')
        } else {
            $pageTopButton.addClass('is-active').css('bottom', footerHeight + 20)
        }
    }
}

$(document).on("click", ".c-pagetop-trigger-local", function(event) {
    event.preventDefault()
    console.log('asdf')
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
})

AOS.init({
    offset: 50,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 50,
    once: true
});

$( document ).ready(function() {
    pageTopDisplayControl()

});
