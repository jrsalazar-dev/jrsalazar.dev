import styled from '@emotion/styled'

const ContentFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  & > div:last-child {
    margin-left: 30px;
  }
`

export default ContentFlexContainer
