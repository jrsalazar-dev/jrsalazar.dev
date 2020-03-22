/** @jsx jsx */
import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { Paragraph } from '../typography'
import TimelineHeader from './TimelineHeader'
import TimelineCenter from './TimelineCenter'
import TimelineRow from './TimelineRow'
import TimelineItem, { ItemType } from './TimelineItem'

const TimelineContent = () => {
  return (
    <Fragment>
      <TimelineCenter />
      <TimelineRow>
        <TimelineItem
          type={ItemType.Professional}
          dates="12-2019 &mdash; 04-2020"
          title="Jongens van Techniek"
          subtitle="Freelance Fullstack Developer"
          tags="Laravel, jsonapi, React, Apollo, Azure, Postgres"
        >
          <Paragraph>
            Part of the team of freelancers tasked with rolling out an MVP of
            their project EasyOffice. Moved seamlessly between the frontend and
            backend repositories, as features required and was personally
            responsible for delegating results of QA to the development team.
          </Paragraph>
        </TimelineItem>
      </TimelineRow>
      <TimelineRow>
        <TimelineItem
          type={ItemType.Professional}
          dates="04-2016 &mdash; 12-2019"
          title="Cirkel"
          subtitle="Lead Developer"
          tags="Laravel, Vue.js, React native, Redux, Express, Ionic"
        >
          <Paragraph>
            Landed a large project besides my already fulltime work schedule and
            started a company to realise it. Quit my day-job (NoProtocol) after
            a few months of going way over 40 hours to preserve my sanity. From
            there we continued running projects with two partners and several
            interns.
          </Paragraph>
          <Paragraph>
            Here I had the unique position of being the instrumental architect
            that was also in direct contact with the client. Uncovering
            requirements, managing expectations, creating the technical roadmap
            towards a future-proof product and dividing the work amongst myself
            and the other developers.
          </Paragraph>
          <Paragraph>
            Our crown jewel was a Laravel admin panel which received webshop
            products from our React native app and forwarded them to the clients
            existing Magento instance. It enabled workers on site to register
            products with domain-specific tags and properties which were also
            usable as filters for the webshop consumers.
          </Paragraph>
          <Paragraph>
            Another of our greatest projects was automating a temp agency for
            the food service industry. It included a 4 step application process
            for employees through an Ionic app. The Laravel administration panel
            registered assignments which linked employees with hirers for hourly
            registrations. Invoiced hirers for every hour worked, generated a
            monthly excel file which was automatically forwarded to a web
            service by the payrolling system which paid employees, and much
            more.
          </Paragraph>
        </TimelineItem>
      </TimelineRow>
      <TimelineRow>
        <TimelineItem
          type={ItemType.Professional}
          dates="01-2015 &mdash; 04-2016"
          title="NoProtocol"
          subtitle="Fullstack Webdeveloper"
          tags="Laravel, Vue.js, Vuex"
        >
          <Paragraph>
            At NoProtocol I started as a supporting minion to the lead developer
            of the Laravel system hihonor.com and grew into having technical
            ownership of the project over several months when the lead left.
            Building all updates to the site, enabling new campaigns and general
            maintenance. After this I built a google maps powered store locator
            for AirMiles, several ad campaign sites for Coca-Cola and a PWA for
            Nationale Nederlanden.
          </Paragraph>
        </TimelineItem>
      </TimelineRow>
      <TimelineRow>
        <TimelineItem
          type={ItemType.Professional}
          dates="06-2014 &mdash; 12-2014"
          title="Bored of Advisors"
          subtitle="Developer Internship"
          tags="Angular.js, Titanium Appcelerator"
        >
          <Paragraph>
            Prototyped a Titanium app, programmed a robot arm and built a few
            SPA's in Angular.js.
          </Paragraph>
        </TimelineItem>
      </TimelineRow>
      {
        // <TimelineRow>
        //   <TimelineItem
        //     type={ItemType.Academic}
        //     dates="2013 &mdash; 2014"
        //     title="Amsterdam University of Applied Sciences"
        //     subtitle="Software engineering"
        //     tags="Ruby on Rails, Angular.js"
        //   >
        //     <Paragraph>
        //       Learned how to work Agile, got my webdev-feet wet building a RoR app
        //       and found my passion for code.
        //     </Paragraph>
        //   </TimelineItem>
        // </TimelineRow>
      }
    </Fragment>
  )
}

const TimelineContainer = styled.div`
  white-space: nowrap;
  position: relative;
  width: 100%;
`

export default function Timeline() {
  return (
    <TimelineContainer>
      <TimelineHeader />
      <TimelineContent />
    </TimelineContainer>
  )
}
