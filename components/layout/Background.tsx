import styled from '@emotion/styled'

export enum BackgroundType {
  cicada,
  houndstooth,
  halfRombes,
  weave,
  stairs,
  topography,
  texture,
}

export type BackgroundProps = {
  type: BackgroundType
}

export default styled.div(({ type }: BackgroundProps) => {
  if (type === BackgroundType.cicada) {
    return `
      background-color: rgba(#999, 0.1);
      background-image: linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%),
      linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%),
      linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%),
      linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%);
      background-size: 13px, 29px, 37px, 53px;
    `
  } else if (type === BackgroundType.houndstooth) {
    return `
      background:
      linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, darken(#fff, 4) 75%, darken(#fff, 4)) 0 0,
      linear-gradient(-45deg, darken(#fff, 4) 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em,
      linear-gradient(45deg, darken(#fff, 4) 17%, transparent 17%, transparent 25%, darken(#fff, 4) 25%, darken(#fff, 4) 36%, transparent 36%, transparent 64%, darken(#fff, 4) 64%, darken(#fff, 4) 75%, transparent 75%, transparent 83%, darken(#fff, 4) 83%) 1em 1em;
      background-color: white;
      background-size: 2em 2em;
    `
  } else if (type === BackgroundType.halfRombes) {
    return `
      background: #fff;
      background: 
      linear-gradient(115deg, transparent 75%, darken(#fff, 3) 75%) 0 0,
      linear-gradient(245deg, transparent 75%, darken(#fff, 3) 75%) 0 0,
      linear-gradient(115deg, transparent 75%, darken(#fff, 3) 75%) 7px -15px,
      linear-gradient(245deg, transparent 75%, darken(#fff, 3) 75%) 7px -15px,
      #fff;
      background-size: 15px 30px  
    `
  } else if (type === BackgroundType.weave) {
    return `
      background:
      linear-gradient(135deg,  #fff 22px, darken(#fff, 3) 22px, darken(#fff, 3) 24px, transparent 24px, transparent 67px, darken(#fff, 3) 67px, darken(#fff, 3) 69px, transparent 69px),
      linear-gradient(225deg,  #fff 22px, darken(#fff, 3) 22px, darken(#fff, 3) 24px, transparent 24px, transparent 67px, darken(#fff, 3) 67px, darken(#fff, 3) 69px, transparent 69px)0 64px;
      background-color: #fff;
      background-size: 64px 128px 
    `
  } else if (type === BackgroundType.stairs) {
    return `
      background: 
      linear-gradient(63deg, darken(#fff, 1) 23%, transparent 23%) 7px 0, 
      linear-gradient(63deg, transparent 74%, darken(#fff, 1) 78%), 
      linear-gradient(63deg, transparent 34%, darken(#fff, 1) 38%, darken(#fff, 1) 58%, transparent 62%), 
      #fff;
      background-size: 16px 48px; 
    `
  } else if (type === BackgroundType.topography) {
    return {
      backgroundImage: "url('/img/topography.svg')",
      backgroundRepeat: 'repeat',
    }
  } else if (type === BackgroundType.texture) {
    return {
      backgroundImage: "url('/img/texture.svg')",
    }
  }
})
