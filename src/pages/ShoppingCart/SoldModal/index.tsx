import ReactDOM from 'react-dom';
import history from '../../../history';
import { ModalProps } from '../../../shared/types/modal';
import { shoppingCartStorage } from '../../../storage/ShoppingCart';

import * as S from './styles';

export default function SoldModal({ open = true, onClose }: ModalProps) {
  if (!open) return null;

  const goBack = () => {
    onClose();
    shoppingCartStorage.remove();
    history.push('/');
  };

  return ReactDOM.createPortal(
    <>
      <S.ModalOverlay />
      <S.Modal>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <span className="text-green-500 font-bold">
              Sua compra foi realizada com sucesso!
            </span>
          </div>
          <button
            className="text-green-500 hover:text-white p-2 mt-5 border border-green-500 hover:bg-green-500"
            type="button"
            onClick={goBack}
          >
            Voltar à pagina inical
          </button>
        </div>
      </S.Modal>
    </>,
    document.getElementById('portal-modal') as Element,
  );
}
