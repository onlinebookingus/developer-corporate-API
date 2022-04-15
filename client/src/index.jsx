import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GuestBookingContextProvider } from './components/Pages/Properties/Context/GuestBookingContext';
import { PropertiesDataContextProvider } from './helpers/PropertiesDataContext';





ReactDOM.render(
  <React.StrictMode>
   <GuestBookingContextProvider>
     <PropertiesDataContextProvider>
    <App />
    </PropertiesDataContextProvider>
   </GuestBookingContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


