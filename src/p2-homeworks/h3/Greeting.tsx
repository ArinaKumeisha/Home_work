import React, {ChangeEvent, KeyboardEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    setError(value: boolean): void

}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter, setError} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input
    const errorMessage = error ?
        <div style={{color: "red"}}>
            Name is required!!!
        </div> : null

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onKeyPress={onEnter}
                    onClick={() => setError(false)}

                />
                {errorMessage}
            </div>
            <div>
                <button
                    onClick={addUser}
                    className={s.button}
                    disabled={!name}>add
                </button>
                <span>{totalUsers}</span>

            </div>
        </div>
    )
}

export default Greeting
