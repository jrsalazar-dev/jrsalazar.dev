import { Global, css } from '@emotion/core'
import BaseHead from 'next/head'

export default function Head() {
  return (
    <div>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          html * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            overflow-x: hidden;
            font-family: Quicksand, sans-serif;
            font-weight: 300;
            font-size: 1.5rem;
            line-height: 1.5;
            background-color: #fefefe;
            color: #464646;
            width: 100%;

            @media print {
              font-size: 0.9rem;

              @page {
                size: A4;
                margin: 27mm 16mm; 
              }
            }
          }
          #__next-prerender-indicator {
            display: none;
          }
        `}
      />
      <BaseHead>
        <title>jrsalazar.dev</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Pavanam|Quicksand:300,400,500,700|Roboto+Mono:300,400,500"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
      </BaseHead>
    </div>
  )
}
