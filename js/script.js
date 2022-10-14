const slider = $(".grid3").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
});
    
    $(".button—prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});
    
    $(".button—next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});