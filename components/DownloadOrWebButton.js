/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Link from 'next/link'

const DownloadOrWebButton = props => (
  <div
    css={css`
      & > .download-btn,
      & > .view-online-btn {
        position: absolute;
        top: 40px;
        right: 50px;
        font-size: 30px;

        & > a {
          color: black;
          cursor: pointer;
        }
      }

      & > .view-online-btn {
        display: none;
      }

      @media print {
        & > .download-btn {
          display: none;
        }

        & > .view-online-btn {
          display: block;
          right: 0;
        }
      }
    `}
  >
    <div className="download-btn">
      <a href="/cv.pdf">
        <i className="ion-android-download" />
      </a>
    </div>
    <div className="view-online-btn">
      <a
        href={
          process.env.NODE_ENV !== 'production' ? '/' : 'https://jrsalazar.dev'
        }
      >
        <i className="ion-android-open" />
      </a>
    </div>
  </div>
)

export default DownloadOrWebButton
