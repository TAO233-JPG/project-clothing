import { Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/cheakout/checkout.component";

import {
  // onAuthStateChangedListener,
  // createUserDocumentFromAuth,
  getCurrentUser,
} from "./utils/filebase.util";

// import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((res) => console.log(res));
  });

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
