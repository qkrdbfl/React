import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callGetMenuAPI, callGetMenuListAPI} from "../../api/MenuAPICalls";

function Menu({id}){ //메뉴디테일에 있는 id를 {id} 프롭스 받음

    const dispatch = useDispatch();
    const {menu} = useSelector(state => state.menuReducer);//menuReducer 공간에 menu값이 있는데 이 menu라는 값을 존재할떈 화면에 랜더링 되도록 함

    useEffect(() => {
        //Menu 1개의 정보 호출하는 API 함수를 action으로 전달
        dispatch(callGetMenuAPI(id));
    }, []);

    return(
        <>
            {menu &&
            <>
                <h3>메뉴 이름 : {menu.menuName}</h3>
                <h3>메뉴 가격 : {menu.menuprice}</h3>
                <h3>메뉴 종류 : {menu.categoryName}</h3>
                <h3>메뉴 상세 : {menu.detail.description}</h3>
                <img src={menu.detail.image} style={{maxWidth:500}} alt={menu.menuName}/>
            </>
            }
        </>
    );
}
export default Menu;