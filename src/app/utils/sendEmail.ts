import nodemailer from 'nodemailer';
import config from '../config';
export const sendEmail = async(email: string, resetUILink: string)=>{

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: config.NODE_ENV === 'production', // true for port 465, false for other ports
        auth: {
          user: "shahinafridi012@gmail.com",
          pass: "rvmp fhpl dtvu zlwc",
        },
      });
       await transporter.sendMail({
        from: 'shahinafridi012@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: "Hello ✔ Change Your password", // Subject line
        text: "", // plain text body
        html: `${resetUILink}`, // html body
      });
}