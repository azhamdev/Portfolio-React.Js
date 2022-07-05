import React from "react";
import Title from "../../Atoms/Title";
import WorkItem from "../../Atoms/WorkItem";
import { Row, Col, Container } from "react-bootstrap";
import Gap from "../../Atoms/Gap";

// css
import "../../../styles/Work.css";

// images
import Image1 from "../../../../src/assets/images/Image1.png";
import Image2 from "../../../../src/assets/images/Image2.png";
import Image3 from "../../../../src/assets/images/Image3.png";
import Image4 from "../../../../src/assets/images/Image4.png";
import Image5 from "../../../../src/assets/images/Image5.png";
import Image6 from "../../../../src/assets/images/Image6.png";


export default function Work() {
    return (
        <div>
            <Gap height={150} />
            <div>
                <Title title={"Work"} />
            </div>
            <Gap height={20} />
            <div>
                <Container fluid>
                    <Row>
                        <Col lg={6} xs={12}>
                            <WorkItem image={Image1} />
                        </Col>
                        <Col lg={6} xs={12}>
                            <WorkItem image={Image2} />
                        </Col>
                        <Col lg={6} xs={12}>
                            <WorkItem image={Image3} />
                        </Col>
                        <Col lg={6} xs={12}>
                            <WorkItem image={Image4} />
                        </Col>
                        <Col lg={6} xs={12}>
                            <WorkItem image={Image5} />
                        </Col>
                        <Col lg={6} xs={12}>
                            <WorkItem image={Image6} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
