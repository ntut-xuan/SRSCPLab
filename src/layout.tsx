import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-screen flex flex-row justify-center">
        <div className="w-[80%] py-16 md:py-32 flex flex-col justify-center gap-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
