import React from 'react'
import Title from '../../Atoms/Title'
import { Container, Row, Col, Card } from 'react-bootstrap'

import "../../../styles/Card.css"
import CardItem from '../../Atoms/Card'

export default function Services() {
    return (
        <div id='Service'>
            <Title title={"Services"} />
            <div>
                <Container>
                    <Row style={{ justifyContent: 'center' }}>
                        <Col lg={5} sm={8} md={12}>
                            <CardItem title={"Graphic Designer"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur"} starting={400} />
                        </Col>
                        <Col lg={5} sm={8} md={12}>
                            <CardItem title={"UI/UX Designer"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur"} starting={300} />
                        </Col>
                        <Col lg={5} sm={8} md={12}>
                            <CardItem title={"Graphic Designer"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur"} starting={400} />
                        </Col>
                        <Col lg={5} sm={8} md={12}>
                            <CardItem title={"Frontend Designer"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur"} starting={500} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
