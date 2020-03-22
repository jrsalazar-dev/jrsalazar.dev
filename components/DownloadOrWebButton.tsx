/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const DownloadOrWebButton = () => (
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

        span {
          vertical-align: middle;
          font-size: 1.5rem;
          padding-left: 10px;
          text-decoration: none;
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
          z-index: 1;
          vertical-align: middle;
        }
      }
    `}
  >
    <div className="download-btn">
      <a href="/cv.pdf">
        <i className="ion-android-download" />
        <span>View as pdf</span>
      </a>
    </div>
    <div className="view-online-btn">
      <a
        href={
          process.env.NODE_ENV !== 'production' ? '/' : 'https://jrsalazar.dev'
        }
      >
        <i className="ion-android-open" />
        <span>View online</span>
      </a>
    </div>
  </div>
)

export default DownloadOrWebButton
