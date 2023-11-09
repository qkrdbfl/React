import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={ <Main/> }/> {/* 서버측으로 요청해서 응답 받는 기능 아님 */}
              <Route path="/about" element={ <About/> }/>
              <Route path="/menu" element={ <Menu/> }/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;