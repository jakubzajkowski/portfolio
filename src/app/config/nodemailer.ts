import nodemailer from 'nodemailer'


export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS
    }
})

export const mailOptions=(from:string)=>{
    return {
        from : from,
        to: process.env.EMAIL
    }

}