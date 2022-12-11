import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon-Clone</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <ProductFeed />
      </main>

      <footer></footer>
    </div>
  );
}
