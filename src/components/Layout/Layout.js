import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from 'components/Container/Container';

export const Layout = () => {
  return (
    <Container>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <ToastContainer autoClose={2000} pauseOnHover /> */}
    </Container>
  );
};
