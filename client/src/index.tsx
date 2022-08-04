import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import reportWebVitals from './reportWebVitals';
import VideoForm from './components/Videos/VideoForm';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoUpdate from './components/Videos/VideoUpdate';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar>

        <Routes>
          <Route path='/' element={<VideoList/>}/>
          <Route path='newVideo' element={<VideoForm/>}/>
          <Route path='update/:id' element={<VideoUpdate/>}/>
        </Routes>
        <ToastContainer/>
    </Navbar>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
