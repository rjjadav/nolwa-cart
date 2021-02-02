
import { delay, put, takeLatest, call } from 'redux-saga/effects'
import { LOAD_CART } from './cartPage.constants';
import { LoadCartSuccess } from './cartPage.actions';
import request from '../../utils/request';

export function* loadCart() {
  try { 
    const requestUrl = "https://jsonplaceholder.typicode.com/posts";
    // yield delay(3000)
    const cart = yield call(request, requestUrl);
    yield put(LoadCartSuccess(cart))
  } catch(e) {
    console.log("unexpected error :: ",e);
  }
}


export default function* cartData() {
  yield takeLatest(LOAD_CART, loadCart)
}