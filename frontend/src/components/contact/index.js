import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ReactContactForm from 'react-mail-form';

import './contact.css';

class Contact extends Component{

    render(){
        return(
            <div className="contact-page main-item">

                <div className='contact-display'>
                    <Link className='contact-page-exit' to={{pathname: `/`}}>
                        X
                    </Link>

                <div class="inner">

                        {/* <div className="contact-form">
                            <ReactContactForm 
                                className="contact-form-components" 
                                titlePlaceholder="-Please Enter Your Email Address Here-"
                                contentsPlaceholder="What's Up?" 
                                contentsRows="20"
                                to="swedishgoodbye@gmail.com" />
                        </div> */}

                        <div className="contactlist">
                            <a href="https://www.linkedin.com/in/brett-sullivan-aa4930154" target="_blank" contact="contact-item">
                            
                                <img className="contact-linked" src="https://lh3.googleusercontent.com/QvF76s9SE_EKqcKGnw_NH20GAhdV0KEkhnLeqzod-nCqN5jj60khi8me0I4hpJrZdmqj2ml7JouZ-q5aAKLUV-JiYvN5wCzsMzLnmYzzvTA9qwuxSkKgHkZFjr0OmBrE4Fgo0O8opK_PVBfoePxbZOUI5vGyFEnPsXfejr9PHXk9VU4ZssyfR4Z4ZVFMX-4jzDEoq8JCrCPpqPnfOxtR1ziq9cNOh1kXUrbHd_itJVhNaF9Zd_GEGHI59jHVfw6pOMxr2P2NJNc6c4Ym0sL9tlnuYSWXjqfwJJCdZOS_zDXVw5tLELU8rUxxt98F1XhHQgTOqMgTKGVRtiM18tR2bgTWcjzkaFkSSBgbnXQ-TXxzi2bkrepA0uDz56cXECJRNjP3ieJAPfWbHgU836sDeoxaJKCwkhIcr3FWdVev9weme-jWsIOjNjwmFUmJdp-57wOMXGEe2UlZloTKqSVqi4NgHp2hUTqLPo8DhyfweTvsm91Azl_4pNMrP1boDQ6K4pBrs3jbrvK2Uk7af_6Xe7iUwHxyepLKrcg-qwea6F8Sr6ArcZJCU8GX7AYW600zNLPAjUa-idUqLDyLXTyePr-RaiadpX3nymrbfZuYTkFEMClvDq7Py4OFVvfpig=w223-h54-no" />
                            </a>
                            <a href="https://github.com/swedishgoodbye" className="contact-git"><img src={require('../../media/GitHub-Mark-Light-64px.png')}/></a>
                            <a href={"mailto: brettsullivan@opticalfalicy.com"} className="contact-email">brettsullivan@opticalfalicy.com</a>
                            <a href="tel:(708)-971-9389" class="contact-item cellcontact" id="webcell">(708)-971-9389</a>
                            <a href="tel:(708)-971-9389" class="contact-item cellcontact" id="mobilecell">Call Me</a>
                        </div>

                </div>

                </div>
                
            </div>
        );
    };
};

export default Contact;