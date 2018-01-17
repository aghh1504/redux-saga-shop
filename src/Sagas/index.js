import { put, takeLatest, all, call } from 'redux-saga/effects'
import {get, post, deleteItem} from './api'
import * as types from '../Actions/types'
import {BASE_URL} from '../config'

export function* fetchMenu(action) {
   try {
      const menu = yield call(get, `${BASE_URL}online/takeaway`)
      yield put({type: types.FETCH_MENU_SUCCESS, data: menu});
   } catch (e) {
      yield put({type: types.FETCH_MENU_ERROR, data: e.error});
   }
}

export function* addOrder(action) {
   try {
      const orders = yield call(post, `${BASE_URL}online/takeaway/addItem`, action.payload)
      yield put({type: types.ADD_ORDER_SUCCESS, data: orders});
   } catch (e) {
      yield put({type: types.ADD_ORDER_ERROR, message: e.error});
   }
}

export function* checkoutOrder(action) {
   try {
      const checkout = yield call(post, `${BASE_URL}online/takeaway/checkoutItem`, action.payload)
      yield put({type: types.CHECKOUT_ORDER_SUCCESS, data: checkout});
   } catch (e) {
      yield put({type: types.CHECKOUT_ORDER_ERROR, message: e.error});
   }
}

export function* deleteOrder(action) {
   try {
      const deleteOrder = yield call(deleteItem, `${BASE_URL}deleteItem`, action.payload)
      yield put({type: types.DELETE_ORDER_SUCCESS, data: deleteOrder});
   } catch (e) {
      yield put({type: types.DELETE_ORDER_ERROR, message: e.error});
   }
}

export function* watchIncrementAsync() {
  yield takeLatest(types.FETCH_MENU_REQUEST, fetchMenu)
  yield takeLatest(types.ADD_ORDER_REQUEST, addOrder)
  yield takeLatest(types.CHECKOUT_ORDER_REQUEST, checkoutOrder)
  yield takeLatest(types.DELETE_ORDER_REQUEST, deleteOrder)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}
