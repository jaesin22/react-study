import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('')
    const onClickEnter = () => setMessage('hi hi')
    const onClickLeave = () => setMessage('bye bye')

    return (
        <div>
            <button onClick ={onClickEnter}>입장</button>
            <button onClick ={onClickLeave}>퇴장</button>
            <h1>{message}</h1>

        </div>
    )

}

export default Say