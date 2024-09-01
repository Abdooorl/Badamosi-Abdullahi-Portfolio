import Navigations from '../components/Navigation';
import Footer from '../components/Footer';
import '../components/lawpassport.css';
import VideoPlayer from '../components/Videoplayer';

const Ryder = () => {
    return (
        <div className='Ryder'>
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
                                <h2 className="semibold-24 title" >Ryder</h2>
                                <p className="medium-16 sub-title ">Augmented Reality for Car Rental</p>
                            </div> 
                            <p className='year semibold-20'>2024</p>
                        </div>

                        <img  src="https://i.ibb.co/6g4V9NR/Ryder-cover.png" alt="Ryder-cover"  className="image"/>
                        

                        <div className='role-team'>
                            <div className='Roles gap'>
                                <p className="medium-16">My Roles</p>
                                <p className="medium-16">UX Design - <span className='grey'>User flow, Visual design</span></p>
                            </div>
                            <div className='Teams gap'>
                                <p className="medium-16">Owner</p>
                                <div className='inner-team gap'>
                                    <p className="medium-16 grey">Badamosi Abdullahi</p>
                                </div>
                                </div>
                                <div className='Duration gap'>
                                    <p className="medium-16">Durations</p>
                                    <p className="medium-16 grey">1 months</p>
                                </div>
                            </div>
                        </div>
                    

                    <div className="content-02">
                        
                        <div className="Overview">
                            <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className="medium-16 lighter-grey "> OVERVIEW</p>
                            </div>
                            <p className="medium-16 grey text-wrap">With the emergence of Augmented and Virtual Reality, it's essential to incorporate these technologies into more aspects of our daily lives.<br></br>
                            Ryder app leverages augmented reality in its car rental service, streamlining the process of picking up and returning vehicles. Paired with the widely used Google Maps, this approach opens up a world of new possibilities.</p>
                        </div>
                        <div className="Overview">
                            <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className=" medium-16 lighter-grey"> PROBLEM</p>
                            </div>
                            <p className="medium-16 grey text-wrap">The primary challenge I faced was optimizing the dynamics of augmented reality to effectively assist users in locating their rides..</p>
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
                                <p className="medium-16 ">WEEK 2-3</p>
                                <p className="medium-16 grey">VISUAL DESIGN & PROTOTYPING</p>
                            </div>
                            <div className='weeks'>
                                <p className="medium-16 ">WEEK 4</p>
                                <p className="medium-16 grey">TEST & ITERATIONS</p>
                            </div>
                        </div>
                    

                    <div className="Overview">
                        <div className='title-container'>
                                <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                <p className="medium--16 lighter-grey"> CORE FLOW</p>
                        </div>
                        <div className='sub'>
                            <p className='semibold-18 black'>Locating Ride</p>
                            <p className="medium-16 grey text-wrap">I designed a straightforward flow to ensure a smooth process. The user must be able to track the car for an easier pickup experience.</p>
                        </div>
                        </div>
                        <img  src="https://i.ibb.co/D9P0R71/Ryder-one.png" alt="law-zero" className="image"/>

                        <div className='three-keys'>
                        <img  src="https://i.ibb.co/zb4qwpd/Ryder-two.png" alt="law-zero" className="image"/>
                        <img  src="https://i.ibb.co/K5nv3hk/Ryder-three.png" alt="law-zero" className="image"/>

                        <div className='keys-shorts'>
                            <div className='keys'>
                                <p className='medium-14 green'>KEYS</p>
                                <div className='key-info'>
                                    <p className='medium-16'>Provide needed safety info</p>
                                    <p className='medium-16'>Good Tracking experienceq</p>
                                </div>
                            </div>

                        </div>
                    </div>

                 </div>

                 <div className='content-03'>
                        <div className='sub'>
                                <p className='semibold-18 black'>The Real Deal</p>
                                <p className="medium-16 grey text-wrap">I designed options that allow users to choose between using a map or augmented reality to locate their ride. This flexibility accommodates the most suitable preference for each user.<br></br> Detailed map showing all the necessary information and also the best route to the ride <br></br> Big question is now the implementation of the Augmented Reality. <span className='black'>Here it is!</span></p>
                        </div>
                         <img  src="https://i.ibb.co/JpDNg3y/Ryder-four.png" alt="Ryder-four" className="image"/>
                         <img  src="https://i.ibb.co/8xxHYhQ/Ryder-five.png" alt="Ryder-five" className="image"/>
                         <img  src="https://i.ibb.co/1ZY7JJ2/Ryder-six.png" alt="Ryder-six"  className="image"/>
                         <img src="https://i.ibb.co/bddbGz1/Ryder-seven.png" alt="Ryder-seven" className="image"/>
                         <img  src="https://i.ibb.co/jMdvhD3/Ryder-eight.png" alt="Ryder-eight" className="image"/>
                         <img src="https://i.ibb.co/HrGY0zV/Ryder-nine.png" alt="Ryder-nine" className="image"/>
                         <div className='content-05'> 
                        
                    </div>
                    
                    <div className="Overview">
                                <div className='title-container'>
                                    <i class="ph-fill  icon-14 vertical-align ph-circle grey"></i>
                                    <p className="medium-16 lighter-grey"> THE END</p>
                                </div>
                                <div className='sub'>
                                    <p className='semibold-18 black'>Happy to work on this</p>
                                    <p className="medium-16 grey text-wrap">After many iterations, I’ve settled on this design. There's still much to explore in augmented reality, and I'm available to take on related projects. Enjoy the prototype video below!</p>
                                </div>

                                
                        </div>

                        <VideoPlayer />

                        

                    </div>


                    
                
            




                </div>

                <div className='next-project'>
                    <div className='next-container'>
                        <p className='semibold-18'>RELATED PROJECTS</p>
                        <p className='medium-16 grey'>GO TO NEXT</p>
                    </div>
                    <div  className="img-container" onClick={() => {
                    window.location.href = "/homeroom"
                    }} >
                    <img  src="https://i.ibb.co/RBGb3xv/HomeRoom.png" alt="UX" className="image border-radius"/>
                        <div className="project-info">
                            <div className="title-info">
                                <h2 className="title semibold-18">HomeRoom App</h2>
                                <p className="intro medium-14 grey">Reinventing the Real Estate Experience - ‘24</p>
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
    )
}

export default Ryder;