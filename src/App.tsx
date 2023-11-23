import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./modules/Layout/Layout";
import { Home } from "./pages/Home/Home";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
