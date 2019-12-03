/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { Paragraph } from '../typography'
import TimelineHeader from './TimelineHeader'
import TimelineCenter from './TimelineCenter'
import TimelineItem from './TimelineItem'

const TimelineRow = styled.div`
  white-space: nowrap;
  padding: 15px 0 30px 0;

  @media screen and ($tablet) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const TimelineColumn = styled.div`
  padding-left: 35px;
  width: 50%;
  display: inline-block;
  vertical-align: top;
  white-space: normal;

  @media screen and ($tablet) {
    width: 100%;
  }

  &:first-of-type {
    padding: 0;
    padding-right: 35px;
  }
`

const TimelineContent = props => {
  return (
    <div>
      <TimelineCenter />
      <TimelineRow>
        <TimelineColumn>
          <TimelineItem
            texture
            professional
            dates="12-2019 &mdash; Present"
            title="jrsalazar.dev"
            subtitle="Freelance Developer"
          >
            <Paragraph>
              Business owner gone digital mercenary. Back on the saddle and
              looking to go head first into the greater technical challenges of
              tomorrow.
            </Paragraph>
          </TimelineItem>
        </TimelineColumn>
      </TimelineRow>
      <TimelineRow>
        <TimelineColumn>
          <TimelineItem
            texture
            professional
            dates="04-2016 &mdash; 12-2019"
            title="Cirkel"
            subtitle="Lead Developer"
          >
            <Paragraph>
              Took the plunge into business culture and started running projects
              as a 2 man agency. Main achievement was building a Laravel system
              + React Native app to digitise 10000km<sup>2</sup> of inventory
              and forward the database to their Magento webshop and beyond.
            </Paragraph>
          </TimelineItem>
        </TimelineColumn>
      </TimelineRow>
      <TimelineRow>
        <TimelineColumn>
          <TimelineItem
            texture
            professional
            dates="01-2015 &mdash; 04-2016"
            title="NoProtocol"
            subtitle="Fullstack Webdeveloper"
          >
            <Paragraph>
              NoProtocol kickstarted my career and gave me the oppurtunity to
              develop my skills. Functioned mainly as fullstack developer and
              occasional frontend wizard. Worked on projects for Honor europe,
              AirMiles, Coca-cola & more.
            </Paragraph>
          </TimelineItem>
        </TimelineColumn>
      </TimelineRow>
      <TimelineRow>
        <TimelineColumn>
          <TimelineItem
            texture
            professional
            dates="06-2014 &mdash; 12-2014"
            title="Bored of Advisors"
            subtitle="Developer Internship"
          >
            <Paragraph>
              Prototyped a titanium app, programmed a robot arm and built a few
              simple frontends in Angular.js, sorry Thijmen.
            </Paragraph>
          </TimelineItem>
        </TimelineColumn>
        <TimelineColumn
          css={css`
            padding-top: 75px !important;
          `}
        >
          <TimelineItem
            texture
            arrowLeft
            academic
            dates="2013 &mdash; 2014"
            title="Amsterdam University of Applied Sciences"
            subtitle="Software engineering"
          >
            <Paragraph>
              Learned how to work Agile™, got my webdev-feet wet building a RoR
              app and got out before I was stuck building enterprise Java
              servlets for eternity.
            </Paragraph>
          </TimelineItem>
        </TimelineColumn>
      </TimelineRow>
    </div>
  )
}

export default function Timeline({ children }) {
  return (
    <div
      className="timeline"
      css={css`
        white-space: nowrap;
        position: relative;
        width: 100%;
      `}
    >
      <TimelineHeader />
      <TimelineContent />
    </div>
  )
}
