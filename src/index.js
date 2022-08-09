import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import Header from './components/header/header';
import './index.less';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Bottom from './components/bottom/bottom';
import MouseParticles from 'react-mouse-particles';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const container = document.getElementById('root');

// 增加粒子背景
const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
};
const particlesLoaded = (container) => {
    console.log(container);
};
class Index extends React.Component {
    render() {
        console.log('index-->');
        return (
            <div>
                <Header />
                <App />
                <MouseParticles
                    g={2}
                    life={1.3}
                    color="random"
                    cull="col,image-wrapper"
                    level={8}
                />
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                // value: '#0d47a1',
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: 'push',
                                },
                                onHover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.6,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: '#ffffff',
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: {
                                    default: 'bounce',
                                },
                                random: false,
                                speed: 1.5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 600,
                                },
                                value: 150,
                            },
                            opacity: {
                                value: 0.4,
                            },
                            shape: {
                                type: 'circle',
                            },
                            size: {
                                value: { min: 0.7, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <Bottom />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(container);
root.render(<Index />);
