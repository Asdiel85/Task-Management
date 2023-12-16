import { loggedInUser } from "./types"

export function  getToken (): string {
    return 'Bearer '  + localStorage.getItem('token')
}

export function getLoggedUser(): loggedInUser {
    return JSON.parse(localStorage.getItem('user') || '{}')
}