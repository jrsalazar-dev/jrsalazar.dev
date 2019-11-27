import ContentFlexContainer from '../components/layout/ContentFlexContainer'
import ContentContainer from '../components/layout/ContentContainer'
import Background from '../components/layout/Background'
import Section from '../components/layout/Section'
import Page from '../components/layout/Page'
import Head from '../components/layout/Head'
import SectionHead from '../components/SectionHead'

export default function Index() {
  return (
    <Background topography>
      <Head />
      <Page>
        <Section className="splash">
          <ContentFlexContainer>
            <ContentContainer flex="2.5">
              <SectionHead icon="ion-android-contact" title="Profile" />
            </ContentContainer>
            <ContentContainer flex="1" />
          </ContentFlexContainer>
        </Section>
      </Page>
    </Background>
  )
}
