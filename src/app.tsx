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
import Project from "./project";
import Publication from "./publication";
import Member from "./member";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Professor" element={<Professor />} />
      <Route path="/Member" element={<Member />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Publication" element={<Publication />} />
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
