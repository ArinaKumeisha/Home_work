import React, {useState} from 'react';
import {requestApi} from "./requestApi";
import s from './HW13.module.css'

const Request = () => {
    const [state, setState] = useState<any>('Enter checkbox and button, if you want to get information')
    const [success, setSuccess] = useState(false)

    const query = (success: boolean) => {
        requestApi.createPost(success)
            .then((response) => {
                setState(`${response.data.errorText}, ${response.data.info}`)
            })

            .catch((error) => {
                console.log({...error});
                setState(`${error.response.data.errorText}, 
                ${error.response.data.info}`)
            })
    }

    return (
        <>
            <div className={s.block}>
                HomeWork13
                <input type="checkbox"
                       value={state}
                       onChange={(e) => setSuccess(e.currentTarget.checked)}
                       className={s.check}
                />
                <button onClick={() => query(success)}>Add</button>

            </div>
            <div style={{fontWeight: "bold"}}>{JSON.stringify(state)}</div>
        </>
    );
}

export default Request;