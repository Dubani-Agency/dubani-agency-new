import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";
import * as gtag from "../lib/gtag";
import Script from "next/script";
import { useRouter } from "next/router";

import NProgress from "nprogress";
import Router from "next/router";
//la barre de chargement
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//TODO:Swap with our own
import "nprogress/nprogress.css";
import "../public/styles/nprogress.css";

function App({ Component, pageProps, apollo }) {
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("3272061786376016"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
