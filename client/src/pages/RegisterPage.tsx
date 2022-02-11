import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../redux/auth/actions";
import { User, AllStores } from "../redux/types";

export default function RegisterPage() {

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const user: User | null = useSelector<AllStores>(state => state.auth.user) as User;

  const dispatch = useDispatch();
  
  let navigate = useNavigate();

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    
    dispatch(actions.register(username, email, password));
  };

  useEffect(() => {
    if (user !== null) {
      navigate('projects');
    }
  });

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <button
            disabled={username === '' || password === ''}
          >
            <span>Register</span>
          </button>
        </div>
      </form>
    </div>
  );
}