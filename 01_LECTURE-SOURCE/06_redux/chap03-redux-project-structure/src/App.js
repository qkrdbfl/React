import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import React from "react";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    {/*<Route path="menu" element={<Menus/>}/>*/}
                    <Route path="menu">
                        <Route index element={<Menus/>}/>
                        <Route path=":id" element={<MenuDetail/>}/>
                    </Route>

                    <Route path="login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
