import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: auto;
`;
export const Content = styled.div`
  width: 800px;
  max-width: 1200px;
  border: 1px solid;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  > div {
    background: #000;
    align-self: stretch;
  }

  > main {
    h1 {
      color: #333;
      font-size: 64px;
    }

    input {
      width: 600px;
      height: 80px;
      padding: 16px;
      border-radius: 6px;

      p {
      }

      &::placeholder {
        font-weight: 500;
        color: #6a6a6a;
      }
    }
  }
`;
