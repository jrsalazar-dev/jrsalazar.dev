/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Heading01 } from '../typography'

export default function PageTitle({ children }) {
  return (
    <Heading01
      css={css`
        position: relative;
        display: inline-block;

        &:after {
          position: absolute;
          content: '';
          bottom: 0;
          right: 0;
          background-color: #555;
          height: 1px;
          width: 87px;
          opacity: 0.7;
        }
      `}
    >
      {children}
    </Heading01>
  )
}
