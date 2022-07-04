import * as React from 'react';
import App from './app';
import "./style.scss";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!); // createRoot(container!) if you use TypeScript

root.render(<App/>);
