import { BrowserRouter } from "react-router-dom";
import MainDashBoard from "./Pages/MainDashBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainDashBoard />
      </BrowserRouter>
    </>
  );
}

export default App;
