import './navigations.css'

const Navigations = () => {
    return (
        <div className="navigations">
            <div className="logo-container pointer" onClick={() => {
                window.location.href = '/home'
            }}>
                
                <img src={require('../media/logo.webp')} className="logo-image" alt="logo-image"/>
                
                <div className="Bio">
                    <p className="name semibold-16">Badamosi Abdullahi</p>
                    <p className="roles medium-14">Designer & Developer</p>
                </div>
            </div>
            <div className="click">
                <ul className="navigation-links">
                    <li className="list-resume">< a href='https://drive.google.com/file/d/1X-DRm3e4-YOHPgkizuLxi-Sil5PE0z0d/view?usp=drive_link' target='_blank' rel="noreferrer" className='link medium-16'> Resume </a></li>
                    <li className="list-resume">< a href='https://www.linkedin.com/in/badamosi-abdullahi-oluwatobi-4300b9232/' className='link medium-16' rel="noreferrer" target='_blank'> LinkedIn </a></li>
                </ul>

                <button className='general-button contact-button pointer medium-14' id='contact-button' onClick={() => {
                    window.location.href = 'https://calendly.com/badamosiabdullahi'
                }}>Contact Me</button>
            </div>
        </div>
    )
}

export default Navigations;