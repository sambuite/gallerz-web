import ReactDOM from 'react-dom';
import history from '../../../history';
import { SoldModalProps } from './types';
import { shoppingCartStorage } from '../../../storage/ShoppingCart';

import * as S from './styles';

export default function SoldModal({
  open = true,
  onClose,
  error,
}: SoldModalProps) {
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
            <span
              className={
                (error ? 'text-red-500 text-center' : 'text-green-500') +
                ' font-bold whitespace-pre-line'
              }
            >
              {error
                ? 'Ocorreu um erro na sua compra! \n Tente novamente mais tarde.'
                : 'Sua compra foi realizada com sucesso!'}
            </span>
          </div>
          <button
            className={
              (error
                ? 'text-red-500 border-red-500 hover:bg-red-500'
                : 'text-green-500 border-green-500 hover:bg-green-500') +
              ' hover:text-white p-2 mt-5 border '
            }
            type="button"
            onClick={error ? () => onClose() : () => goBack()}
          >
            Voltar
          </button>
        </div>
      </S.Modal>
    </>,
    document.getElementById('portal-modal') as Element,
  );
}
