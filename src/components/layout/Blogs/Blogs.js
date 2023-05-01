import React from 'react';
import styles from './Blogs.module.scss';
import Blog from '../../common/Blog/Blog';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/blogRedux';

const Blogs = () => {
  const blogs = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.heading}>
          <h3>Latest Blog</h3>
        </div>
        <div className='row'>
          {blogs.map(blog => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={blog.id}>
              <Blog {...blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
