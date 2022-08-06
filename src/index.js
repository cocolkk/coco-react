import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/page/home/home';

const container = document.getElementById('root');
class Index extends React.Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(container);
root.render(<Index />);
