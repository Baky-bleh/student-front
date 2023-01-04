import '../styles/tailwind.css'
import React from "react";
import App from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    const Layout = Component.layout || (({children}) => <>{children}</>);
    return (
        <React.Fragment>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>University</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
    )
  }
}