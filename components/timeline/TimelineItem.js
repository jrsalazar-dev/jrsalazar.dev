/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import Background from '../layout/Background'
import { Heading04, Heading05, mono } from '../typography'

const arrow = css`
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 40px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0;
  }

  &:before {
    border-width: 15px;
  }

  &:after {
    top: 39px;
    border-width: 16px;
  }
`

const arrowRight = css`
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 40px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0;
  }

  &:before {
    border-width: 15px;
  }

  &:after {
    top: 39px;
    border-width: 16px;
  }
  &:before,
  &:after {
    right: -30px;
  }

  &:before {
    border-color: transparent transparent transparent #666;
  }

  &:after {
    border-color: transparent transparent transparent white;
  }
`

const arrowLeft = css`
  ${arrow};
  &:before,
  &:after {
    left: -30px;
  }

  &:before {
    border-color: transparent #666 transparent transparent;
  }

  &:after {
    border-color: transparent white transparent transparent;
  }
`

const TimelineDotContainer = styled.div`
  position: absolute;
  top: 36px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #595959;
  text-align: center;
  background-color: white;
  padding-top: 1px;

  & > i {
    font-size: 2rem;
  }

  &.work-dot {
    right: -54px;
    padding-left: 1px;
  }

  &.edu-dot {
    left: -53px;
  }
`

const TimelineDot = props => {
  return (
    <TimelineDotContainer
      className={props.professional ? 'work-dot' : 'edu-dot'}
    >
      <i className={props.professional ? 'ion-ios-briefcase' : 'ion-edit'} />
    </TimelineDotContainer>
  )
}

const TimelineDates = styled.div`
  position: absolute;
  top: -30px;
  right: 1px;
  font-size: 2rem;
  color: #c7c7c7;
  ${mono};

  @media print {
    font-size: 1.2rem;
    top: -20px;
  }
`

const TimelineItemContainer = styled(Background)(props => {
  const tlarrow = props.arrowLeft ? arrowLeft : arrowRight

  return css`
    background-color: #fff;
    padding: 20px;
    position: relative;
    border: 1px solid #999;

    ${tlarrow};

    @media print {
      padding: 10px;
    }
  `
})

const TimelineItem = props => {
  return (
    <TimelineItemContainer {...props}>
      <Heading04>{props.title}</Heading04>
      <Heading05>{props.subtitle}</Heading05>
      {props.children}
      <TimelineDot {...props} />
      <TimelineDates>{props.dates}</TimelineDates>
    </TimelineItemContainer>
  )
}

export default TimelineItem
