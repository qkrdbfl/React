/* 초기 값 */
import {createActions, handleActions} from "redux-actions";

const initialState = {};

/* 액션 타입 */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU';

/* 액션 함수 */
export const {menu: {getMenulist, getMenu}} = createActions({ //getMenu 라고 변수명 지어주고 API.js에서 호출할거임
    [GET_MENULIST]: (result) => ({menulist: result}),
    [GET_MENU] : (result) => ({menu:result})
});

/* 리듀서 함수   -> 전달된 action을 store에 어떻게 저장할 것인지?*/
const menuReducer = handleActions({
    [GET_MENULIST]: (state, {payload}) => payload, //반환값(payload)이 store에 저장
    [GET_MENU] : (state, {payload}) => payload
}, initialState);

export default menuReducer;