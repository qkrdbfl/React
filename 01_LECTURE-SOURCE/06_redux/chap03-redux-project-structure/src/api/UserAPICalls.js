import {request} from "./Api";
import {login} from "../modules/UserModules"; //이거 경로 내가 쓸것으로 받아온건지 잘 확인하기


export function callLoginAPI (loginInfo){

    return async (dispatch, getState) => {

        const userList = await request('GET', '/user');

        /* id, password 일치 여부 확인
        * 서버에서 이루어져야 하는 로직이지만 여기서는 간단하게 확인*/
        const result = await  userList.find( //userList.find - 배열을 돌리면서 찾아본다
            user => user.id === loginInfo.id && user.password === loginInfo.password //조건문
        );
        console.log('login result : ', result);

        dispatch(login(result)); //디스패치 호출 //login이 임포트 경로를 잘못 잡고 있어서 알럿창이 뜨지 않고 낫파운드 오류가 낫었음
    }
}