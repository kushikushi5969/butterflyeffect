function fv() {
  const positionPc = {
    padding: "42.81% 0 0 0",
    position: "relative"
  };
  const positionSp = {
    padding: "177.78% 0 0 0",
    position: "relative"
  };

  const iframe = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%"
  }

  return (
    <div className="p-fv">
      <div id="video-pc" style={positionPc}><iframe src="https://player.vimeo.com/video/873331635?autoplay=1&amp;loop=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" style={iframe} title="fv_pc"></iframe></div>
      <div id="video-sp" style={positionSp}><iframe src="https://player.vimeo.com/video/873331566?autoplay=1&amp;loop=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" style={iframe} title="fv_sp"></iframe></div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}

export default fv;
