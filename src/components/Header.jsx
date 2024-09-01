import './header.css'

const Header = () => {

    return (
    <div className="header">
        <div className="text-container">
            <h1 className="header-text h1-bold">Crafting Digital Experiences From Concept to <span className='gloock-regular'>Product</span></h1>
            <p className="sub-text medium-18">I'm passionate about crafting and building beautiful products that are usable and solve people’s problems</p>
        </div>
        <button className='general-button pointer talk-button medium-16' id="talk" onClick={() => {
                    window.location.href = 'mailto:badamosiabdullahi@gmail.com'
                }}>Let us talk</button>
    
    </div>
    )
}

export default Header;