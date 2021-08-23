import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const StyledModal = styled.div`
  transform: translate(-50%, -50%);
  min-width: 50rem;
`;

export const Modal = tw(StyledModal)`
  fixed
  top-2/4
  left-2/4
  bg-white
  p-12
  pt-6
  z-50
`;

export const ModalOverlay = tw.div`
  fixed
  top-0
  left-0
  right-0
  bottom-0
  bg-black
  bg-opacity-60
  z-50
`;
