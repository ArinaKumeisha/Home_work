import axios from "axios";


export const requestApi = {
    createPost(success: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}