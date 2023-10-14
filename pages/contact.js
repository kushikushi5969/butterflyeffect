import Head from 'next/head';
import Form from '../components/form';

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
            <Form />
          </div>
        </div>

      </main>
    </>
  );
}
