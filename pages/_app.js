import '../styles/globals.css';
import Layout from '../components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <div>
      <Layout>
      <Component {...pageProps} />
      </Layout>

    </div>
  )
}

