import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./modules/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";
import { ChakraProvider } from "@chakra-ui/react";

const App: FC = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
