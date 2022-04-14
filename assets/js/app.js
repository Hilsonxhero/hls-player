document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  var source = video.getElementsByTagName("source")[0].src;
  var player;
  //   var source = "https://uptv.upera.tv/2771740-0-hls.m3u8";
  var defaultOptions = {};
});

if (Hls.isSupported()) {
  console.log("isSupported");

  const hls = new Hls();

  //   console.log("source",source);
  hls.loadSource("https://uptv.upera.tv/2771740-0-hls.m3u8");

  hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    console.log("here");

    const availableQualities = hls.levels.map((l) => l.height);

    console.log("availableQualities", availableQualities);

    defaultOptions.quality = {
      default: availableQualities[0],
      options: availableQualities,
      forced: true,
      //   onChange: (e) => updateQuality(e),
    };

    console.log("sss");

    // Initialize here
    console.log("defaultOptions", defaultOptions);


    // var player = videojs("video", {});

    console.log("player");
  });
  hls.attachMedia(video);
  window.hls = hls;

  var player = videojs("video", {});

  var seekButtons = (window.seekButtons = player.seekButtons({
    forward: 600,
    back: 500,
  }));
  
} else {
}
