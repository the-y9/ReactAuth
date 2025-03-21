import { Provider } from "react-redux";
import store from "../store/store"
import { useSelector, useDispatch } from "react-redux";

import Logout from "./Logout";

export default function Dashboard(){

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    if (user === undefined) {
        return <h2>Loading...</h2>;
    }

    return (<>
    <Provider store={store}>
        <h1>Dashboard</h1>
        <h2> Hello <i>{ user ? user.username: "Guest" }</i> </h2>

        <Logout />
    </Provider>
    </>)
}