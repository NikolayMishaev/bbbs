function setupFBframe(frame) {
  const container = frame.parentNode;

  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;

  let src =
    "https://www.facebook.com/plugins/page.php?" +
    "href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia" +
    "&tabs=timeline" +
    "&width=" +
    containerWidth +
    "&height=" +
    containerHeight +
    "&small_header=false" +
    "&adapt_container_width=false" +
    "&hide_cover=true" +
    "&hide_cta=true" +
    "&show_facepile=true" +
    "&appId";

  frame.width = containerWidth;
  frame.height = containerHeight;
  frame.src = src;
}

/* begin Document Ready */
document.addEventListener('DOMContentLoaded', function() {
  const facebookIframe = document.querySelector('#facebook-iframe');
  setupFBframe(facebookIframe);

  /* begin Window Resize */

  (function() {
    window.addEventListener("resize", resizeThrottler, false);

    let resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      document.querySelector('#facebook-iframe').removeAttribute('src');
      setupFBframe(facebookIframe);
    }
  })();
  /* end Window Resize */
});
/* end Document Ready */