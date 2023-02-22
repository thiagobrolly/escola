import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesApp } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  // const notify = () => toast('Wow so easy !');
  return (
    <>
      {/* <button type="button" onClick={notify}>
        Notify !
      </button> */}
      <ToastContainer autoClose={3000} />
      <RoutesApp />
      <GlobalStyle />
    </>
  );
}
