import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import TopPage from './pages/TopPage';
import MyRecordPage from './pages/MyRecords';
import ColumnPage from './pages/ColumnPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={
            <ProtectedRoute>
              <TopPage />
            </ProtectedRoute>
          } />
          <Route path="my-record" element={
            <ProtectedRoute>
              <MyRecordPage />
            </ProtectedRoute>
          } />
          <Route path="column" element={<ColumnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;