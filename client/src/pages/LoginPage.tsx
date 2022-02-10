import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../redux/auth/actions";
import { User, AllStores } from "../redux/types";

export default function LoginPage() {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const user: User | null = useSelector<AllStores>(state => state.auth.user) as User;

  const dispatch = useDispatch();
  
  let navigate = useNavigate();

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    
    dispatch(actions.login(username, password));
  };

  useEffect(() => {
    if (user !== null) {
      navigate('projects');
    }
  });

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <form
          onSubmit={handleLogin}
        >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              disabled={username === '' || password === ''}
            >
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}