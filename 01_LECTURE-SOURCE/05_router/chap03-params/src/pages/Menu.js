import {useEffect, useState} from "react";
import {getMenuList} from "../api/MenuAPI";
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";
import {useNavigate} from "react-router-dom"; //직접 입력함

/* 일반 CSS 파일을 이용하면 class name conflict로 인해 디자인이 변경되는 일이 있다.
*  module.css 파일은 class명에 랜덤한 문자를 붙여서 이름을 지어주어 class name confilct를 방지한다 */
function Menu() {

    const [menuList, setMenuList] = useState();
    const [searchValue, setSearchValue] = useState('');

    /* react router dom의 useNavigate hook을 호출하면 하나의 함수가 반환 된다.
    * 해당 함수에 router로 요청하는 주소를 전달하면서 호출하면 url이 변경된다. */
    const navigate = useNavigate();

    useEffect(() => {
        /* MenuAPI.js 파일을 만들어서 API 호출 함수를 모아둔다*/
        setMenuList(getMenuList());
    }, []);

    //검색 (url파라미터 전달 됐는지 확인)
    const onClickHandler = () => navigate(`/menu/search?menuName=${searchValue}`); //여기로 이동

    return (
        <div>
            <h1>메뉴 목록</h1>

            <div>
                <input
                    type="search"
                    name="menuName"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button
                    onClick={onClickHandler}
                >
                    검색
                </button>
            </div>

            <div className={boxStyle.MenuBox}>
                {menuList && menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </div>
    );
}

export default Menu;
