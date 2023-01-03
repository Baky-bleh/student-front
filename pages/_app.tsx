import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';


initFontAwesome();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}:AppProps) {
  return (
    <>
    <UserProvider>
    <NavBar/>
    {/* <SessionProvider session={session}> */}
      
      
      <Component {...pageProps} />
      
    {/* </SessionProvider> */}
    </UserProvider>
    </>
  )
}