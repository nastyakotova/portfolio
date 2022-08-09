// import styles from './App.module.scss';
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import store from "../../store";
import Main from "../Main/Main";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/portfolio" element={<Main />}>
            <Route index element={<About />} />
            <Route path="/portfolio/work" element={<Portfolio />} />
            <Route path="*" element={<About />} />
          </Route>
        </Routes>
    </Provider>
  );
}
