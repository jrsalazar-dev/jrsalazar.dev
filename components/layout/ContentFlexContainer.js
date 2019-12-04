import styled from '@emotion/styled'

const ContentFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  & > div:last-child {
    margin-left: 30px;

    @media screen and (max-width: 690px) {
      margin: 0;
    }
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`

export default ContentFlexContainer
