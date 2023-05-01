import React, { useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Loading from './components/common/Loading/Loading';
import { AccessPage } from './components/views/AccessPage/AccessPage';
import { ProtectedRoute } from './components/features/ProtectedRoute/ProtectedRoute';

const userEmail = sessionStorage.getItem('userEmail');
const userData = sessionStorage.getItem('userData');

const App = () => {
  const [user, setUser] = useState(userEmail);
  const [userLogged, setUserLogged] = useState(userData);

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout user={user} userSetter={setUserLogged}>
            <Routes>
              <Route
                exact
                path={'/'}
                element={
                  <ProtectedRoute user={userLogged}>
                    <Homepage />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path={'/shop/:categoryId'}
                element={
                  <ProtectedRoute user={userLogged}>
                    <ProductList />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path={'/product/:productId'}
                element={
                  <ProtectedRoute user={userLogged}>
                    <ProductPage />
                  </ProtectedRoute>
                }
              />

              <Route
                exact
                path={'/:accessPage'}
                element={<AccessPage setUser={setUser} loginUser={setUserLogged} />}
              />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
};

export default App;
