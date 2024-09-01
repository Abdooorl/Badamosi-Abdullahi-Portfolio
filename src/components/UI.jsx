import './UX.css'

const UI = ({data}) => {
    return (
        <div className="UI UX">
             {
                data.map((item, idx) => (

            <div key={idx} className={item.container}>
                <img  src={item.src} alt="UI-images" className={item.class}/>
            </div>
        ))}
        </div>
                
    )
}

export default UI;