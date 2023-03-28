import Head from "next/head";
import Header from "./Header";
import HeadContent from "./HeadContent";
import Footer from "./Footer/Footer";

import '../../styles/custom-antd.css';

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>Happy Shop</title>
      </Head>
      <Header user={user} />
      <div style={{ paddingTop: "1em", margin: "1rem 4rem" }}>
        {children}
      </div> 
      <Footer />
    </>
  );
}

export default Layout;
