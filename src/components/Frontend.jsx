import './UX.css'

const Frontend = ({data}) => {

    return (
        <div  className="UX">
      {
      data.map((item, idx) => (

        <div key={idx} className="img-container " 
      >
        <img  src={item.src} alt="UX" className="image border-radius"/>
        <div className="project-info">
            <div className="title-info">
                <h2 className="title semibold-18">{item.title}</h2>
                <p className="intro medium-14 grey">{item.description}</p>
            </div>
            <div className="button-info">
                <button className="button secondary-button pointer view-button medium-14"> <i class="ph-fill display icon-18 vertical-align ph-github-logo" onClick={() => {
                    window.location.href = item.github
                }} ></i>Github</button>
                <button className="button general-button pointer view-button medium-14" onClick={() => {
                    window.location.href = item.live
                }} >Live</button>
            </div>
        </div>
      </div>
        
        ))}
        </div>
    )
}

export default Frontend;