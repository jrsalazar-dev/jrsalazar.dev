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

const SkillStar = ({ on }) => (
  <SkillStarContainer>
    <i className={on ? 'ion-ios-flame' : 'ion-ios-flame-outline'} />
  </SkillStarContainer>
)

interface SkillsStarsIconProps {
  icon?: string
  image?: string
  level: number
}
const SkillsStarsIcon = ({ icon, image, level }: SkillsStarsIconProps) => (
  <div>
    <SkillsStarsIconContainer>
      {icon ? (
        <i className={icon} />
      ) : (
        <img
          css={css`
            width: 30px;

            @media print {
              width: 20px;
            }
          `}
          src={image}
        />
      )}
    </SkillsStarsIconContainer>
    <SkillStars>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <SkillStar key={i} on={i < level} />
        ))}
    </SkillStars>
  </div>
)

interface SkillsItemProps extends SkillsStarsIconProps {
  title: string
  tags: string
  children: React.ReactNode
}
const SkillsItem = ({
  title,
  icon,
  level,
  image,
  tags,
  children,
}: SkillsItemProps) => (
  <SkillsItemContainer>
    <Heading05>{title}</Heading05>
    <SkillsStarsIcon icon={icon} level={level} image={image} />
    <Paragraph sub>{tags}</Paragraph>
    {children}
  </SkillsItemContainer>
)

export default SkillsItem
