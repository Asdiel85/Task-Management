import { ChangeEventHandler } from "react";

export const EditInputField = (inputName: string, handleChange:ChangeEventHandler<HTMLInputElement>, value: string) => {
    return (
        <input type="text" name={inputName} onChange={handleChange} value={value} />
    )
}