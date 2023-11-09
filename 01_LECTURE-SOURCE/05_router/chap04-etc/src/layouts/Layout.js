import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Navber from "../components/Navber";

/* Outlet 컴포넌트는 라우틴 되는 컴포넌트를 대체하기 위한 마커의 역할을 한다.
* header, nav 등 공통적인 역할을 수행하는 영역은 layout에 위치를 지정하고
* outlet으로 라우팅 될 컴포넌트를 대체하기 위해 표기해두면 해당 영역만 변경 된다. */
function Layout(){

    return(
        <>
            <Header/>
            <Navber/>
            <Outlet/>
        </>
    );
}

export default Layout;