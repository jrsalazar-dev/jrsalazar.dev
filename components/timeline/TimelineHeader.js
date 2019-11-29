/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Heading04 } from '../typography'

const headcss = css`
  display: inline-block;
  padding: 20px 0;
  width: 50%;

  @media screen and ($tablet) {
    display: none;
  }
`
const TimelineHeader = props => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <Heading04 css={headcss}>Professional</Heading04>
      <Heading04 css={headcss}>Academic</Heading04>
    </div>
  )
}

export default TimelineHeader
