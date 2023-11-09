import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callGetMenuListAPI} from "../../api/MenuAPICalls";
import MenuItem from "../item/MenuItem";

function MenuList() {

    const dispatch = useDispatch();
    const {menulist} = useSelector(state => state.menuReducer);

    useEffect(() => {
        // menuList 호출 API 로직을 담은 함수를 전달한다.
        dispatch(callGetMenuListAPI());
    }, []);

    return (
        <div className="menuBox">
            {menulist && menulist.map(menu => <MenuItem key={menu.id} menu={menu}/>)}
        </div>
    );
}

export default MenuList;