import styled from '@emotion/styled'

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;

  & > li {
    padding: 0;
    padding-left: 40px;
    padding-bottom: 15px;
    position: relative;
    vertical-align: middle;

    @media print {
      padding-left: 32px;
    }

    &:before {
      position: absolute;
      left: 0px;
      width: 3rem;
      vertical-align: middle;
      font-size: 3rem;
      text-align: center;

      @media print {
        font-size: 2rem;
      }
    }
  }
`

export default UnorderedList
