import styled from '@emotion/styled'

const ContentContainer = styled.div(props => {
  const styles = {
    padding: '30px 50px',
    position: 'relative',
    border: '1px solid #999',
    backgroundColor: '#fff',
    maxWidth: '1170px',
    '@media print': {
      border: 0,
      padding: '30px 50px'
    }
  }

  styles.flex = `${props.flex}`

  return styles
})

export default ContentContainer
