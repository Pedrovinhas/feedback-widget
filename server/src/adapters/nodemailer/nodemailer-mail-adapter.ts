import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d305b8dc2b7a5a",
      pass: "c57f6ba1d26626"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({ 
            from: 'Equipe Feedget <oi@feedget.com',
            to: 'Pedro Henrique Vinhas <pedrov1nhz@gmail.com>',
            subject,
            html: body,
        })
   
    }
}