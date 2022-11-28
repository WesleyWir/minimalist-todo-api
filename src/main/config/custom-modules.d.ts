declare module Express {
    interface Request {
        auth_user_id?: string
    }
}