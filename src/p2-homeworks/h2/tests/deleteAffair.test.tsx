import React from 'react'
import { deleteAffairsHandle} from '../HW2'
import {AffairType} from "../Affairs";

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: 1, name: 'React', priority: 'high', isDone: false},
        {_id: 2, name: 'anime', priority: 'low', isDone: false},
        {_id: 3, name: 'games', priority: 'low', isDone: false},
        {_id: 4, name: 'work', priority: 'high', isDone: false},
        {_id: 5, name: 'html & css', priority:'middle' , isDone: false},
        {_id: 6, name: 'porn', priority: 'low',isDone: false},
    ]
})

test('delete 0', () => {
    const newState = deleteAffairsHandle(initialState, 0)
    expect(newState.length).toBe(6)
})
test('delete 1', () => {
    const newState = deleteAffairsHandle(initialState, 1)
    expect(newState.length).toBe(5)
})
test('delete 3', () => {
    const newState = deleteAffairsHandle(initialState, 3)
    expect(newState.length).toBe(5)
})
test('delete 6', () => {
    const newState = deleteAffairsHandle(initialState, 6)
    expect(newState.length).toBe(5)
})
test('delete 7', () => {
    const newState = deleteAffairsHandle(initialState, 7)
    expect(newState.length).toBe(6)
})
