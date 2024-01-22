import React from 'react';
import {Link } from 'react-router-dom';
import BlogList from './components/main/BlogList';
import BlogPost from './components/main/BlogDetail';
import './components/styles/App.scss';
import './components/styles/BlogDetail.scss';
import './components/styles/BlogList.scss';

function App() {
  return (
    <div>
      <div className="app12">
        <header className="header12">
          <h1>Our Blog</h1>
        </header>
        <main className="content12">
         <div>
       <Link to="/blog"><BlogList/></Link>
       
            </div>
        </main>
      </div>
    </div>
  );
}

export default App;
