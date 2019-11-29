import styled from '@emotion/styled'

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;

  & > li {
    padding: 0;
    padding-left: 30px;
    padding-bottom: 15px;
    position: relative;
    vertical-align: middle;

    &:before {
      font-size: 3rem;
      vertical-align: middle;
      position: absolute;
      left: 0px;
    }
  }
`

export default UnorderedList
