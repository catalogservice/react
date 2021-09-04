import http from "util/axios"

export default async (username: string, password: string) => {
    return await http.post('/user/login', { username, password })
}