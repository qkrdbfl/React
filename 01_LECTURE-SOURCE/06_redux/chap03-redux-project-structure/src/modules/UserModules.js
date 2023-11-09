// 초기값
import {createAction, createActions, handleActions} from "redux-actions";

const initialState = {};

//액션 타입
const LOGIN = 'user/LOGIN';

//액션 함수
export const {user: {login}} = createActions({ //createActions 를 createAction로 써서 로그인 낫파운드 오류 났었음
    [LOGIN]: (res) => ({res}) //넘겨준 값을 paylode에 담는다
});

//리듀서 함수
const userReducer = handleActions({
    [LOGIN] : (state, {payload : {res}}) => {

        /* res 값이 있을 경우 id, password 일치로 user 객체가 반환 된 상황이므로
        *  localStorage에 로그인 상태를 저장한다. */
        if (res) {
            localStorage.setItem('isLogin', true);
        }else { //에러 메세지로 저장
            res = {message : 'LOGIN_FAIL'} //실패하면 이 값이 저장 됨
        }
        return res; // 성공하면 이 반환 값 자체가 저장
    }
}, initialState);

export default userReducer;