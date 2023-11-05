// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import { isJsonString } from "./untils";
import { jwtDecode } from "jwt-decode";
import * as UserService from "./services/UserService";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/slices/userSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const { storageData, decoded } = handleDecoded();
        if (decoded?.id) {
            handleGetDetailUser(decoded?.id, storageData);
        }
    }, []);

    const handleDecoded = () => {
        let storageData = localStorage.getItem("access_token");
        let decoded = {};
        if (storageData && isJsonString(storageData)) {
            storageData = JSON.parse(storageData);
            decoded = jwtDecode(storageData);
        }
        return { decoded, storageData };
    };

    UserService.axiosJWT.interceptors.request.use(
        async (config) => {
            const currentTime = new Date();
            const { decoded } = handleDecoded();
            if (decoded?.exp < currentTime.getTime() / 1000) {
                const data = await UserService.refreshToken();
                config.headers["token"] = `Bearer ${data?.access_token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token);
        dispatch(updateUser({ ...res?.data, access_token: token }));
    };

    // useEffect(() => {
    //     fetchApi();
    // }, []);
    // const fetchApi = async () => {
    //     const res = await axios.get(
    //         `${process.env.REACT_APP_API_URL}/product/get-all`
    //     );
    //     return res.data;
    // };
    // const query = useQuery({ queryKey: ["product"], queryFn: fetchApi });
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
