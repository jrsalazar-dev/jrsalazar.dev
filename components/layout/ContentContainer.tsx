import styled from '@emotion/styled'

interface ContentContainerProps {
  flex?: string
}
const ContentContainer = styled.div(({ flex }: ContentContainerProps) => ({
  padding: '30px 50px',
  position: 'relative',
  border: '1px solid #999',
  backgroundColor: '#fff',
  flex: flex || '',
  maxWidth: '1170px',
  '@media print': {
    border: 0,
    padding: '30px 50px',
  },
  '@media screen and (max-width: 690px)': {
    border: 0,
  },
}))

export default ContentContainer
