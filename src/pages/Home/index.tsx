import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import ProductModal from '../../components/ProductModal';
import api from '../../services/api';
import { ProductType } from '../../shared/types';

const Home = () => {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState<ProductType>(
    {} as ProductType,
  );
  const [productsState, setProductsState] = useState([] as ProductType[][]);

  useEffect(() => {
    api.get('/products').then((res: any) => {
      const data = res.data as ProductType[];

      const products = [...data];

      for (let index = 0; index < 4; index++) {
        const offset = Math.round(data.length / 4);
        const start = index * offset;
        const end = start + offset;

        setProductsState((old: any) =>
          !index
            ? [products.slice(start, end)]
            : [...old, products.slice(start, end)],
        );
      }
    });
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
