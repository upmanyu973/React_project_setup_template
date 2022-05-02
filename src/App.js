import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store/Store";
import "./App.css";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
          </Routes>
          <ToastContainer autoClose="1000" limit={3} />
        </BrowserRouter>

        {/* <PersistGate persistor={persistor}></PersistGate> */}
      </Provider>
    </div>
  );
}

export default App;
