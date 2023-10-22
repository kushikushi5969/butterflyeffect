import Head from 'next/head';

export default function contact() {
  const arrow = "<";

  return (
    <>
      <Head>
        <title>BUTTERFLY EFFECT</title>
        <link rel="icon" href="/favicon-butterflyeffect.png" />
        <meta property="og:title" content="BUTTERFLY EFFECT" />
        <meta property="og:site_name" content="BUTTERFLY EFFECT" />
        <meta property="og:description" content="2010年、高校一年生だった自分は、同級生とたった二人で人生初めてのバンドを結成した。「白熊ピカソズ」、そんなヘンテコな名前の、湘南の片隅のパンクバンドから自分の全てが始まった。" />
        <meta property="og:image" content="https://butterflyeffect2023.com/image/butterflyeffect.jpg" />
        <meta property="og:url" content="https://butterflyeffect2023.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BUTTERFLY EFFECT" />
        <meta name="twitter:description" content="2010年、高校一年生だった自分は、同級生とたった二人で人生初めてのバンドを結成した。「白熊ピカソズ」、そんなヘンテコな名前の、湘南の片隅のパンクバンドから自分の全てが始まった。" />
        <meta name="twitter:image" content="https://butterflyeffect2023.com/image/butterflyeffect.jpg" />
        <meta name="twitter:url" content="https://butterflyeffect2023.com/" />
      </Head>

      <main className="l-lp">
        <div className='p-thanks'>
          <h1>
            <picture>
              <source srcSet="/image/butterfly-effect-pc.png" media="(min-width:768px)" />
              <img className="" src="/image/butterfly-effect-sp.png" alt="BUTTERFLY EFFECT" loading="lazy" />
            </picture>
          </h1>
          <div className='p-thanks__content'>
            <div className='p-thanks__content-wrap'>
              <a className='p-thanks__breadcrumb' href='/'>{arrow}<span>TOP</span></a>
              <h2>Thank you!</h2>
              <p className='p-thanks__text'>トークイベントのご予約が完了しました。</p>
              <p className='p-thanks__text'>ご予約完了メールをお送りしましたのでご確認下さい。</p>
              <p className='p-thanks__text'>尚キャンセルのご連絡や、ご不明点については<a className="c-link" href="mailto:sgtppppp0804@gmail.com">sgtppppp0804@gmail.com</a>までお問い合わせください。</p>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
