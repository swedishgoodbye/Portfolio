import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page main-item'>

                <div className='about-display'>
                                <Link className='page-exit' to={{pathname: `/`}}>
                        X
                    </Link>

                    <div className='about-display-inner'>

                        <div className='about-content'>

                            <img src={'https://lh3.googleusercontent.com/VbfEac-GSjJLSMghD4cHF-G4K6HlzIcIUYc_EQL3KKh8OOpV1Ew9KDXm2aN1dl7sjrq7tzv0M89qz6_vOGDBw68Boaq5hvFX0v4rg29IpCuG1223VEYlPX91D9JbF-ikVPG5T2mDQjDc-M0MEEkZCzMa5f9qcvlkUwKzteNFefkrY9tP6AolnwqqBbnLvJsbX5mUPCk19tvZB5ts741hxLsD4lMLr5dh_ZwPtO4_helQOIlMEB8l2h-qR27PIpDIKUyj0vv0PsKLgjeGXaonIgPwrotqq-YDK1iE_apAeH3-J3XKAMqMGzKTIObonCqHXb-d9d6WGJGii4BF9JgfX6OdvzQAXgLnQS3LEXeT4mpEtWo5ZDopwYMwWCAVHRCGW9sfLv50KbxL-6hZHxwRYlibNUb3YLxIGkq25kDMIdkdTInp4_cwmbncR1HO195l3cw2irenb5ZeBossqci_O76eQyR6FzReMmPWgd-gKSTCQ3xvQ4BKKPCj3CUrzX7wI1HBqo5iFSf-7Mq6TbtC88urptnIsraK5ZTcHZu-OveOZLPDGFtGgsO7EVl9SFPmnM_w2hHHTCyd7qvuMACG7I0Yybhp8lntQ3r27encm9LseN0HGIGzL694zX1N8GCbGQ0Zc_OaWzLjB-9U11o3rGmm=w361-h362-no'} 
                            className='about-img' />

                            <h1 className='about-name'>
                                <a className='about-name about-link' href='http://opticalfalicy.com'>
                                    Brett Sullivan
                                </a>
                            </h1>

                            <h2 className='about-title'>
                                <a href='https://www.linkedin.com/in/brett-sullivan-a40445104/' className='about-title about-link'>
                                    Web Developer
                                </a>
                            </h2>

                            <ul className='about-info'>
                                <li className='about-location info-item list-item'><a href='https://goo.gl/maps/2fqUPj7VPyu' className='about-location info-item about-link'>Location: Chicago, Il, USA</a></li>
                                <li className='about-education info-item list-item'><a href='https://www.lambdaschool.com' className='about-education info-item about-link'>Education: Lambda School</a></li>
                                <li className='about-status info-item list-item'><a href='https://github.com/swedishgoodbye' className='about-status info-item about-link'>Status: Self-Educating / Seeking Employment</a></li>
                            </ul>

                        </div>

                    </div>

                </div>
                
            </div>
        );
    };
};

export default About;