import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card } from 'react-bootstrap';
// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import Cart from '../../components/Cart/Cart.index';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary.index';
import H3 from 'components/H3/H3.index';
import CartReducer from './cartPage.reducer';
import CartSaga from './cartPage.saga';
import { LoadCart } from './cartPage.actions';
import Loader from '../../images/loader.svg';
import LoadingIndicator from '../../components/LoadingIndicator';

export function CartPage(props) {
  useInjectReducer({key: 'cart', reducer: CartReducer});
  useInjectSaga({ key: 'cart', saga: CartSaga });
  // console.log("props ::: ",props);
  // console.log("props.");
  // props.LoadCart();
  // console.log(props.dispatch(LoadCart()))
  useEffect(() => {
    props.LoadCart();
  },[])

  const isLoading = props.loading;

  console.log(isLoading)
  let view;
  if(isLoading) {
    // view = <LoadingIndicator></LoadingIndicator>
    view  = <div className="text-center">
      <img src={Loader}></img>
    </div>
  } else {
    view = <Container fluid className="mb-4 mt-4">
    <Row>
      <Col md="9">
        <H3>
          Shopping Cart
        </H3>
        <hr></hr>
      </Col>
    </Row>
    <Row>
      <Col md="9" >
        <Cart cart={props.cart}></Cart>
      </Col>
      <Col md="3">
        
        <CheckoutSummary ></CheckoutSummary>
      </Col>
    </Row>
  </Container>
  }
  
  return (
    <div>
      <Helmet>
        <title>Cart Page</title>
        <meta
          name="description"
          content="Cart page with Bootstrap Application"
        />
      </Helmet>
      
      {view}
    </div>
  );
}


function mapStateToProps(state) {
  console.log("mapStateToProps ::: ",state);
  return {
    cart: state.cart ? state.cart.cart : [],
    loading: state.cart ? state.cart.loading : false,
    error: state.cart ? state.cart.error : null
  }
}


const mapDispatchToProps = {
  LoadCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)