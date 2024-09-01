import Navigations from '../components/Navigation';
import Footer from '../components/Footer';
import '../components/lawpassport.css';


const Homeroom = () => {
    return (
        <div className="Homeroom">
            <Navigations />
            <button className="button pointer back  medium-16" onClick={
                    () => {
                        window.location.href = '/home'
                    }
                }> <i class="ph ph-caret-left icon-20 vertical-align-top"></i> Back</button>
            <div className='main'>
                
            
            <div className="ryder-container lawPassport-container">
                
                <div className='content-01'>
                    <div className='title-year'>
                        <div className='lawPassport-title'>
                            <h2 className="semibold-24 title" >Homeroom Redesign</h2>
                            <p className="medium-16 sub-title ">Reinventing the Real Estate</p>
                        </div> 
                        <p className='year semibold-20'>2024</p>
                    </div>

                    <img  src="https://i.ibb.co/XtQKC4Y/Homeroom-cover.png"  alt="homeroom-cover"  className="image"/>
                        

                    <div className='role-team'>
                        <div className='Roles gap'>
                            <p className="medium-16">My Roles</p>
                            <p className="medium-16 grey">UX Design</p>
                        </div>
                        <div className='Teams gap'>
                            <p className="medium-16">Owner</p>
                            <div className='inner-team gap'>
                                <p className="medium-16 grey">Badamosi Abdullahi</p>
                            </div>
                        </div>
                        <div className='Duration gap'>
                            <p className="medium-16">Durations</p>
                            <p className="medium-16 grey">2 days</p>
                        </div>
                    </div>
                </div>

                <div className="content-02"> 
                    <div className="Overview">
                        <div className='title-container'>
                            <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                            <p className="medium-16 lighter-grey "> OVERVIEW</p>
                        </div>
                            <p className="medium-16 grey text-wrap">A focus on improving the Homeroom UX and delivering a visually appealing interface. My analysis of their app highlighted its functionality, but I believe it could be more engaging. Given the growing population of older homeowners and the trend towards single-person households, my design aims to create a modern and inclusive experience for all users.</p>
                    </div>
                </div>

                <div className="content-03"> 
                    <div className="Overview">
                        <div className='title-container'>
                            <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                            <p className="medium-16 lighter-grey "> UI SCREENS</p>
                        </div>
                        <div className='sub'>
                            <p className='semibold-18 black'>Onboarding Screens</p>
                            <p className="medium-16 grey text-wrap">An engaging onboarding screen is crucial for introducing new users to an app. To enhance the user experience, I focused on creating a visually appealing and welcoming design. This helps users feel comfortable with the app and quickly understand its purpose</p>
                        </div>
                        <img  src="https://i.ibb.co/RYjbMQT/homeroom-one.png" alt="homeroom-four"   className="image"/>
                        <img  src="https://i.ibb.co/dWSBxhH/homeroom-two.png" alt="homeroom-two"  className="image"/>
                        <img  src="https://i.ibb.co/dtGqqmh/homeroom-three.png" alt="homeroom-three"  className="image"/>
                        
                    </div>
                </div>

                <div className="content-03"> 
                    <div className="Overview">
                        <div className='sub'>
                            <p className='semibold-18 black'>Core Screens</p>
                            <p className="medium-16 grey text-wrap">An engaging onboarding screen is crucial for introducing new users to an app. To enhance the user experience, I focused on creating a visually appealing and welcoming design. This helps users feel comfortable with the app and quickly understand its purpose</p>
                        </div>
                        <img  src="https://i.ibb.co/FWx2nzz/homeroom-four.png" alt="homeroom-four"  className="image"/>
                        <img  src="https://i.ibb.co/4sRFDVC/homeroom-five.png" alt="homeroom-five" className="image"/>
                        <img   src="https://i.ibb.co/kKQ4bhc/homeroom-six.png" alt="homeroom-six"  className="image"/>
                    </div>
                </div>
                <div className="Overview">
                    <div className='title-container'>
                        <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                        <p className="medium-16 lighter-grey"> THE END</p>
                    </div>
                    <div className='sub'>
                        <p className='semibold-18 black'>Simple, but effective</p>
                        <p className="medium-16 grey text-wrap">Redesigned with simplicity in mind, but still effective—striking a balance that appeals to both young and older users.</p>
                    </div>
                </div>


            </div>
            <div className='next-project'>
                <div className='next-container'>
                    <p className='semibold-18'>RELATED PROJECTS</p>
                    <p className='medium-16 grey'>GO TO NEXT</p>
                </div>
                <div  className="img-container" onClick={() => {
                    window.location.href = "/law-passport"
                }} >
                    <img  src="https://i.ibb.co/xXvY9j5/Law.png" alt="UX" className="image border-radius"/>
                    <div className="project-info">
                        <div className="title-info">
                            <h2 className="title semibold-18">Law Passport</h2>
                            <p className="intro medium-14 grey">Legal access for Family & business - ‘23</p>
                        </div>
                        <div className="button-info">
                            <button className="button general-button pointer view-button medium-14">View</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>




            </div>
        </div>
    )
}

export default Homeroom;