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
        <div className='p-contact'>
          <h1>
            <picture>
              <source srcSet="/image/butterfly-effect-pc.png" media="(min-width:768px)" />
              <img className="" src="/image/butterfly-effect-sp.png" alt="BUTTERFLY EFFECT" loading="lazy" />
            </picture>
          </h1>
          <div className='p-contact__content'>
            <a className='p-contact__breadcrumb' href='/'>{arrow}<span>TOP</span></a>
            <h2>トークイベント</h2>
            <p className='p-contact__text'>2023年12月2日 18:00-19:00</p>
            <p className='p-contact__text'>登壇：Mai-kou / 吉田結美 (予定)</p>
            <p className='p-contact__text'>チケット：¥2,500 (事前予約制/1ドリンク付き)</p>
            <p className='p-contact__text'>お支払い方法：現金/Paypay(当日受付にてお支払い頂きます)</p>
            <form className='p-contact__form' action='' method='post'>
              <p className='p-contact__text'>お名前</p>
              <input className='p-contact__form__name' type="text" id="lastName" name="lastName" placeholder='姓' required />
              <input className='p-contact__form__name' type="text" id="firstName" name="firstName" placeholder='名' required />

              <p className='p-contact__text'>チケット枚数(お一人様3枚まで)</p>
              <label className='p-contact__form__ticket' for="ticketNumber">
                <select  id="ticketNumber" name="ticketNumber" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <span>枚</span>
              </label>

              <p className='p-contact__text'>メールアドレス</p>
              <input type="email" id="email" name="email" required />

              <input className='p-contact__form__submit' type="submit" value="送信" />
            </form>
          </div>
        </div>

      </main>
    </>
  );
}
