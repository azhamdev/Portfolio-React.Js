import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../../Atoms/Navbar'
import '../../../styles/Header.css'
import HeroComponent from '../../Atoms/Hero'

export default function HeaderSection() {
    return (
        <div className='Header'>
            <Container>
                <NavbarComponent />
                <HeroComponent />
            </Container>
        </div>
    )
}
