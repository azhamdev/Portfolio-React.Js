import React from 'react'
import "../../../styles/Title.css"

export default function Title({ title }) {
    return (
        <div>
            <h1 className='Title'>
                {title}
            </h1>
        </div>
    )
}
