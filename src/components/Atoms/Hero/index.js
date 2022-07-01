import React from 'react'
import "../../../styles/Hero.css"
import Gap from '../Gap'

export default function HeroComponent() {
    return (
        <>
            <div className='Container'>
                <div className='Headline'>
                    <h1>
                        Creative <br />
                        Innovative <br />
                        Design Agency
                    </h1>
                </div>
                <Gap height={"8vh"} />
                <div className='SubHeadline'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </>
    )
}
