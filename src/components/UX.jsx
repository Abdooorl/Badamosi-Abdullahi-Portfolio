import './UX.css'

const UX = ({data}) => {
  return (
    <div  className="UX">
      {
      data.map((item, idx) => (

        <div key={idx} className="img-container" onClick={
          () => {
              window.location.href = item.link
          }
      }>
        <img  src={item.src} alt="UX" className="image border-radius"/>
        <div className="project-info">
            <div className="title-info">
                <h2 className="title semibold-18">{item.title}</h2>
                <p className="intro medium-16 grey">{item.description}</p>
            </div>
            <div className="button-info">
                <button className="button general-button pointer view-button medium-14">View</button>
            </div>
        </div>
      </div>
        

      ))}
      
    </div>
  );
}

export default UX;