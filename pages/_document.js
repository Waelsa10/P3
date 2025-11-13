// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta name="description" content="SwiftTalk - Real-time messaging application" />
        <meta name="theme-color" content="#075e54" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* PWA manifest (optional) */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple touch icon (optional) */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}