import Layout from '../../components/Layout';

const ShoppingCart = () => {
  const handleDeliverySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('event', e.target.value);
  };

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row shadow-md my-10">
          <div className="w-auto lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrinho de compras</h1>
              <h2 className="font-semibold text-2xl">3 Itens</h2>
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
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24 object-contain"
                    src="https://source.unsplash.com/collection/9387510"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">Arte 01</span>
                  <span className="text-red-500 text-xs">@Jorgeus</span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remover
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />

                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                R$400.00
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                R$400.00
              </span>
            </div>

            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24 object-contain"
                    src="https://source.unsplash.com/collection/49553154"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">Arte 02</span>
                  <span className="text-red-500 text-xs">
                    @Matheus Carvalho
                  </span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remover
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />

                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                R$40.00
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                R$40.00
              </span>
            </div>

            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24 object-contain"
                    src="https://source.unsplash.com/collection/11668382"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">Arte 03</span>
                  <span className="text-red-500 text-xs">@tilos</span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remover
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />

                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 cursor-pointer w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                R$150.00
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                R$150.00
              </span>
            </div>

            <a
              href="#"
              className="flex font-semibold text-green-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-green-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continuar Comprando
            </a>
          </div>

          <div id="summary" className="w-auto lg:w-1/4 px-8 py-10 bg-gray-100">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Resumo do Pedido
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">3 Itens</span>
              <span className="font-semibold text-sm">R$ 590</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Entrega
              </label>
              <select
                onChange={handleDeliverySelection}
                className="block p-2 text-gray-600 w-full text-sm bg-white "
              >
                <option value={10}>Entrega Padrão - R$10.00</option>
                <option value={22}>Entrega Padrão - R$22.00</option>
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
                <span>R$600</span>
              </div>
              <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
