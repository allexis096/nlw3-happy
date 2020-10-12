import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  a {
    z-index: 10;

    position: absolute;
    right: 40px;
    bottom: 40px;

    width: 64px;
    height: 64px;

    background: #14c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
      background: #17d6e6;
    }
  }
`;

export const AsideBar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800px;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const FooterBar = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  strong {
    font-weight: 800px;
  }
`;
