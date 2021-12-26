import Head from 'next/head';
import styles from '../styles/About.module.css';
import { Navbar } from '../components/navbar';
import Footer from '../components/Footer/Footer';

export const EOM = ({ about }) => {
  return (
    <>
      <Head>
        <title>About Me - Naufal Akbar Nugroho</title>
        <meta
          name="description"
          content={`let's get acquainted with this website builder, Hi my name is ${about.name}`}
        />

        <meta property="og:image" content={about.image} />
        <meta property="og:title" content="About Me - Naufal Akbar Nugroho" />
        <meta
          property="og:description"
          content={`let's get acquainted with this website builder, Hi my name is ${about.name}`}
        />

        <meta property="twitter:image" content={about.image} />
        <meta property="twitter:title" content="About Me - Naufal Akbar Nugroho" />
        <meta
          property="twitter:description"
          content={`let's get acquainted with this website builder, Hi my name is ${about.name}`}
        />
      </Head>

      <div className="page-container">
        <Navbar />

        <div className={styles.main}>
          <h1>About Me</h1>

          <div className={styles.about}>
            <h3>{about.name}</h3>
            <h5>{about.position}</h5>
            <img src={about.image} alt="About Me" />
            <p>{about.description}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/nuflakbrr/next-news/aboutMe',
  );
  const about = await apiResponse.json();

  return {
    props: {
      about,
    },
  };
};

export default EOM;