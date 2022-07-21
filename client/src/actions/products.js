import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from './types';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get('/bags');
    console.log(res)
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    //   dispatch({
    //     type: REGISTER_FAIL
    //   });
  }
};
export const getProductById = (product_id) => async (dispatch) => {
  console.log('product_id :>> ', product_id);
  try {
    const res = await api.get(`/bags/${product_id}`)
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: res.data
    })
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'))
  }
}