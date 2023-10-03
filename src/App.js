import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";

function App() {
    // useEffect(() => {
    //     fetchApi();
    // }, []);
    const fetchApi = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/product/get-all`
        );
        // const res = await axios.get(
        //     `http://localhost:3001/api/product/get-all`
        // );

        return res.data;
    };
    const query = useQuery({ queryKey: ["product"], queryFn: fetchApi });
    console.log("query", query);
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page;
                        // xet dk render page hoac NotfoundPage
                        const Layout = route.isShowHeader
                            ? DefaultComponent
                            : Fragment;
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
