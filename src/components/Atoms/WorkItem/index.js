import React from 'react'
import "../../../styles/Work.css"

export default function WorkItem({ image }) {
    return (
        <div className='ImageItem'>
            <img src={image} className="ImageItem" />
        </div>
    )
}
