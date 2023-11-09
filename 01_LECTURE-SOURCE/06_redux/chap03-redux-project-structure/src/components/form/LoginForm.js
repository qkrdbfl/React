import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callLoginAPI} from "../../api/UserAPICalls";
import {useNavigate} from "react-router-dom";

function LoginForm() {

    const isLogin = !!localStorage.getItem('isLogin'); //블리언으로 타입 변환해놓고 사용 하고 싶어서 !!localStorage 앞에 !! 붙여줌

    const dispatch = useDispatch();//함수 받아옴
    const navigate = useNavigate();
    const result = useSelector(state => state.userReducer); //???????

    const [loginInfo, setLoginInfo] = useState({
        id : '',
        password : ''
    });

    useEffect(() => {
        if (isLogin){
            navigate('/')//메인화면으로 보내줌 (선언하고 써야함)
        } else if (result?.message === 'LOGIN_FAIL'){// ?.를 붙이면 비어있는 값은 처리하지 않는다를 나타냄
            alert('아이디와 비밀번호를 확인해주세요.');
            setLoginInfo({
                id : '',
                password : ''
            });

        }
    }, [result]); //userReducer(result)안에 값이 변화했을때 체킹됐으면 좋겠다는 의미

    const onChangeHandler = e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name] : e.target.value
        })
    }

    const onClickHandler = () => { //클릭 했을때 이벤트 dispatch 받아옴.
        dispatch(callLoginAPI(loginInfo));
    }

    return (
        <div>
            <label>ID : </label>
            <input
                type="text"
                name="id"
                onChange={onChangeHandler}
                value={loginInfo.id}
            />
            <label>PASSWORD : </label>
            <input
                type="password"
                name="password"
                onChange={onChangeHandler}
                value={loginInfo.password}
            />
            <button onClick={onClickHandler}>로그인</button>
        </div>
    );
}

export default LoginForm;