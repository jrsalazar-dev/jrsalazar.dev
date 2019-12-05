/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import UnorderedList from './UnorderedList'

const ProfilePicture = props => (
  <figure
    css={css`
      margin: 0;
      text-align: center;
    `}
  >
    <img
      css={css`
        max-width: 200px;
        border-radius: 50%;
      `}
      src="/img/pf2.jpg"
    />
    <div
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.15;
        border-radius: 50%;
      `}
    />
  </figure>
)

const Profile = props => (
  <div>
    <ProfilePicture />
    <UnorderedList
      css={css`
        padding-top: 30px;
        margin: 0;
      `}
    >
      <li>Email: contact@jrsalazar.dev</li>
      <li>Phone: +31(0)639759056</li>
      <li>Born: 31-10-1992</li>
    </UnorderedList>
  </div>
)

export default Profile
