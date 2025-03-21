import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser, initialState } from "../store/authSlice";

const users = [
  {"username": "1"},
  {"username": "2"},
  {"username": "3"},
  
]

export default function Login(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ error, setError ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  
  function handleLogin(event){
    event.preventDefault();

    const un = users.find((user) => user.username === username);
    if (un){
    dispatch(addUser({"username": username}))
    navigate("/dashboard");
  }else{
    setError("User Not Found!");
  }
  }

    return (<>
        <div className="container-sm login-container">
          <h2>Login</h2>
          {error && (
          <label className="text-danger">
            <i className="bi bi-info-circle"></i> {error}
          </label>
        )}
          <form onSubmit={handleLogin}>
            <div className="m-3">
              <label htmlFor="username" className="for-label">Username</label>
              <input 
              type="text" 
              className="htmlForm-control" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
            </div>  
            <div className="m-3">
              <label htmlFor="password" className="for-label">Password</label>
              <input 
              type="password" 
              className="htmlForm-control" 
              id="password" 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    </>)
  }