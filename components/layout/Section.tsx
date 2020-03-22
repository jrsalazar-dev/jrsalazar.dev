import styled from '@emotion/styled'

const Section = styled.section`
  margin: 50px auto;
  max-width: 1170px;

  @media print {
    margin: 0;
    margin-top: 30px;
    page-break-inside: avoid;
  }

  @media screen and (max-width: 690px) {
    margin: 0;
  }
`

export default Section
