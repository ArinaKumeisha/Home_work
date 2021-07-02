import React from 'react'
import s from "./Affairs.module.css"


import {AffairType, FilterType} from './HW2'
import Affair from "./Affair";


export type AffairsPropsType = {
    affairs: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairsCallback: (id: number) => void
    filter: FilterType
}

export function Affairs(props: AffairsPropsType) {
    const mapAffairs = props.affairs.map((af) => (
        <Affair
            key={af.id}
            affair={af}
            deleteAffairCallback={props.deleteAffairsCallback}/>
    ))

    const onClickAll = () => props.setFilter("all")
    const onClickHigh = () => props.setFilter("high")
    const onClickMiddle = () => props.setFilter("middle")
    const onClickLow = () => props.setFilter("low")


    return <div>
        {mapAffairs}

        <div className={s.doing}>
            <button onClick={onClickAll} className={s.allBut}>All</button>
            <button onClick={onClickHigh} className={s.highBut}>High</button>
            <button onClick={onClickMiddle} className={s.middleBut}>Middle</button>
            <button onClick={onClickLow} className={s.lowBut}>Low</button>
        </div>
    </div>

}


export default Affairs;
