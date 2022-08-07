import React from 'react';
import '../header/header.less';

class Header extends React.Component {
    // state
    state = {
        navBar: [
            { id: 1, name: '首页' },
            { id: 2, name: 'HTML' },
            { id: 3, name: 'CSS' },
            { id: 4, name: 'Javascript' },
            { id: 5, name: 'Vue' },
            { id: 6, name: 'React' },
            { id: 2, name: 'Python' },
            { id: 2, name: 'Git' },
            { id: 2, name: 'Docker' },
        ],
    };
    navList() {
        return this.state.navBar.map((item) => <span>{item.name}</span>);
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
