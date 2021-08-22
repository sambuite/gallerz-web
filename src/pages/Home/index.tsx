import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="w-auto m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-start auto-cols-auto">
          <div className="grid grid-cols-1 gap-y-3">
            {Array(50)
              .fill('https://source.unsplash.com/collection/9387510')
              .map((e, i) => (
                <div className="hover:opacity-80 transition-all cursor-pointer">
                  <img src={e} alt="Imagem" className="rounded-sm" />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            {Array(50)
              .fill('https://source.unsplash.com/collection/49553154')
              .map((e, i) => (
                <div className="hover:opacity-80 transition-all cursor-pointer">
                  <img src={e} alt="Imagem" className="rounded-sm" />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            {Array(50)
              .fill('https://source.unsplash.com/collection/11668382')
              .map((e, i) => (
                <div className="hover:opacity-80 transition-all cursor-pointer">
                  <img src={e} alt="Imagem" className="rounded-sm" />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            {Array(50)
              .fill('https://source.unsplash.com/collection/9368333')
              .map((e, i) => (
                <div className="hover:opacity-80 transition-all cursor-pointer">
                  <img src={e} alt="Imagem" className="rounded-sm" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
