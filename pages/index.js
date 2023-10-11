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
