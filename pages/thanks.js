import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function contact() {
  const arrow = "<";

  return (
    <>
      <Head>
        <title>BUTTERFLY EFFECT</title>
        <link rel="icon" href="/favicon-butterflyeffect.png" />
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
            <a className='p-thanks__breadcrumb' href='/'>{arrow}<span>TOP</span></a>
            <h2>Thank you!</h2>
            <p className='p-thanks__text'>トークイベントのご予約が完了しました。</p>
            <p className='p-thanks__text'>ご予約完了メールをお送りしましたのでご確認下さい.</p>
            <p className='p-thanks__text'>尚キャンセルのご連絡や、ご不明点については<a className="c-link" href="mailto:sgtppppp0804@gmail.com">sgtppppp0804@gmail.com</a>までお問い合わせください。</p>
          </div>
        </div>

      </main>
    </>
  );
}
