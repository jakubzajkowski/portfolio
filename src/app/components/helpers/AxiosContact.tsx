import axios from "axios";
import React from "react";

interface AxiosContactProps{
    name:string
    message:string
    email:string
    setServerMessage: React.Dispatch<React.SetStateAction<string>>
}
interface AxiosDataType{
    name:string
    message:string
    email:string
}
interface ContactData extends AxiosContactProps{}

export default function AxiosContact({name,email,message,setServerMessage}:AxiosContactProps):void {
    const data:AxiosDataType={
        name: name,
        message: message,
        email: email
    }
    axios.post('/api/contact',data).then(({data})=>{
        if (data.error){
            setServerMessage('something went wrong')
        }
        else{
            setServerMessage('e-mail arrived successfully')
        }
    }).catch(err=>console.log(err))
}   