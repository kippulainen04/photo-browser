import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
const Home = lazy (() => import('./components/Home'));
const PhotosList = lazy (() => import('./components/photos-list/photos-list.component'));
const SinglePhoto = lazy (() => import('./components/single-photo/single-photo.component'));


function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={ <PhotosList />} />
          
          <Route path="image" >
            <Route path=":imageId" element={<SinglePhoto />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
    
  );
}

export default App;
