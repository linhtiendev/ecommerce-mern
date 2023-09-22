import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

// config routes
export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: "/products",
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: "/:type",
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: "/product-detail",
        page: ProductDetailPage,
        isShowHeader: true,
    },
    {
        path: "/sign-in",
        page: SignInPage,
        isShowHeader: false,
    },
    {
        path: "/sign-up",
        page: SignUpPage,
        isShowHeader: false,
    },
    {
        path: "*",
        page: NotFoundPage,
    },
];
