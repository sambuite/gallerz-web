import { LayoutProps } from './types';
import * as S from './styles';

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Layout;
