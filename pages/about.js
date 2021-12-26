import Head from 'next/head';
import styles from '../styles/About.module.css';
import { Navbar } from '../components/navbar';

export const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>About Me - Naufal Akbar Nugroho</title>
        <meta
          name="description"
          content={`let's get acquainted with this website builder, Hi my name is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="About Me - Naufal Akbar Nugroho" />
        <meta
          property="og:description"
          content={`let's get acquainted with this website builder, Hi my name is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="About Me - Naufal Akbar Nugroho" />
        <meta
          property="twitter:description"
          content={`let's get acquainted with this website builder, Hi my name is ${employee.name}`}
        />
      </Head>

      <div className="page-container">
        <Navbar />

        <div className={styles.main}>
          <h1>About Me</h1>

          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt="About Me" />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/nuflakbrr/next-news/aboutMe',
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;