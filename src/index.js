import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Contextprovider } from './components/Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Contextprovider>
    <App/>
   </Contextprovider>
);


