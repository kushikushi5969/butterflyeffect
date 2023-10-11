function fv() {

  return (
    <div className="p-fv">
      <video id="video-pc" muted autoPlay loop poster="/image/poster-pc.png">
        <source src="/video/fv_pc.mp4" type="video/mp4" />
      </video>
      <video id="video-sp" muted autoPlay loop poster="/image/poster-sp.png">
        <source src="/video/fv_sp.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default fv;
