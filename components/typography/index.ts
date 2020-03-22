/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

const opensans = css`
  font-family: 'Open sans', sans;
`

const mono = css`
  font-family: 'Roboto Mono', monospace;
`

const quicksand = css`
  font-family: 'Quicksand', sans-serif;
`

const pavanam = css`
  font-family: 'Pavanam', sans;
`

const link = css`
  text-decoration: underline;
`

const paragraph = css`
  ${mono};
`

interface ParagraphProps {
  sub?: boolean
}

const Paragraph = styled.p(({ sub }: ParagraphProps) => {
  return [
    paragraph,
    sub
      ? {
          fontSize: '1.4rem',
          margin: 0,
          marginTop: 5,
          maxWidth: '80%',
          '@media print': {
            fontSize: '.7rem',
          },
          '@media screen and (max-width: 690px)': {
            maxWidth: '100%',
          },
        }
      : {},
  ]
})

const heading01 = css`
  ${opensans};
  font-size: 4.9rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 25px;
  line-height: 1.3;

  @media print {
    font-size: 3rem;
  }
`

const Heading01 = styled.h1(() => ({ ...heading01 }))

const heading02 = css`
  ${opensans};
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 25px;
  line-height: 1.3;

  @media print {
    font-size: 2rem;
  }
`
const Heading02 = styled.h2(() => ({ ...heading02 }))

const heading03 = css`
  ${opensans};

  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 25px;
  line-height: 1.3;

  @media print {
    font-size: 1rem;
  }
`
const Heading03 = styled.h3(() => ({ ...heading03 }))

const heading04 = css`
  ${opensans};

  font-size: 2.4rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.3;

  @media print {
    font-size: 1.2rem;
  }
`
const Heading04 = styled.h4(() => ({ ...heading04 }))

const heading05 = css`
  ${quicksand};

  font-size: 2.2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.3;

  @media print {
    font-size: 1.1rem;
  }
`
const Heading05 = styled.h5(() => ({ ...heading05 }))

export {
  opensans,
  mono,
  quicksand,
  pavanam,
  link,
  paragraph,
  Paragraph,
  Heading01,
  Heading02,
  Heading03,
  Heading04,
  Heading05,
}
