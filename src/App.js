import RouteView from './router/index';
import config from './router/config';
import Header from './components/header/header';

import { BrowserRouter } from 'react-router-dom';
const routerList = [
    // 将所有路由拼接在一起
    ...config,
];
function App() {
    return (
        <div className="App">
            <RouteView routes={routerList} />
        </div>
    );
}

export default App;
