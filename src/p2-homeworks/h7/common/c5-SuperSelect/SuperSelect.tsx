import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return <option className={s.option} key={o+'-'+i}
                       value={o}>{o}</option>
    }) : []

    return (
        <select className={s.select}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>)
}

export default SuperSelect;
