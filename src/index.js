import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import './index.less';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
class Index extends React.Component {
    render() {
        console.log('index-->');
        return (
            <div>
                <App />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(container);
root.render(<Index />);
