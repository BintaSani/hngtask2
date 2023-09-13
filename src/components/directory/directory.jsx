import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/homepage';
import DetailsPage from '../../pages/details/detailspage';

const Directory = () => {
    return (
    <div className='shop-page'>
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/:id' element={<DetailsPage/>} />
      </Routes>
    </div>
  )};
  



export default Directory;