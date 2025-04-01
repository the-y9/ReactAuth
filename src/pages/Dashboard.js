import { useSelector, useDispatch } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import Logout from "./Logout";

export default function Dashboard() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    if (user === undefined) {
        return (
            <Container >
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <Container>
                    <h1>Dashboard</h1>
                    <h3>
                        Hello, <i>{user ? user.username : "Guest"}</i>
                    </h3>
                    <Logout />
        </Container>
    );
}
