import React, {useState} from 'react'
import {ageAC, checkDown, homeWorkReducer, sortUp} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './bll/HomeWork.module.css'

export type InitialStateType = {
    _id: number
    name: string
    age: number
}
export const initialPeople: InitialStateType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<any>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: InitialStateType) => (
        <div key={p._id} className={s.item}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))


    const sortUpChanged = () => {
        setPeople(homeWorkReducer(initialPeople, sortUp()))
    }

    const sortDownChanged = () => {
        setPeople(homeWorkReducer(initialPeople, checkDown()))
    }
    const checkAgeChanged = () => {
        setPeople(homeWorkReducer(initialPeople, ageAC()))
    }
    return (
        <>
            <hr/>
            homeworks 8
            {/*should work (должно работать)*/}

            {finalPeople}
            <div className={s.buttons}>
                <div><SuperButton onClick={sortUpChanged}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDownChanged}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAgeChanged}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>

        </>
    )
}

export default HW8
