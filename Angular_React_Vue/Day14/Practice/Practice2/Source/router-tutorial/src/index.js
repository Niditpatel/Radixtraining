import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />} >
            <Route index element={
              <main style={{padding:'1rem'}}>
                <p>Select An Invoice</p>
              </main>
            }></Route>
            <Route path=':invoiceId' element={<Invoice/>}></Route>
          </Route>
          <Route path='*' element={<main style={{padding:'1rem'}}><p>Nothing  is Here...</p></main>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
