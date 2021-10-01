import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "../../p1-main/image/preloader.gif"

function HW10() {
    // useSelector, useDispatch
    // const loading = false
    const isLoading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
            setTimeout(()=> {
                dispatch(loadingAC(false))
            },4000)
        }

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {isLoading
                ? (<div>
                        <img src={preloader} style={{width: "100px"}}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
