import {  createContext,useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ConsultationContext=createContext();

const ConsultationProvider=({children})=>{
    const [consultations,setConsultation]=useState([]);
    const addConsultation=(name)=>{
        setConsultation([...consultations,{name}]);
    }
    return (
        <ConsultationContext.Provider value={{consultations,addConsultation}}>
            {children}
        </ConsultationContext.Provider>
    )
}
export default ConsultationProvider