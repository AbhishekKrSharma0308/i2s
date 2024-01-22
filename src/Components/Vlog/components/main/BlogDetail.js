import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../assets/blogs.json';

const BlogPost = () => {
  const { blogId } = useParams();
  const blog = blogData.find(blog => blog.id.toString() === blogId);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  // Function to render different types of content
  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'header') {
        return <h3 key={index}>{item.text}</h3>;
      } else if (item.type === 'paragraph') {
        return <p key={index}>{item.text}</p>;
      } else if (item.type === 'image1') {
        return <img className='img1' src={item.text} alt='img' key={index}/>;
      }else if (item.type === 'image2') {
        return <img className='img2' src={item.text} alt='img' key={index}/>;
      }else if (item.type === 'image3') {
        return <img className='img3' src={item.text} alt='img' key={index}/>;
      }
      
      return null;
    });
  };
  const renderFooter = (footer) => {
    return footer.map((item, index) => {
      if (item.type === 'email') {
        return <h3 key={index}>{item.text}</h3>;
      } else if (item.type === 'name') {
        return <h4 key={index}>{item.text}</h4>;
      }
      else if (item.type === 'contact') {
        return <h4 key={index}>{item.text}</h4>;
      } else if (item.type === 'picture') {
        return <img src={item.text} alt='img' key={index}/>;
      }
      
      return null;
    });
  };

  return (
    <div className='blog-main'>
    <div className="blog-post">
      <h2 className="blog-title">{blog.title}</h2>
      {/* <img src={blog.image} alt={blog.title} className="blog-image" /> */}
      <p>{blog.main} </p>
      <div className="blog-content">
        {renderContent(blog.content)}
      
      </div>
      </div><div className='blog-footer'>
        <h1>For further details please contact:</h1> 
      {renderFooter(blog.footer)}
      </div>
    </div>
  );
};

export default BlogPost;
