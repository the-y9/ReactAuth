import { useDispatch } from "react-redux";
import { removeUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Logout(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(removeUser());
        navigate("/");

    };

    return (<>
    <button onClick ={handleLogout}> Log Out </button>
    </>)

}