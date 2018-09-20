import React, { Component } from 'react';



import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page'>

            <h1 className="about-title"> About Me </h1>
                {/* <p class="about-text">
        
        <div class="about-text p-left">
            I am a web development and programming student at Lambda School.
           </div>

            <br />
            

        <div class="about-text p-right">
           Within the last few months I have learned various languages and frameworks including: JavaScript, C, Python, React, Redux, and more.
        </div> 

            <br />
            

            <div class="about-text p-left">
            Upon completion of my courses, I will focus on front-end development. That doesn't mean I will stop expanding my knowledge and interests with my future experiences and ongoing education.
            </div>
            
            <br />
            

            <div class="about-text p-right">
            Aside from programming I play music. I am self taught in almost all the instruments I play (guitar, bass guitar, drums, keyboard). An additional skill I have been working on as a hobby is audio recording and production.
            </div>
            
            <br />
            

            <div class="about-text p-left">
            In the hardcore band Dead Split Egos, I have toured and played in cities on both the East and West coasts, including Brooklyn, Seattle, and Denver. 
            </div>

            <br />
            

            <div class="about-text p-right">  
            My life aspiration is a pursuit of balance between my passion for technology and music. 
            </div>
            

            </p> */}

            <div className="about-content">

                <div className="about-item about-summary">
                    <p>
                    </p>
                </div>

                <div className="about-item about-media">

                    <img src="https://lh3.googleusercontent.com/sC4DAqtUclFdw9quV67wIaDyRfwo5JfeT2Og7YI9le7_t2kbZFSFTKyse2dFQRePb1ck8ytp_u4hdxMHzcK2YFEsur0JTamI-LZfIBNzp7VOlCVaXtg9wD09KmKWeuBMOwwn4MLdnZaqhO3koIgiqGo-dOhVfu0bpUfd1mzNQKWRgPmhRnvFFmcgwDyfXu0wtNjjPlDaJY4g2IVXDPSKSRFZFsBBF8Y4OJcDuXp3PSqhIdV6yEhTRzrhXYcOjx4S12Hfiz3QkM_-YK44SxvrO6q0UMUG_7aMtWjnOPpE62KTh-ccPfp7notA2WPmAmnoXVTG-hgHPGf31tmtCFBYCfPI4u4dX_CYzMK0N8mRw0l20a7gDe-Ya6StMC_UiRyXZq4EEMF4MpYATbQifTMXd-X8B1WMpk2I6-nl_CI2oTnf7lHy_mxL-jJbt76JoneF1c6huDBfpt7u-duM_1T39mjciLdAMeWF1CAE4wuyj_4Toj3KVRSyX_kLBR2XDwAbIW-pmOyA3Ry9h5SkIpfdQb-wlfCUXD7Mfup7EsL4wy4RLPjiV1dIlvfZRkzW5OwGgJnIibchdrX46-Tn6gCarNNB4OyPurezqLz7yxh7ySIoeKJ6IkwHEiZWwOR27Q=w361-h362-no" />
                </div>
                
                </div>
            </div>
        )
    }
}

export default About;