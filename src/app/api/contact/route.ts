import { NextApiRequest,NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { transporter,mailOptions } from "@/app/config/nodemailer"

interface DataType {
  email: string,
  name: string,
  message:string
}

export async function POST(request:Request) {
  const {email,message,name}:DataType = await request.json()
  console.log(email,message,name)
  try{
    await transporter.sendMail({
      ...mailOptions(email),
      subject:`Email from ${name} ${email}`,
      text:message,
    })
  }catch(err){
    console.log(err)
    return NextResponse.json({error:'Something went wrong'})
  }
    return NextResponse.json({error:null,message:'Success'})
  }