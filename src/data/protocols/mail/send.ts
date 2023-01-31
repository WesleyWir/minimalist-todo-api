export interface Send {
    send: (
        options: {
            from: string,
            to: string,
            subject: string,
            html: any
        }
    ) => Promise<void>
}