import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSearchMenu} from "../api/MenuAPI";
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";

function  MenuSearchResult(){

    /* 쿼리스트링 형태로 전달 된 값은 useSearchParams hook을 통해 꺼낼수 있다.*/
    // console.log(useSearchParams()); //값 호ㅏ긴
    const [searchParams] = useSearchParams();

    /* 쿼리스트링의 key 값을 get 함수에 전달하여 해당 파라미터 값을 읽어온다*/
    const menuName = searchParams.get('menuName');
    //console.log(menuName); //값 화긴
    const [menuList, setMenuList] = useState(); //여기에 들어감(첨엔 값 언디파운드)

    useEffect(() => { //이거 호출뒤 값 들어감
        setMenuList(getSearchMenu(menuName));
    }, []);

    return(
        <div>ㄹ
            <h1>검색 된 메뉴</h1>
            <div className={boxStyle.MenuBox}>{/*밑에 클래스 이름 쓴거임 MenuItem */}
                {menuList && menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>

        </div>
    );
}

export default MenuSearchResult;