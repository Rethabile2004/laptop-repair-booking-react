import {  createContext,useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ConsultationContext=createContext();

const ConsultationProvider=({children})=>{
    const [consultations,setConsultation]=useState([]);
    // const dateCreated=new Date();
    const addConsultation=(fullName,email,phoneNumber,consReason,deviceType,condition,additionalInfor)=>{
        setConsultation([...consultations,{fullName,email,phoneNumber,consReason,deviceType,condition,additionalInfor,/*dateCreated*/}]);
    }
    return (
        <ConsultationContext.Provider value={{consultations,addConsultation}}>
            {children}
        </ConsultationContext.Provider>
    )
}
export default ConsultationProvider