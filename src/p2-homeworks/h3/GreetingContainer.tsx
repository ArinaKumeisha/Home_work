import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void

}


// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {users, addUserCallback}
) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
        } else {
            setError(true)
            setName("")

        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`hello ${name}`)
        setName("")
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          addUser()
            setName("")
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer