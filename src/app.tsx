import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./output.css";
import Home from "./home";
import React from "react";
import Professor from "./professor";
import Layout from "./layout";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Professor" element={<Professor />} />
    </Route>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
