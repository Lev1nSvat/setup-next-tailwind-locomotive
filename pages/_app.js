import '../styles/globals.css'
import '../styles/locomotive-scroll.css'
import React, { useEffect } from 'react';
import { useRouter} from 'next/router';
import Head from 'next/head';
import favicon from "../public/favicon.ico"


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
      let scroll;
      import("locomotive-scroll").then((locomotiveModule) => {
          scroll = new locomotiveModule.default({
              el: document.querySelector("[data-scroll-container]"),
              smooth: true,
              smoothMobile: false,
              resetNativeScroll: true
          });
      });
      const handleRouteChange = () => {
        scroll.destroy()
      }
      router.events.on('routeChangeStart', handleRouteChange)
      
  });

  return (
    <>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div data-scroll-container>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
