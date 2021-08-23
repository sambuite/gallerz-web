import ReactDOM from 'react-dom';
import { ModalProps } from './types';

import * as S from './styles';

export default function Modal({ open, onClose }: ModalProps) {
  if (!open) return null;

  const handleTypeSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('event', e.target.value);
  };

  return ReactDOM.createPortal(
    <>
      <S.ModalOverlay />
      <S.Modal>
        <div className="flex flex-col">
          <div
            className="-mr-6 flex flex-row-reverse cursor-pointer"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex p-1">
            <div className="flex-none w-44 relative">
              <img
                src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?auto=format&fit=crop&w=365&q=80"
                alt="Imagem do produto"
                className=" inset-0 w-full h-full object-contain"
              />
            </div>
            <form className="flex-auto py-7 px-8">
              <div className="flex flex-wrap items-baseline">
                <h1 className="w-full flex-none text-3xl text-black mb-1.5">
                  Arte 01
                </h1>
                <div className="text-lg leading-6 text-black">R$600.00</div>
              </div>
              <div className="flex items-start justify-between mt-9 py-9 border-t border-gray-100">
                <div className="flex space-x-10 text-sm font-light text-black">
                  <label>
                    <input
                      className="w-5 h-5 flex items-center justify-center rounded-full"
                      name="size"
                      type="radio"
                      value="p"
                    />
                    P
                  </label>
                  <label>
                    <input
                      className="w-5 h-5 flex items-center justify-center rounded-full"
                      name="size"
                      type="radio"
                      value="m"
                    />
                    M
                  </label>
                  <label>
                    <input
                      className="w-5 h-5 flex items-center justify-center rounded-full"
                      name="size"
                      type="radio"
                      value="g"
                    />
                    G
                  </label>
                  <label>
                    <input
                      className="w-5 h-5 flex items-center justify-center rounded-full"
                      name="size"
                      type="radio"
                      value="gg"
                    />
                    GG
                  </label>
                </div>
                <div className="flex space-x-10 text-sm font-light text-black">
                  <select
                    onChange={handleTypeSelection}
                    className="block p-3 text-gray-600 w-full text-base border border-gray-500 bg-white "
                  >
                    <option value="mug">Caneca</option>
                    <option value="canvas">Quadro/Placa</option>
                    <option value="shirt">Camisa</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mb-3 text-sm font-semibold uppercase">
                <div className="flex-auto flex space-x-3">
                  <button
                    className="w-1/2 py-2 flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 transition"
                    type="submit"
                  >
                    Comprar
                  </button>
                  <button
                    className="w-1/2 py-2 flex items-center justify-center border text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500 transition"
                    type="button"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
              {/* <p className="text-sm text-gray-500">
              Descrição
            </p> */}
            </form>
          </div>
        </div>
      </S.Modal>
    </>,
    document.getElementById('portal-modal') as Element,
  );
}
