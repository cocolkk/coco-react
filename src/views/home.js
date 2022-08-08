import React from 'react';
import Header from '../components/header/header';
import JsPng from '../assets/js.png';
import HtmlPng from '../assets/html.png';
import CssPng from '../assets/css.png';
import VuePng from '../assets/vue.png';
import ReactPng from '../assets/react.png';
import PythonPng from '../assets/python.png';
import gitPng from '../assets/git.png';
import DockerPng from '../assets/docker.png';
import { Link } from 'react-router-dom';
import './home.less';

class Home extends React.Component {
    state = {
        list: [
            {
                id: 1,
                name: HtmlPng,
                title: 'HTML',
                content: "Let's go to learn HTML",
                path: '/html',
            },
            {
                id: 2,
                name: CssPng,
                title: 'CSS',
                content: "Let's go to learn CSS",
                path: '/css',
            },
            {
                id: 3,
                name: JsPng,
                title: 'Javascript',
                content: "Let's go to learn Javascript",
                path: '/js',
            },
            {
                id: 4,
                name: VuePng,
                title: 'Vue',
                content: "Let's go to learn Vue",
                path: '/vue',
            },
            {
                id: 5,
                name: ReactPng,
                title: 'React',
                content: "Let's go to learn React",
                path: '/react',
            },
            {
                id: 6,
                name: PythonPng,
                title: 'Python',
                content: "Let'sgo to learn Python",
                path: '/python',
            },
            {
                id: 7,
                name: gitPng,
                title: 'Git',
                content: "Let's go to learn Git",
                path: '/git',
            },
            {
                id: 8,
                name: DockerPng,
                title: 'Docker',
                content: "Let's go to learn Docker",
                path: '/docker',
            },
        ],
    };

    cssList() {
        return this.state.list.map((item, index) => (
            <Link key={index} to={item.path}>
                <div className="card">
                    <div className="img-box">
                        <img
                            className="img1"
                            key={index}
                            src={item.name}
                            alt=""
                        />
                    </div>
                    <div className="detail">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                </div>
            </Link>
        ));
    }
    render() {
        return (
            <div className="home">
                <div className="home-index">{this.cssList()}</div>
                <div className="home-content"></div>
            </div>
        );
    }
}
export default Home;
