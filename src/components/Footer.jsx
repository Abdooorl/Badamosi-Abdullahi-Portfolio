import './footer.css'

const Footer = ()  => {

  
    return (
        <div className="footer">
            <div className="footer-top">
                <img src={require('../media/logo.webp')} className="logo-image" alt="logo-image"/>
                    <ul className="footer-links">
                        <li className="list-resume">< a href='https://drive.google.com/file/d/1X-DRm3e4-YOHPgkizuLxi-Sil5PE0z0d/view?usp=drive_link' target='_blank' rel="noreferrer" className='link medium-16'> Resume </a></li>
                        <li className="list-resume">< a href='https://www.linkedin.com/in/badamosi-abdullahi-oluwatobi-4300b9232/' target='_blank' rel="noreferrer" className='link medium-16'> LinkedIn </a></li>
                        <li className="list-resume">< a href='https://github.com/Abdooorl' target='_blank' rel="noreferrer" className='link medium-16'> Github </a></li>
                    </ul>
            </div>
                    <div className="footer-bottom">
                        <p className="copyright medium-16">© 2024 Badamosi Abdullahi. </p>
                        <p className="right medium-16 grey">All Rights Reserved.</p>
                    </div>
        </div>
    )
}

export default Footer