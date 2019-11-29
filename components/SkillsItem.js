/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Heading05, Paragraph } from '../components/typography'

const SkillsItemContainer = styled.div`
  flex: 1 1 50%;
  padding-right: 30px;
  padding-bottom: 30px;
`

const SkillsStarsIconContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 4rem;
  padding-right: 15px;
  width: 50px;
  font-size: 3rem;
`

const SkillStars = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 4rem;
`

const SkillStarContainer = styled.div`
  display: inline-block;
  font-size: 2.5rem;
  padding: 0 7px;
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

const SkillsItem = props => (
  <SkillsItemContainer>
    <Heading05>{props.title}</Heading05>
    <SkillsStarsIcon {...props} />
    {props.children}
  </SkillsItemContainer>
)

export default SkillsItem
