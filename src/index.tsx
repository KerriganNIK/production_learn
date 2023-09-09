import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvier';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProviders/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
