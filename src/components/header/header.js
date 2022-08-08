import React from 'react';
import '../header/headerless.less';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    // state
    state = {
        navBar: [
            { id: 1, name: '首页', path: '/home' },
            { id: 2, name: 'HTML', path: '/html' },
            { id: 3, name: 'CSS', path: '/css' },
            { id: 4, name: 'Javascript', path: '/js' },
            { id: 5, name: 'Vue', path: '/vue' },
            { id: 6, name: 'React', path: '/home' },
            { id: 7, name: 'Python', path: '/home' },
            { id: 8, name: 'Git', path: '/home' },
            { id: 9, name: 'Docker', path: '/home' },
        ],
    };
    navList() {
        return this.state.navBar.map((item) => (
            // <Link
            //     key={item.id}
            //     style={{ textDecoration: 'none', color: 'white' }}
            //     to={item.path}
            // >
            <span>
                <a href={item.path}>{item.name}</a>
            </span>
            // </Link>
        ));
    }

    render() {
        return (
            <>
                <div className="header">
                    <h1>可可学习笔记</h1>
                    <div>{this.navList()}</div>
                </div>
            </>
        );
    }
}

export default Header;
