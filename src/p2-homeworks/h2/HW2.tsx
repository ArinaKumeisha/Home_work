import React, {useState} from 'react'
import Affairs from './Affairs'


export type AffairType = {
    id: number
    name: string
    priority: FilterType
}
export type AffairPriorityType = "high" | "low" | "middle"
export type FilterType = 'all' | AffairPriorityType


function HW2() {
    const defaultAffairs: AffairType[] = ([ // need to fix any
        {id: 1, name: 'work', priority: 'high'},
        {id: 2, name: 'anime', priority: 'low'},
        {id: 3, name: 'games', priority: 'low'},
        {id: 5, name: 'html & css', priority: "middle"},

    ])

    const filterAffairs = (affairs: AffairType[], filter: FilterType): Array<AffairType> => {
        if (filter === "low") {
            return affairs.filter(aff => aff.priority === "low")
        }
        if (filter === "high") {
            return affairs.filter(aff => aff.priority === "high")
        }
        if (filter === "middle") {
            return affairs.filter(aff => aff.priority === "middle")
        }
        return affairs
    }

    const deleteAffair = (affairs: AffairType[], id: number): AffairType[] => {
        return affairs.filter(af => af.id !== id)
    }


    let [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    let [filter, setFilter] = useState<FilterType>('all')


    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairsCallback = (id: number) => setAffairs(deleteAffair(affairs, id))


    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                affairs={filteredAffairs}
                setFilter={setFilter}
                deleteAffairsCallback={deleteAffairsCallback}
                filter={filter}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}


export default HW2;

