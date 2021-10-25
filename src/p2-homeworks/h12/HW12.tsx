import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {
    const themes = ['black', 'red', 'dark', 'orange', 'defaultValue', 'green']
    const theme = useSelector<AppStoreType, string>((state) => state.theme.themeColor)
    const dispatch = useDispatch()
    const onChangeThemeHandler = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[themes + '-text']}>
                homeworks 12
            </span>
            <div className={s[themes + '-text']}>

                <SuperRadio
                    value={theme}
                    onChangeOption={onChangeThemeHandler}
                    options={themes}
                    name={'radio'}
                />
            </div>
            <hr/>

        </div>
    );
}

export default HW12;
