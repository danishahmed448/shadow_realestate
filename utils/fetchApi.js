import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '4831d022d0msh488af5f028b3fb2p1bf25ajsna02a0e079d3c'
        }
    })
    return data;
}
