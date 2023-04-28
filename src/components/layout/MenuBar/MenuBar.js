import React from 'react';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';

const MenuBar = () => {
  const { t } = useTranslation();

  const categories = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <ul>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                >
                  {t('label.homePage')}
                </NavLink>
              </li>
              {categories.map(({ id }) => {
                return (
                  <li key={id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                      to={`/shop/${id}`}
                    >
                      {t(`label.${id}`)}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                  to='/blog'
                >
                  {t('label.blog')}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
