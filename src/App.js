import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import { AccessPage } from './components/views/AccessPage/AccessPage';
import { ProtectedRoute } from './components/features/ProtectedRoute/ProtectedRoute';

const userData = JSON.parse(sessionStorage.getItem('userData'));

const App = () => {
  const [user, setUser] = useState(userData);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route
              exact
              path={'/'}
              element={
                <ProtectedRoute user={user}>
                  <Homepage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path={'/shop/:categoryId'}
              element={
                <ProtectedRoute user={user}>
                  <ProductList />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path={'/product/:productId'}
              element={
                <ProtectedRoute user={user}>
                  <ProductPage />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path={'/:accessPage'}
              element={<AccessPage setUser={setUser} />}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
