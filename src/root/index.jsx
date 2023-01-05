import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <>
            <Navbar />
            <Footer />
          </>
        }>
          {navbar.map(({element,path}, index) => {
              return <Route key={index} path={path} element={element}></Route>
          })}
        </Route>
        <Route path='/*' element={<h1>404 NOT FOUND</h1>} />
        <Route path='/' element={<Navigate to={'/home'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;