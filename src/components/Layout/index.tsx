import { LayoutProps } from './types';
import * as S from './styles';
import Header from '../Header';

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Layout;
