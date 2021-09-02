import ReactDOM from 'react-dom';
import { ProductModalProps } from './types';
import history from '../../history';

import * as S from './styles';
import { toCurrency } from '../../shared/utils';
import { shoppingCartStorage } from '../../storage/ShoppingCart';
import { useState } from 'react';
import { ProductToBuyType } from '../../shared/types';

export default function Modal({ open, onClose, product }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState<number | undefined>(undefined);

  const [typeError, setTypeError] = useState(false);

  if (!open) return null;

  const resetDetails = () => {
    setQuantity(1);
    setType(undefined);
  };

  const handleGetProductQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value) || 1);
  };

  const handleGetProductType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeError(false);
    setType(Number(e.target.value));
  };

  const checkIfTypeSelected = () => {
    if (typeof type === 'number') return true;
    setTypeError(true);
    return false;
  };

  const addProductToShoppingCart = () => {
    if (!checkIfTypeSelected()) return;

    const storageProduct = shoppingCartStorage.get() as ProductToBuyType[];

    const updatedProduct = {
      ...product,
      quantity,
      type,
    };

    shoppingCartStorage.set(
      storageProduct ? [...storageProduct, updatedProduct] : [updatedProduct],
    );
    onClose();
    resetDetails();
  };

  const buyProductNow = () => {
    if (checkIfTypeSelected()) return;

    addProductToShoppingCart();
    resetDetails();
    history.push('/shopping-cart');
  };

  return ReactDOM.createPortal(
    <>
      <S.ModalOverlay />
      <S.Modal>
        <div className="flex flex-col">
          <div
            className="-mr-1 md:-mr-6 flex flex-row-reverse cursor-pointer"
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
          <div className="flex flex-col items-center md:flex-row p-1">
            <div className="flex-none w-44 relative">
              <img
                src={product.imageUrl}
                alt="Imagem do produto"
                className=" inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="flex-auto py-7 px-8">
              <div className="flex flex-wrap items-baseline">
                <h1 className="w-full flex-none text-3xl text-black mb-1.5">
                  {product.name}
                </h1>
                <div className="text-lg leading-6 text-black">
                  {toCurrency(product.price)}
                </div>
              </div>
              <div className="flex items-start mt-9 py-9 border-t border-gray-100">
                <div className="flex space-x-10 text-sm font-light text-black mr-6">
                  <label>
                    <input
                      className="w-12 h-auto px-1 py-3.5 flex items-center justify-center border border-gray-500"
                      name="quantity"
                      type="number"
                      onChange={handleGetProductQuantity}
                      defaultValue={1}
                    />
                  </label>
                </div>
                <div className="flex space-x-10 text-sm font-light text-black">
                  <select
                    onChange={handleGetProductType}
                    className="block p-3 text-gray-600 w-full text-base border border-gray-500 bg-white "
                  >
                    <option value="x">Escolha um tipo</option>
                    <option value="0">Caneca</option>
                    <option value="1">Quadro/Placa</option>
                    <option value="2">Camisa</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mb-3 text-sm font-semibold uppercase">
                <div className="flex flex-col items-center md:items-start md:flex-row flex-auto md:space-x-3">
                  <button
                    className="w-full md:w-1/2 py-2 flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 transition"
                    type="button"
                    onClick={buyProductNow}
                  >
                    Comprar
                  </button>
                  <button
                    className="w-full md:w-1/2 mt-4 md:mt-0 py-2 flex items-center justify-center border text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500 transition"
                    type="button"
                    onClick={addProductToShoppingCart}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
              {typeError && (
                <p className="text-sm font-bold text-red-500">
                  Você precisa selecionar um tipo.
                </p>
              )}
            </div>
          </div>
        </div>
      </S.Modal>
    </>,
    document.getElementById('portal-modal') as Element,
  );
}
