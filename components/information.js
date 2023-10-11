import FadeInTextInfo from "./fadeInTextInfo";

function archive() {

  return (
    <section className="p-information">
      <h2>information</h2>
      <div className="p-information__content">
        <div className="p-information__box">
          <FadeInTextInfo>
            会期
          </FadeInTextInfo>
          <FadeInTextInfo>
            <span className="medium date">2023年11月22日(水) - 12月17日(日)</span>
          </FadeInTextInfo>
          <FadeInTextInfo>
            12:00-20:00(最終日12:00-16:00)
          </FadeInTextInfo>
          <FadeInTextInfo>
            定休日：月/火
          </FadeInTextInfo>
          <FadeInTextInfo>
            お問い合わせ <a className="c-link" href="mailto:sgtppppp0804@gmail.com">sgtppppp0804@gmail.com</a>
          </FadeInTextInfo>
          <div className="p-information__contact">
            <FadeInTextInfo>
              トークイベント
            </FadeInTextInfo>
            <FadeInTextInfo>
              2023年12月2日 18:00-19:00(土) / ¥2,500
            </FadeInTextInfo>
            <FadeInTextInfo>
              <span className="small"><a className="c-link c-arrow" href="#contact">詳細・ご予約<span>＞</span></a></span>
            </FadeInTextInfo>
          </div>
        </div>
        <div className="p-information__box">
          <FadeInTextInfo>
            会場
          </FadeInTextInfo>
          <FadeInTextInfo>
            <span className="medium">VALLOON STUDIO SHIBUYA</span>
          </FadeInTextInfo>
          <FadeInTextInfo>
            〒150-0041 東京都渋谷区神南1丁目14-1
          </FadeInTextInfo>
          <FadeInTextInfo>
            コーポナポリ1階
          </FadeInTextInfo>
          <FadeInTextInfo>
            <a className="c-link" href="https://valloon.co.jp/">valloon.co.jp</a>
          </FadeInTextInfo>
          <FadeInTextInfo>
            <a href="https://maps.app.goo.gl/D2ruSzT17u2aVCuA8">
              <img className="" src="/image/map.png" alt="map" loading="lazy" />
            </a>
          </FadeInTextInfo>
        </div>
      </div>
    </section>
  );
}

export default archive;
