import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>home</h1>} />
        <Route path='/properties' element={<h1>properties</h1>} />
        <Route path='/*' element={<h1>404 NOT FOUND</h1>} />
        <Route path='/' element={<Navigate to={'/Home'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;