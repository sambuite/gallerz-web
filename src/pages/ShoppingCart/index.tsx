import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import { ProductToBuyType } from '../../shared/types';
import { toCurrency } from '../../shared/utils';
import { shoppingCartStorage } from '../../storage/ShoppingCart';
import SoldModal from './SoldModal';
import history from '../../history';

const ShoppingCart = () => {
  const [openSoldModal, setOpenSoldModal] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([] as ProductToBuyType[]);
  const [buyError, setBuyError] = useState(false);

  const { userId, authenticated } = useContext(AuthContext);

  useEffect(() => {
    const storagedCart = shoppingCartStorage.get();

    if (storagedCart === null) return;

    const updatedStoragedCart = [] as ProductToBuyType[];

    storagedCart.forEach((product) => {
      const existing = updatedStoragedCart.filter(
        (productStoraged) =>
          productStoraged.id === product.id &&
          productStoraged.type === product.type,
      );

      if (existing.length) {
        const existingIndex = updatedStoragedCart.indexOf(existing[0]);
        updatedStoragedCart[existingIndex].quantity =
          product.quantity + updatedStoragedCart[existingIndex].quantity;
      } else {
        updatedStoragedCart.push(product);
      }
    });
    setShoppingCart(updatedStoragedCart);
  }, []);

  useEffect(() => {
    shoppingCartStorage.set(shoppingCart);
  }, [shoppingCart]);

  const handleShowType = (type: number) => {
    switch (type) {
      case 0:
        return 'Caneca';
      case 1:
        return 'Quadro/Placa';
      case 2:
        return 'Camisa';
      default:
        return 'Sem Tipo';
    }
  };

  const handleUpQuantity = (productId: string, productType: number) => {
    setShoppingCart((old) =>
      old.map((e) => {
        if (e.id === productId && e.type === productType)
          return {
            ...e,
            quantity: Number(e.quantity) + 1,
          };
        return e;
      }),
    );
  };

  const handleDownQuantity = (productId: string, productType: number) => {
    setShoppingCart((old) =>
      old.map((e) => {
        if (e.quantity === 1) return e;
        if (e.id === productId && e.type === productType)
          return {
            ...e,
            quantity: Number(e.quantity) - 1,
          };
        return e;
      }),
    );
  };

  const handleOnChangeQuantity = (
    value: string,
    productId: string,
    productType: number,
  ) => {
    if (!isNaN(Number(value)))
      setShoppingCart((old) =>
        old.map((e) => {
          if (e.id === productId && e.type === productType)
            return {
              ...e,
              quantity: value as unknown as number,
            };
          return e;
        }),
      );
  };

  const handleRemoveProduct = (productId: string, productType: number) => {
    setShoppingCart((old) =>
      old.filter(
        (item) => !(item.id === productId && item.type === productType),
      ),
    );
  };

  const getItensLabel = () =>
    `${shoppingCart.length} ${shoppingCart.length === 1 ? 'Item' : 'Itens'}`;

  const getFullPrice = () =>
    shoppingCart.length
      ? shoppingCart
          .map((e) => e.price * e.quantity)
          .reduce((acc, nxt) => acc + nxt)
      : 0;

  const checkoutOrder = async () => {
    if (!authenticated) {
      history.push('/login?checkout=true');
      return;
    }

    setBuyError(false);

    try {
      await api.post('/register-order', {
        userId,
        status: 0,
        products: shoppingCart.map(({ id, type, price, quantity }) => ({
          id,
          type,
          price,
          quantity,
        })),
      });

      setOpenSoldModal(true);
      shoppingCartStorage.remove();
    } catch (error) {
      console.error(error.message);
      setBuyError(true);
      setOpenSoldModal(true);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row shadow-md my-10">
          <div className="w-auto lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrinho de compras</h1>
              <h2 className="font-semibold text-2xl">{getItensLabel()}</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Detalhes
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantidade
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Preço
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>

            {shoppingCart.map((product) => (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24 object-contain"
                      src={product.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">
                      {product.name} - {handleShowType(product.type)}
                    </span>
                    <span className="text-red-500 text-xs">
                      {product.user.name}
                    </span>
                    <div
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      onClick={() =>
                        handleRemoveProduct(product.id, product.type)
                      }
                    >
                      Remover
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                    viewBox="0 0 448 512"
                    onClick={() => handleDownQuantity(product.id, product.type)}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={product.quantity}
                    onChange={(e) =>
                      handleOnChangeQuantity(
                        e.target.value,
                        product.id,
                        product.type,
                      )
                    }
                  />

                  <svg
                    className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                    viewBox="0 0 448 512"
                    onClick={() => handleUpQuantity(product.id, product.type)}
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {toCurrency(product.price)}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {toCurrency(product.price * product.quantity)}
                </span>
              </div>
            ))}

            <Link
              to="/"
              className="flex font-semibold text-green-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-green-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continuar Comprando
            </Link>
          </div>

          <div id="summary" className="w-auto lg:w-1/4 px-8 py-10 bg-gray-100">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Resumo do Pedido
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                {getItensLabel()}
              </span>
              <span className="font-semibold text-sm">
                {toCurrency(getFullPrice())}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Entrega
              </label>
              <select
                onChange={() => {}}
                className="block p-2 text-gray-600 w-full text-sm bg-white "
              >
                <option value={10}>Entrega Padrão - R$10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Código Promocional
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Inserir código"
                className="p-2 text-sm w-full bg-white"
              />
            </div>
            <button className="bg-black hover:bg-gray-800 px-5 py-2 text-sm text-white uppercase">
              Aplicar
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Custo total</span>
                <span>{toCurrency(getFullPrice() + 10)}</span>
              </div>
              <button
                disabled={!shoppingCart.length}
                className={`font-semibold py-3 text-sm  uppercase w-full ${
                  !shoppingCart.length
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                } `}
                onClick={() => {
                  checkoutOrder();
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <SoldModal
        open={openSoldModal}
        onClose={() => {
          setOpenSoldModal(false);
        }}
        error={buyError}
      />
    </Layout>
  );
};

export default ShoppingCart;
