import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import ProductModal from '../../components/ProductModal';
import { ProductType } from '../../shared/types';

const mock = [
  {
    id: '12300',
    name: 'Produto 00',
    imageUrl:
      'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
  {
    id: '12301',
    name: 'Produto 01',
    imageUrl:
      'https://images.unsplash.com/photo-1521911528923-9c3838123490?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
  {
    id: '12302',
    name: 'Produto 02',
    imageUrl:
      'https://images.unsplash.com/photo-1579762593175-20226054cad0?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
  {
    id: '12303',
    name: 'Produto 03',
    imageUrl:
      'https://images.unsplash.com/photo-1575995872537-3793d29d972c?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
  {
    id: '12304',
    name: 'Produto 04',
    imageUrl:
      'https://images.unsplash.com/photo-1578924824780-b7c49930e310?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
  {
    id: '12305',
    name: 'Produto 05',
    imageUrl:
      'https://images.unsplash.com/photo-1542025479963-e976f1db9b31?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
  {
    id: '12306',
    name: 'Produto 06',
    imageUrl:
      'https://images.unsplash.com/photo-1612760721786-a42eb89aba02?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-s29515a221f2d',
  },
  {
    id: '12307',
    name: 'Produto 07',
    imageUrl:
      'https://images.unsplash.com/photo-1584448097639-99cf648e8def?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },

  {
    id: '12308',
    name: 'Produto 08',
    imageUrl:
      'https://images.unsplash.com/photo-1584448097639-99cf648e8def?fit=crop&w=331&q=80',
    price: 23.5,
    userId: '568eeef4-9a9a-47ed-af52-29515a221f2d',
  },
];

const Home = () => {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState<ProductType>(
    {} as ProductType,
  );
  const [productsState, setProductsState] = useState([mock]);

  useEffect(() => {
    const products = [...mock];

    for (let index = 0; index < 4; index++) {
      const offset = Math.round(mock.length / 4);
      const start = index * offset;
      const end = start + offset;

      setProductsState((old: any) =>
        !index
          ? [products.slice(start, end)]
          : [...old, products.slice(start, end)],
      );
    }
  }, []);

  return (
    <Layout>
      <div className="w-auto m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-start auto-cols-auto m-auto">
          {productsState.map((productArr, index) => (
            <div key={index} className="grid grid-cols-1 gap-y-3">
              {productArr.map((product) => (
                <div
                  key={product.id}
                  className="hover:opacity-80 transition-all cursor-pointer"
                  onClick={() => {
                    setProductSelected(product);
                    setProductModalOpen(true);
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt="Imagem"
                    className="rounded-sm  m-auto"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ProductModal
        open={productModalOpen}
        onClose={() => setProductModalOpen(false)}
        product={productSelected}
      />
    </Layout>
  );
};

export default Home;
