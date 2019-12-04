import styled from '@emotion/styled'

const TimelineCenter = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 10px,
    #404040 0,
    #404040 20px
  );

  @media screen and (max-width: 690px) {
    display: none;
  }

  & + .timeline-row {
    .timeline-column:first-of-type {
      padding-top: 75px;

      @media screen and (max-width: 690px) {
        padding-top: 0;
      }
    }
  }
`

export default TimelineCenter
