import { AUTH, BASE_URL, LOGIN, REGISTER } from "../utils/constants"
import { LoginFormValues, RegisterFormValues } from "../utils/types";

export const login = async (userData: LoginFormValues) => {
    const response: Response = await fetch(`${BASE_URL}${AUTH}/${LOGIN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    
    return response;
}

export const register = async (userData: RegisterFormValues) => {
    const response: Response = await fetch(`${BASE_URL}${AUTH}/${REGISTER}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    return response;
}