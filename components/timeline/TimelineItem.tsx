/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
// import Background, { BackgroundType } from '../layout/Background'
import { Paragraph, Heading04, Heading05, mono } from '../typography'

export enum ItemType {
  Professional,
  Academic,
}
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
    left: -54px;
    padding-left: 1px;
  }

  &.edu-dot {
    left: -53px;
  }
`

interface TimelineDotProps {
  type: ItemType
}
const TimelineDot = ({ type }: TimelineDotProps) => {
  return (
    <TimelineDotContainer
      className={type === ItemType.Professional ? 'work-dot' : 'edu-dot'}
    >
      <i
        className={
          type === ItemType.Professional ? 'ion-ios-briefcase' : 'ion-edit'
        }
      />
    </TimelineDotContainer>
  )
}

const TimelineDates = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  font-size: 2rem;
  color: #c7c7c7;
  ${mono};

  @media print {
    font-size: 1.2rem;
    top: -20px;
  }
`

const TimelineItemContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-left: 35px;
  position: relative;
  border: 1px solid #999;
  white-space: normal;

  @media print {
    padding: 10px;
    page-break-inside: avoid;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 40px;
    left: -30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0;
  }

  &:before {
    border-width: 15px;
    border-color: transparent #666 transparent transparent;
  }

  &:after {
    top: 39px;
    border-width: 16px;
    border-color: transparent white transparent transparent;
  }
`

interface TimelineItemProps {
  type: ItemType
  title: string
  subtitle: string
  children: React.ReactNode
  dates: string
  tags?: string
}
const TimelineItem = ({
  type,
  title,
  subtitle,
  children,
  dates,
  tags,
}: TimelineItemProps) => {
  return (
    <TimelineItemContainer>
      <Heading04>{title}</Heading04>
      <Heading05>{subtitle}</Heading05>
      {tags && <Paragraph sub>Tech used: {tags}</Paragraph>}
      {children}
      <TimelineDot type={type} />
      <TimelineDates>{dates}</TimelineDates>
    </TimelineItemContainer>
  )
}

export default TimelineItem
