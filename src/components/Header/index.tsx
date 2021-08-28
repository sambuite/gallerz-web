import { useContext } from 'react';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const navCollapseRef = useRef<HTMLDivElement>(null);

  const buttonOnclick = () => {
    navCollapseRef.current?.classList.toggle('hidden');
    navCollapseRef.current?.classList.toggle('flex');
  };

  const { pathname } = useLocation();

  const { authenticated, handleLogout } = useContext(AuthContext);

  return (
    <nav className="bg-white py-4 mb-5">
      <div className="w-auto px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="bg-primary-500 text-white font-bold text-md p-2"
          >
            GALLERZ
          </Link>

          <button
            className="px-3 py-1 mr-4 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
            onClick={buttonOnclick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
          ref={navCollapseRef}
        >
          <Link
            to="/"
            className={
              pathname === '/'
                ? 'text-gray-600 font-bold bg-gray-200 text-md p-2'
                : 'p-2 md:ml-3 text-gray-600 hover:font-bold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
            }
          >
            Início
          </Link>
          <Link
            to="/shopping-cart"
            className={
              pathname === '/shopping-cart'
                ? 'text-gray-600 font-bold bg-gray-200 text-md p-2'
                : 'p-2 md:ml-3 text-gray-600 hover:font-bold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
            }
          >
            Carrinho
          </Link>
          {!authenticated ? (
            <>
              <Link
                to="/login"
                className="p-2 md:ml-3 text-primary-600 text-center border border-transparent hover:bg-primary-500 hover:text-white transition-colors duration-300"
              >
                Entrar
              </Link>
              <Link
                to="/register"
                className="p-2 md:ml-3 text-primary-600 text-center border border-solid border-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
              >
                Cadastrar-se
              </Link>
            </>
          ) : (
            <div
              className="p-2 lg:px-4 mx-2 text-primary-600 text-center border border-transparent hover:underline transition-colors duration-300 cursor-pointer"
              onClick={() => {
                handleLogout();
              }}
            >
              Sair
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
