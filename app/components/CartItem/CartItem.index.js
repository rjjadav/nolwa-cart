import React from 'react';
import { Card, Row, Col } from "react-bootstrap";
import H4 from '../H4/H4.index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default function CartItem(props) {
  console.log(props);
  const cartItemName = props.cartData.title;
  const cartProductDescription = props.cartData.body;
  return (
    <Card className="card overflow-hidden mb-4">
      <Row>
        <Col md="4">
          <Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177477b65fd%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177477b65fd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.2421875%22%20y%3D%2297.5%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
          </Card.Img>
        </Col>
        <Col md="8">
          <Card.Body>
            <Row>
              <Col md="10">
                <H4 className="font-weight-bold mt-1">
                  {cartItemName}
                        </H4>
              </Col>
              <Col md="2" className="text-right">
                <b>SR 10</b>
              </Col>
            </Row>

            <Row>
              <Col className="mr-4 icons text-success">
                In Stock
                      </Col>
            </Row>

            <Row>
              <Col>
                {cartProductDescription}
                      </Col>
            </Row>

            <Row className="mt-3">
              <Col md="3">
                <select className="form-control" data-placeholder="Select">
                  <optgroup label="Quantity">
                    <option>Qty : 1</option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                    <option value="1">8</option>
                    <option value="1">9</option>
                    <option value="1">10</option>
                  </optgroup>
                </select>
              </Col>
              <Col md="9">
                <a href="#" className="btn btn-outline-secondary text-info mr-1">Delete</a>
                <a href="#" className="btn btn-outline-secondary text-info mr-1">Move to wish list</a>
                <a href="#" className="btn btn-outline-secondary text-info mr-1">See more like this</a>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <a href="#" className="mr-4"><span>by Robert McLean </span></a>
                <a href="#" className="mr-4 cart-item"><span>
                  <FontAwesomeIcon icon={faMapMarker} className="text-muted mr-1"></FontAwesomeIcon>&nbsp;
                  Riyadh, KSA
                          </span>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}