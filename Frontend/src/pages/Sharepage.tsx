import React, { useEffect } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config';

export default function Sharepage() {

    useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/v1/brain/:shareLink`)
    });

    return (
        <div>Sharepage</div>
    )
}
