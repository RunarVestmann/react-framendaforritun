import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    const history = useHistory();
    const handleSubmit = (state) => {
        history.push('/items');
    };

    return <LoginForm onSubmit={handleSubmit} />;
};

export default Login;
