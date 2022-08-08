import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import Header from './components/header/header';
import './index.less';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Bottom from './components/bottom/bottom';

const container = document.getElementById('root');
class Index extends React.Component {
    render() {
        console.log('index-->');
        return (
            <div>
                <Header />
                <App />

                <Bottom />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(container);
root.render(<Index />);
