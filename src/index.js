import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>,
);