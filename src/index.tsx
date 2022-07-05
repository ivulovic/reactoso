import App from './app';
import "./style.scss";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(<App/>);
