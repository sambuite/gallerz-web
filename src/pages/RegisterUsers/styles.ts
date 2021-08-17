import styled, { css } from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import tw from 'tailwind-styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url('https://source.unsplash.com/collection/857397');
    background-repeat: no-repeat;
    background-position: center;
    background-clip: content-box;
    background-size: cover;
  `,
);

const ContainerTw = tw(Container)<{ ac: boolean }>`${(props) => `
  w-full flex flex-wrap
`}`;

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    width: 500px;
  `,
);

export const StyledCardContent = styled(CardContent)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    > .form-title {
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      > .outlined-basic {
        margin: 0 0 1rem;
      }
    }
  `,
);
