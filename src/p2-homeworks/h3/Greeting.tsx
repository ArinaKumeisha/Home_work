import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=> void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void

}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error? s.errorInput: s.input

    return (
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onEnter}
            />
            <div className={s.error}>{error}</div>
            <span>{error}</span>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
