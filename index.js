import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Demo />
        </StyledEngineProvider>
    </React.StrictMode>
);