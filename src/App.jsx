import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import TopPage from './pages/TopPage';
import MyRecordPage from './pages/MyRecords';
import ColumnPage from './pages/ColumnPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="records" element={<MyRecordPage />} />
          <Route path="column" element={<ColumnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;