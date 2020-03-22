/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { Paragraph } from '../typography'
import TimelineHeader from './TimelineHeader'
import TimelineCenter from './TimelineCenter'
import TimelineItem from './TimelineItem'

const TimelineRow = styled.div`
  white-space: nowrap;
  padding: 15px 0 30px 0;

  @media screen and (max-width: 690px) {
    display: flex;
    flex-direction: column;
  }
`

const TimelineColumn = styled.div`
  padding-left: 35px;
  width: 50%;
  display: inline-block;
  vertical-align: top;
  white-space: normal;

  @media screen and (max-width: 690px) {
    width: 100%;
  }

  &:first-of-type {
    padding: 0;
    padding-right: 35px;

    @media screen and (max-width: 690px) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
`

const TimelineContent = () => {
  return (
    <div>
      <TimelineCenter />
      <TimelineRow>
        <TimelineColumn>
          <TimelineItem
            texture
            professional
            dates="12-2019 &mdash; Present"
            title="Jongens van Techniek"
            subtitle="Freelance Fullstack Developer"
          >
            <Paragraph>
              Helped build out one of their projects EasyOffice. Worked on the
              Laravel jsonapi based API as well as the React frontend, connected
              ingeniously with only Apollo and React Context's as state
              management. A system fit for the post Redux world.
            </Paragraph>
          </TimelineItem>
        </TimelineColumn>
      </TimelineRow>
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
              + React Native app to digitise 10000m
              <sup>2</sup> of inventory and forward the database to their
              Magento webshop and beyond.
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

            @media screen and (max-width: 690px) {
              padding-top: 30px !important;
              padding-bottom: 30px !important;
            }
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

export default function Timeline() {
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