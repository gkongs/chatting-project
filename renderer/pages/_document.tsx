import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import emotionReset from 'emotion-reset';
import { css, Global } from '@emotion/react';
import { colors } from '../common/styles/variables';

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
              outline-color: dimgray;
            }

            button {
              background-color: dimgray;
              border: none;
              color: white;
              cursor: pointer;
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
