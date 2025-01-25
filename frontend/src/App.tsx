import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './app/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/home" element={<></>} />
      <Route path="/user/:user_id" element={<></>} />
      <Route path="/join" element={<></>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
