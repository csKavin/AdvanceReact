import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css'
import { Themes } from './Helpers/Themes';
import Loader from './Helpers/Loader';
const Login = React.lazy(() => import('./Application/Login/index'));
const Home = React.lazy(() => import('./Application/Home/index'));

function App() {
  return (
    <div>
      <Themes>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Suspense>
      </Themes>
    </div>
  );
}

export default App;
