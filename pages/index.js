import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Fv from '../components/fv';
import Intr from '../components/intr';
import Archives from '../components/archives';
import Information from '../components/information';
import Sns from '../components/sns';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>BUTTERFLY EFFECT</title>
        <link rel="icon" href="/favicon-butterflyeffect.png" />
        <link rel="apple-touch-icon" href="/favicon-butterflyeffect.png" />
        <link rel="canonical" href="https://butterflyeffect2023.com/" />
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
        <Fv />
        <Intr />
        <Archives />
        <Information />
        <Sns />
      </main>
    </div>
  );
}
