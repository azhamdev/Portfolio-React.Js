import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'

import "../../../styles/Card.css"

export default function CardItem({ title, text, starting }) {
    return (
        <div>
            <Card className="CardWrapper">
                <Card.Body>
                    <Card.Title>
                        <h1 className="CardTitle">{title}</h1>
                    </Card.Title>
                    <Card.Text>
                        <p className="CardText">
                            {text}
                        </p>
                    </Card.Text>
                    <Card.Link href="#">
                        <p className="CardLink">See Detail</p>
                    </Card.Link>
                </Card.Body>
            </Card>
            <div className="Starting">
                <p style={{ color: "#fff" }} className="startingText">Starting at ${starting}</p>
            </div>
        </div>
    );
}
