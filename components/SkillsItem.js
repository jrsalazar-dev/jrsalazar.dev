/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Heading05, Paragraph } from '../components/typography'

const SkillsItemContainer = styled.div`
  flex: 0 1 50%;
  padding-right: 30px;
  padding-bottom: 30px;
  width: 50%;

  @media screen and (max-width: 690px) {
    flex: 0 1 100%;
    width: 100%;
  }
`

const SkillsStarsIconContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 4rem;
  padding-right: 15px;
  width: 50px;
  font-size: 3rem;

  @media print {
    font-size: 2rem;
    width: 30px;
    padding-right: 10px;
    line-height: 2.5rem;
  }
`

const SkillStars = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 4rem;

  @media print {
    line-height: 2.5rem;
  }
`

const SkillStarContainer = styled.div`
  display: inline-block;
  font-size: 2.5rem;
  padding: 0 7px;

  @media print {
    font-size: 1.7rem;
  }
`

const SkillStar = props => (
  <SkillStarContainer>
    <i className={props.on ? 'ion-ios-flame' : 'ion-ios-flame-outline'} />
  </SkillStarContainer>
)

const SkillsStarsIcon = props => (
  <div>
    <SkillsStarsIconContainer>
      {props.icon ? (
        <i className={props.icon} />
      ) : (
        <img
          css={css`
            width: 30px;

            @media print {
              width: 20px;
            }
          `}
          src={props.image}
        />
      )}
    </SkillsStarsIconContainer>
    <SkillStars>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <SkillStar key={i} on={i < +props.level} />
        ))}
    </SkillStars>
  </div>
)

const SkillsItemTags = props => <Paragraph sub>{props.tags}</Paragraph>

const SkillsItem = props => (
  <SkillsItemContainer>
    <Heading05>{props.title}</Heading05>
    <SkillsStarsIcon {...props} />
    <Paragraph sub>{props.tags}</Paragraph>
    {props.children}
  </SkillsItemContainer>
)

export default SkillsItem
