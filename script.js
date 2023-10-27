$(function() {
  const videoElement1 = $('#video1').get(0);
  const videoElement2 = $('#video2').get(0);

  if (!videoElement1 || !videoElement2) {
    console.error("Video element not found");
    return;
  }

  const videoSections = $('.video-section');

  $(window).scroll(function() {
    videoSections.each(function() {
      const videoSection = $(this);
      const video = videoSection.find('video').get(0);
      const sectionTop = videoSection.offset().top;
      const sectionBottom = sectionTop + videoSection.height();
      const currentScrollPosition = $(document).scrollTop();

      if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionBottom) {
        // In the video section
        if (video.duration) {
          const videoPosition = (currentScrollPosition - sectionTop) / videoSection.height();
          video.currentTime = videoPosition * video.duration;
          video.play();
        }
      } else {
        // Not in the video section
        video.pause();
      }
    });
  });
});