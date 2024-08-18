import React from 'react'

const square = (props) => {
    return (
        <div className='square col border border-4 border-dark m-1 d-flex align-items-center justify-content-center' style={{height:"20vh",width:"20vh"}}
        onClick={props.onClick}>
            <h1 className='p-5 text-center' style={{fontSize:"100px"}}>{props.value}</h1>
        </div>
    )
}

export default square
