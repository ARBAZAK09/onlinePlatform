import axios from "axios";

const url="http://127.0.0.1:3003/mentors";


export const getMentors = async() =>{
    return await axios.get(url);

}

export const postAPIData = async(data) =>{
    console.warn("post call");
    return await axios.post(url,data);

}

export const deleteDataAPI = async(id) =>{
   return  await axios.delete(`${url}/${id}`);
}