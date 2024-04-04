import { Outlet } from "react-router-dom";
import SearchInput from "../Inputs/SearchInput";
import Footer from "./Footer";
import Header from "./Header";
import { SideBar } from "./SideBar";
import { useContext } from "react";
import { AppContext } from "../context/store";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout : React.FC<ILayoutProps>  = () : JSX.Element =>{

    // const user = useContext(AppContext);
     
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )

}

export default Layout ;