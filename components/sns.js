import FadeInSnsList from "./fadeInArchiveList";

function sns() {

  return (
    <section className="p-sns">
      <iframe className="" src="https://www.youtube.com/embed/KXV01nwUV7s?si=LMgXFy2Ol61JAimA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <ul className="p-sns__lists">
        <FadeInSnsList>
          <a href="https://twitter.com/sgtppppp">
            <img className="c-logo--x" src="/image/logo_x.png" alt="logo_x" loading="lazy" width="16px" height="16px" />
          </a>
        </FadeInSnsList>
        <FadeInSnsList>
          <a href="https://www.instagram.com/shirokuma_official_/">
            <img className="c-logo--instagram" src="/image/logo_instagram.png" alt="logo_instagram" loading="lazy" width="17px" height="17px" />
          </a>
        </FadeInSnsList>
        <FadeInSnsList>
          <a href="mailto:sgtppppp0804@gmail.com">
            <img className="c-logo--mail" src="/image/logo_mail.png" alt="logo_mail" loading="lazy" width="23px" height="16px" />
          </a>
        </FadeInSnsList>
        <FadeInSnsList>
          <a href="https://www.youtube.com/@tamaranzakarecord/videos">
            <img className="c-logo--youtube" src="/image/logo_youtube.png" alt="logo_youtube" loading="lazy" width="24px" height="16px" />
          </a>
        </FadeInSnsList>
      </ul>
    </section>
  );
}

export default sns;
