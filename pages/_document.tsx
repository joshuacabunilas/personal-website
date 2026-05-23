import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* Runs before React hydration to set theme without flash.
              Falls back to OS preference when no stored value exists. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}else if(!t&&window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}}catch(e){}`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
