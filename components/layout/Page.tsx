import styled from '@emotion/styled'

const Page = styled.div`
  padding-top: 5rem;
  width: 100vw;
  min-height: 100vh;

  @media print {
    padding-top: 0;
  }
    
  @media screen and (max-width: 690px) {
    padding-top: 0;
  }
`

export default Page
