import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import MainLayouts from "../../MainLayouts/MainLayouts";
import Apps from "../Apps/Apps";
import Installation from "../Installation/Installation";
import AppsDetails from "../AppsDetails/AppsDetails";
import Error from "../Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                path: '/',
                Component: Home,
                
            },
            {
                path: '/apps',
                Component: Apps,
            },
            {
                path: '/installation',
                Component: Installation,
            },
            {
                path: '/appDetails/:id',
                Component: AppsDetails,
            },
            {
                path: '*',
                Component: Error
            }
        ]
    }
])

