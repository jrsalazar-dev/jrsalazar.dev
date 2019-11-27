import styled from '@emotion/styled'

const Header = styled.header`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const SectionIcon = styled.span`
  font-size: 5rem;
  position: relative;
  overflow: visible;

  @media screen and (max-width: 690px) {
    font-size: 3.5rem;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -15px;
    width: 1px;
    height: 22px;
    transform: translateY(-50%);
    background-color: rgb(127, 127, 127);
  }
`

const SectionTitle = styled.span`
  margin-left: 22px;
  font-size: 3.5rem;
  font-family: 'Open sans';

  @media screen and (max-width: 690px) {
    font-size: 2.5rem;
  }
`

export default function SectionHead(props) {
  return (
    <Header>
      <SectionIcon>
        <i className={props.icon} />
      </SectionIcon>
      <SectionTitle>{props.title}</SectionTitle>
    </Header>
  )
}
