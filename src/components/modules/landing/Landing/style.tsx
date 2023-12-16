import styled from '@emotion/styled';

export const LandingBackgroundWrapper = styled.div`
  display: flex;
  padding: 16px;
  gap: 275px;
  max-height: 100%;
  flex-direction: column;
  .top-wrapper {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;
  }
  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  .landing-text-wrapper {
    display: flex;
    position: relative;
    width: 746px;
    padding: 0px 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    .logo {
      position: absolute;
      top: -32px;
      right: 0;
    }
  }
  .begin-wrapper {
    display: flex;
    width: 100vw;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 52.08%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .bottom-section {
    display: flex;
    width: 100%;
    gap: 565px;
  }
  .hover-scale {
    :hover {
      scale: 1.1;
      transition: 0.25s;
      cursor: pointer;
    }
  }
`;
export const LandingText = styled.div`
  display: flex;
  color: #311f47;
  text-shadow: 8px -4px 4px rgba(0, 0, 0, 0.25);
  width: 498px;
  /* Audiowide/Regular-128 */
  font-family: Audiowide;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Discription = styled.div`
  color: #655775;
  display: flex;
  width: 414px;
  font-family: Fredoka;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ClickToBeginText = styled.div`
  color: #fff;
  text-align: center;

  /* Audiowide/Regular-32 */
  font-family: Audiowide;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 1s;

  animation: scale 0.5s alternate;
  animation-iteration-count: infinite;

  @keyframes scale {
    from {
      scale: 1;
    }
    to {
      scale: 1.1;
    }
  }
`;
