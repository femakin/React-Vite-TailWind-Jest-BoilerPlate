import React, { useContext, createContext, useState } from "react";

const RegistrationContext = createContext();

const RegistrationProvider = ({ children }) => {
    const [formData, setFormData] = useState({

    })

    const updateFormData = (step, newData) => {
        setFormData((prevData) => ({
            ...prevData,
            [step]: {
                ...prevData[step],
                ...newData
            }
        }));
    }

    const clearData = ()=>{
        setFormData({})
    }

    return (
        <RegistrationContext.Provider
            value={{ formData, updateFormData, clearData }}
        >
            {children}
        </RegistrationContext.Provider>
    )
}
export default RegistrationProvider;

export const useRegistrationContext = () => useContext(RegistrationContext)


