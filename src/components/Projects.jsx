// import './project.css'
// import { useState } from 'react';

// const Project = () => {
    
//     const [isStateActive, setActive] = useState("UX Study")

//     const handleState = (state) => {
//         setActive(state)
//     }

//     return (
//         <div className="projects">
//             <div className="project-tag semibold-18">
//                 SELECTED PROJECTS
//             </div>
//             <div className="works">
                
//                 <p 
//                 className={`state pointer medium-16 ${isStateActive === 'UX Study' ? 'active-state' : '' }`} 
//                 onClick={() => handleState("UX Study")}> 
//                 UX Study </p>

//                 <p 
//                 className={`state pointer medium-16 ${isStateActive === "UI Study" ? 'active-state' : "" }`}
//                 onClick={() => handleState("UI Study")}
//                 >
//                 UI Design</p>

//                 <p className={`state pointer medium-16 ${isStateActive === "Frontend Project" ? 'active-state' : ""}`}
//                 onClick={() => handleState("Frontend Project")}
//                 >Frontend Project</p>

//             </div>
//         </div>
//     )
// }

// export default Project;