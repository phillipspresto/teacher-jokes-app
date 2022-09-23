import axios from 'axios';


export default {

    getJoke() {
        return axios.get("https://icanhazdadjoke.com", { 'headers': { 'Accept': 'application/json'}})
    }

}