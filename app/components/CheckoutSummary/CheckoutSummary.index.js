import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import H4 from '../H4/H4.index';
import Wrapper from './CheckoutSummary.wrapper';

export default function CheckoutSummary() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <H4 className="font-weight-bold mt-1">Subtotal (3 Items): SR 175</H4>
          </Col>
        </Row>

        <div className="mt-4">
          <div>
            <span>TERMS &amp; CONDITIONS</span>
            <div className="mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quis velit dicta eaque, porro veniam architecto dolor nemo tempora, similique ab? Quae voluptatem temporibus amet consequuntur ipsum nulla magnam ullam?
            </div>
            <div>
              <Button variant="primary" block>Procced to Buy</Button>              
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}