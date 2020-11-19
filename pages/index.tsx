/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ContentFlexContainer from '../components/layout/ContentFlexContainer'
import ContentContainer from '../components/layout/ContentContainer'
import Background, { BackgroundType } from '../components/layout/Background'
import Section from '../components/layout/Section'
import Page from '../components/layout/Page'
import Head from '../components/layout/Head'
import SectionHead from '../components/SectionHead'
import PageTitle from '../components/typography/PageTitle'
import Timeline from '../components/timeline'
import UnorderedList from '../components/UnorderedList'
import SkillsItem from '../components/SkillsItem'
import Profile from '../components/Profile'
import DownloadOrWebButton from '../components/DownloadOrWebButton'
import {
  paragraph,
  Heading04,
  Heading05,
  Paragraph,
} from '../components/typography'

export default function Index() {
  return (
    <Background type={BackgroundType.Topography}>
      <Head />
      <Page>
        <Section className="splash">
          <ContentFlexContainer>
            <ContentContainer flex="2.5">
              <DownloadOrWebButton />
              <SectionHead icon="ion-android-contact" title="Profile" />
              <PageTitle>Jordan Salazar</PageTitle>
              <Heading05
                css={css`
                  margin-bottom: 5rem;

                  @media print {
                    margin-bottom: 10px;
                  }
                `}
              >
                Full time Web magician, part time human being
              </Heading05>
              <Paragraph>
                I'm a {~~((Date.now() - +new Date(1992, 9, 31)) / 31557600000)}{' '}
                year old webdeveloper living in Amsterdam, born in the US.
                Looking to take your product to the next level.
              </Paragraph>
            </ContentContainer>
            <ContentContainer flex="1">
              <Profile />
            </ContentContainer>
          </ContentFlexContainer>
        </Section>
        <Section className="skillset">
          <ContentContainer flex="">
            <SectionHead icon="ion-ios-flask-outline" title="Skillset" />
            <Paragraph>
              I'm a driven craftsman, specialised in architecting and developing
              products from concept to MVP and beyond. Future-proofing projects
              with the best practices of today such as Automated Testing
              (BDD/TDD), Continuous Integration, Continuous Delivery and
              Infrastructure Monitoring. With a passion for finding the right
              tools for the job.
            </Paragraph>
            <Heading04>Primary skills</Heading04>
            <UnorderedList
              css={css`
                width: 600px;
                ${paragraph};

                @media screen and (max-width: 690px) {
                  width: 100%;
                }
              `}
            >
              <li className="ion-ios-world">
                Orchestrating and developing advanced web applications and
                (micro-)services (Laravel,Node.js)
              </li>
              <li className="ion-network">
                Creating and connecting seperate software systems through API's
                and managing data flows (REST,GraphQL,Web/Sockets)
              </li>
              <li className="ion-ios-monitor">
                Engineering next-gen user interfaces with Javascript and modern
                web technologies.
                (ES2020,Typescript,React,Redux,CSS-in-JS,SCSS)
              </li>
              <li className="ion-iphone">
                Developing and maintaining cross platform mobile apps (React
                Native)
              </li>
              <li className="ion-code-working">
                Setting up professional engineering pipelines
                (AWS,Docker,CI,CD,sh)
              </li>
            </UnorderedList>
          </ContentContainer>
        </Section>
        <Section>
          <ContentContainer>
            <SectionHead icon="ion-ios-infinite-outline" title="Timeline" />
            <Timeline />
          </ContentContainer>
        </Section>
        <Section>
          <ContentContainer>
            <SectionHead title="Tech" icon="ion-code-working" />
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              <SkillsItem
                title="Javascript"
                icon="ion-social-javascript-outline"
                tags="React, Redux, Vue, Vuex, Express"
                level={5}
              >
                <Paragraph>
                  JS is my oldest friend and the go-to language for anything
                  general purpose. Started my career using Angular.js and SCSS,
                  these days I'm all about component based architectures,
                  unidirectional data flow and CSS-in-JS.
                </Paragraph>
                <Paragraph>
                  On the server I've set up microservices and monoliths. REST
                  API's and socket based messaging endpoints. Written scripts to
                  combine and manage frontend assets (pre-webpack) and developed
                  things as a video-overlay generator with node-ffmpeg.
                </Paragraph>
              </SkillsItem>
              <SkillsItem
                title="PHP: Hypertext Preprocessor"
                image="/img/php-512.png"
                tags="Laravel, Symfony, PHPUnit"
                level={5}
              >
                <Paragraph>
                  PHP (Namely Laravel) is the first choice for cut and clear web
                  applications where an opinionated framework is the first
                  choice. Intimate with Laravel's best practices and feature
                  rich ecosystem.
                </Paragraph>
              </SkillsItem>
              <SkillsItem
                tags="Emotion, styled-components, SCSS"
                title="CSS"
                icon="ion-social-css3-outline"
                level={4}
              >
                <Paragraph>
                  Whether you're building static pages or component based
                  javascript apps, CSS is an essential player. Mastered most of
                  its inter-browser quirks, animation based complexities and
                  best practices for setting up and managing large amounts of
                  css.
                </Paragraph>
              </SkillsItem>
              <SkillsItem
                title="GNU + Linux"
                tags="ArchLinux, Debian, Alpine, bash, zsh, fish, Docker, Git, Vim"
                image="/img/Heckert_GNU_white.svg"
                level={3}
              >
                <Paragraph>
                  Full time GNU + Linux user for 3-4 years. When working with
                  thousands of text files, libraries and packages, theres no
                  better environment to do what you need. Confident writing
                  deploy scripts, managing multiple servers and debugging system
                  related issues.
                </Paragraph>
              </SkillsItem>
            </div>
          </ContentContainer>
        </Section>
      </Page>
    </Background>
  )
}
