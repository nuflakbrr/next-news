import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Feed.module.css';
import { Navbar } from '../../components/navbar';

export const Feed = ({ articles, pageNumber }) => {
  const router = useRouter();
  return articles.length ? (
    <>
      <Head>
        <title>International News - Naufal Akbar Nugroho</title>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + ' and more!'} />
      </Head>
      <div className="page-container">
        <Navbar />

        <div className={styles.main}>
          {articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
              <p>{article.description}</p>
              {!!article.urlToImage && <img src={article.urlToImage} />}
            </div>
          ))}
        </div>

        <div className={styles.paginator}>
          <div
            className={pageNumber === 1 ? styles.disabled : styles.active}
            onClick={() => {
              if (pageNumber > 1) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router.push(`/international/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Previous Page
          </div>

          <div>{pageNumber}</div>

          <div
            className={pageNumber === 5 ? styles.disabled : styles.active}
            onClick={() => {
              if (pageNumber < 5) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router.push(`/international/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="page-container">
      <Navbar />
      <div className={styles.main}>
        <h1>Oops! No articles for this page</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&apiKey=caaca86b60774c89b0c0f6ee07d8e0bc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;