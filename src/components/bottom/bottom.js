import React from 'react';
import BeiAn from '../../assets/beian.png';
import '../bottom/bottom.less';

export default class Bottom extends React.Component {
    gotoBeian1 = () => {
        window.open(
            'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033528',
            '_blank'
        );
    };
    gotoBeian2 = () => {
        window.open('https://beian.miit.gov.cn', '_blank');
    };

    render() {
        return (
            <>
                <div className="bottom">
                    <img className="beian-img" src={BeiAn} alt="" />
                    <div className="beian-font1" onClick={this.gotoBeian1}>
                        京公网安备 11010802033528号
                    </div>
                    <div className="beian-font2" onClick={this.gotoBeian2}>
                        京ICP备2020040756号-1
                    </div>
                </div>
            </>
        );
    }
}
