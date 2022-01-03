import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import emotionReset from 'emotion-reset';
import { css, Global } from '@emotion/react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <Global
          styles={css`
            ${emotionReset}
            #__next {
              height: 100vh;
            }

            *:focus {
              outline-color: rgb(13, 164, 235);
            }

            button {
              background-color: rgb(13, 164, 235);
              border: none;
              color: white;
            }
          `}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
