import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";


export function useContent(){
    const [contents, setContents ] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/contents`,{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        }).then((responsce) => {
            setContents(responsce.data);
        }).catch((error) => {
            console.error("Error fetching contents:", error);
        });
    }

    return {contents,refresh};
};
