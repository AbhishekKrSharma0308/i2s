import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../assets/blogs.json';

const BlogList = () => {
  const blogsPerPage = 5; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="blog-list">
      <h2>Blog List</h2>
      <ul>
        {currentBlogs.map((blog, index) => (
          <li key={index} className="blog-item">
            <Link to={`/blog/${blog.id}`} className="blog-link">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <h3 className="blog-title">{blog.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={i + 1 === currentPage ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
