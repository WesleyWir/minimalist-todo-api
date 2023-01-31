
import { Send } from "@/data/protocols";
import { badGateway } from "@/presentation/contracts";
import * as nodemailer from "nodemailer";

export class NodeMailerAdapter implements Send {
    constructor(private readonly config: { host: string, port: number, user: string, password: string }) { }

    async send(options: { from: string; to: string; subject: string; html: any; }): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: this.config.host,
            port: this.config.port,
            secure: false,
            auth: {
                user: this.config.user,
                pass: this.config.password
            },
            tls: { rejectUnauthorized: false }
        });

        transporter.sendMail(options, (error, info) => {
            if (error) {
                throw badGateway({
                    message: 'Error in email send.'
                });
            }

            return true;
        })
    }
}