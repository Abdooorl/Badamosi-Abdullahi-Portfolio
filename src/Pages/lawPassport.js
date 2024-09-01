import Navigations from '../components/Navigation';
import Footer from '../components/Footer';
import '../components/lawpassport.css';

const LawPassport = () => {
    return (
        <div className="lawPassport">
            <Navigations />
            <button className="button pointer back black medium-16" onClick={
                    () => {
                        window.location.href = '/home'
                    }
                }> <i class="ph ph-caret-left icon-20 black vertical-align-top"></i> Back</button>
            <div className='main'>
                

                <div className='lawPassport-container'>

                    <div className='content-01'>
                        <div className='title-year'>
                            <div className='lawPassport-title'>
                                <h2 className="semibold-24 title" >Law Passport</h2>
                                <p className="medium-16 sub-title ">Legal access for Family & business</p>
                            </div> 
                            <p className='year semibold-20'>2023</p>
                        </div>

                        <img  src="https://i.ibb.co/3B5mJvg/Law-zero.png" alt="law-zero" className="image"/>
                        

                        <div className='role-team'>
                            <div className='Roles gap'>
                                <p className="medium-16">My Roles</p>
                                <p className="medium-16">UX Design - <span className='grey'>User flow, Visual design</span></p>
                            </div>
                            <div className='Teams gap'>
                                <p className="medium-16">Team</p>
                                <div className='inner-team gap'>
                                    <p className="medium-16 grey">Badamosi Abdullahi</p>
                                    <p className="medium-16 grey">David Olawuyi</p>
                                </div>
                                </div>
                                <div className='Duration gap'>
                                    <p className="medium-16">Durations</p>
                                    <p className="medium-16 grey">2 months</p>
                                </div>
                            </div>
                        </div>
                    
                    {/* content-02 */}
                    <div className="content-02">
                        
                        <div className="Overview">
                            <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className="medium-16 lighter-grey "> OVERVIEW</p>
                            </div>
                            <p className="medium-16 grey text-wrap">To expand their legal services nationwide and enter the digital realm, the need arose for a system that could efficiently connect clients with attorneys. {<br/>} I collaborated with another designer and a team of developers to create a platform that offers users seamless access to a network of attorneys for various legal matters, featuring an intuitive interface and streamlined processes that benefit both clients and attorneys.</p>
                        </div>
                        <div className="Overview">
                            <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className=" medium-16 lighter-grey"> PROBLEM</p>
                            </div>
                            <p className="medium-16 grey text-wrap">The challenge is to integrate an existing offline service with a new digital platform, ensuring that both current offline users and new digital users have a seamless experience.</p>
                        </div>
                        <div className="Overview">
                            <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className="medium-16 lighter-grey "> TIMELINE</p>
                            </div>
                            <div className='weeks'>
                                <p className="medium-16 ">WEEK 1</p>
                                <p className="medium-16 grey"> BRAINSTORMING & IDEATION</p>
                            </div>
                            <div className='weeks'>
                                <p className="medium-16 ">WEEK 2-6</p>
                                <p className="medium-16 grey">VISUAL DESIGN & PROTOTYPING</p>
                            </div>
                            <div className='weeks'>
                                <p className="medium-16 ">WEEK 6-8</p>
                                <p className="medium-16 grey">TEST & ITERATIONS</p>
                            </div>
                        </div>
                      
                    {/*image-two */}
                    <div className="Overview">
                        <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className="medium--16 lighter-grey"> CORE FLOW</p>
                        </div>
                        <div className='sub'>
                            <p className='semibold-18 black'>Submission of Claim</p>
                            <p className="medium-16 grey text-wrap">Streamlining the process of submitting a claim on the to getting an attorney </p>
                        </div>
                        </div>
                        <img  src="https://i.ibb.co/sCfYDT2/Law-one.png" alt="law-zero" className="image"/>

                        <div className='three-keys'>
                        <img  src="https://i.ibb.co/7knMYyj/Law-two.png" alt="law-zero" className="image"/>

                        <div className='keys-shorts'>
                            <div className='keys'>
                                <p className='medium-14 green'>KEYS</p>
                                <div className='key-info'>
                                    <p className='medium-16'>Concise and detailed</p>
                                    <p className='medium-16'>Error management</p>
                                    <p className='medium-16'>Good Feedback</p>
                                </div>
                            </div>
                            <div className='keys'>
                                <p className='medium-14 red'>SHORTS</p>
                                <div className='key-info '>
                                    <p className='medium-16'>Longer Form</p>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                    </div>

                    
                    

                    {/*image-three */}
                    

                    <div className='content-03'>
                        <div className='sub'>
                                <p className='semibold-18 black'>Tracking Case</p>
                                <p className="medium-16 grey text-wrap">Users can track their cases and monitor it in a well arranged table.<br></br>
                                I chose to visualize this in a simplified manner . </p>
                        </div>
                         <img  src="https://i.ibb.co/VTLcTSd/Law-three.png" alt="law-three" className="image"/>
                         <img  src="https://i.ibb.co/FbksJ10/law-four.png" alt="law-four" className="image"/>
                         <div className='keys'>
                                <p className='medium-14 green'>KEYS</p>
                                <div className='key-info'>
                                    <p className='medium-16'>Organized Tracking</p>
                                    <p className='medium-16'>Easy access to Attorney</p>
                                    <p className='medium-16'>Schedule Managament</p>
                                </div>
                         </div>
                    </div>

                    <div className='content-04'> 
                        <div className="Overview">
                                <div className='title-container'>
                                    <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                    <p className="medium-16 lighter-grey"> LAYOUT & RESPONSIVENESS</p>
                                </div>
                        </div>
                        <img  src="https://i.ibb.co/9sDng25/Law-five.png" alt="law-five" className="image"/>
                        <img  src="https://i.ibb.co/7Wg33Xg/Law-six.png" alt="law-six" className="image"/>
                    </div>

                    <div className='content-05'> 
                        <div className="Overview">
                                <div className='title-container'>
                                    <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                    <p className="medium-16 lighter-grey"> UI HIGLIGHT</p>
                                </div>
                                <div className='sub'>
                                    <p className='semibold-18 black'>Highlight</p>
                                    <p className="medium-16 grey text-wrap">With proper testing and iterations. the release of the product was met with a satisfactory sentiment from the existing offline user and surge in the number of new users. </p>
                                </div>
                        </div>
                            <img  src="https://i.ibb.co/2ZVj6cz/law-seven-one.png" alt="law-seven-one" className="image"/>
                            <img  src="https://i.ibb.co/vY4qzVj/law-seven-two.png" alt="law-seven-two" className="image"/>
                            <img  src="https://i.ibb.co/p2yLhcP/law-seven-three.png" alt="law-seven-three" className="image"/>
                            <img  src="https://i.ibb.co/TRgrfy4/law-seven-four.png" alt="law-seven-four" className="image"/>
                            <img  src="https://i.ibb.co/j6jTym7/law-seven-five.png" alt="law-seven-five" className="image"/>
                            <img  src="https://i.ibb.co/5FLbSjK/law-seven-six.png" alt="law-seven-six" className="image"/>
                            <img  src="https://i.ibb.co/3fWxq8K/law-seven-seven.png" alt="law-seven-seven" className="image"/>
                            <img  src="https://i.ibb.co/tBTQmbM/law-seven-eight.png" alt="law-seven-eight" className="image"/>
                            <img  src="https://i.ibb.co/WGgzGmG/law-seven-nine.png" alt="law-seven-nine" className="image"/>
                           
                    </div>

                    <div className="Overview">
                            <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className="medium-16 lighter-grey ">THE END</p>
                            </div>
                            <div className='sub'>
                                <p className='semibold-18 black'>I learned a lot</p>
                                <p className="medium-16 grey text-wrap">Exploring an unfamiliar niche pushes me to think creatively and dive deeper into research, helping me uncover new ideas and make more informed design decisions.<br></br> 
                                Research is crucial in guiding me to explore big ideas and opportunities, often leading to unexpected and innovative solutions. </p>
                            </div>
                            </div>

                    </div>

                    <div className='next-project'>
                        <div className='next-container'>
                            <p className='semibold-18'>RELATED PROJECTS</p>
                            <p className='medium-16 grey'>GO TO NEXT</p>
                        </div>
                        <div  className="img-container" onClick={() => {
                        window.location.href = "/ryder"
                        }} >
        
                        <img  src="https://i.ibb.co/rmBqs8r/Ryder.png" alt="UX" className="image border-radius"/>
                            <div className="project-info">
                                <div className="title-info">
                                    <h2 className="title semibold-18">Ryder App</h2>
                                    <p className="intro medium-14 grey">Augmented Reality Car Rental App - ‘24</p>
                                </div>
                                <div className="button-info">
                                    <button className="button general-button pointer view-button medium-14">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        </div>
    );
}

export default LawPassport;