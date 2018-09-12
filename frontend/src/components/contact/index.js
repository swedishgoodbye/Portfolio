import React, { Component } from 'react';

import './contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact-page">
                    <div class="inner">
            
            <h1>Get In Touch</h1>
            
            <p class="contactlist">
                <a href="https://www.linkedin.com/in/brett-sullivan-aa4930154" target="_blank" contact="contact-item">Brett Sullivan</a>
                <br />
                <br />
                <a href="mailto:swedishgoodbye@gmail.com" class="contact-item" id="gmail">Email Me</a>
                <br />
                <br />
                 <a href="tel:(708)-971-9389" class="contact-item cellcontact" id="webcell">(708)-971-9389</a>
                 <a href="tel:(708)-971-9389" class="contact-item cellcontact" id="mobilecell">Call Me</a>
            </p>
            </div>

                
            </div>
        )
    }
}

export default Contact;