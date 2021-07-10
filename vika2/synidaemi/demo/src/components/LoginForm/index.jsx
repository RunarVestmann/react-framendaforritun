import { useState } from 'react';
import Form from '../Form';
import Input from '../Input';

const LoginForm = ({ onSubmit }) => {
    const [state, setState] = useState({ email: '', password: '', passwordConfirmation: '' });
    const [errors, setErorrs] = useState({});

    const handleSubmit = () => {
        const errors = {};

        if (state.password.length < 5) errors.password = 'Password must be at least of length 5';
        if (state.passwordConfirmation !== state.password) errors.passwordConfirmation = 'Passwords must match';

        if (Object.keys(errors).length === 0) {
            onSubmit(state);
            setErorrs({});
        } else setErorrs(errors);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="email"
                label="Email"
                onChange={(ev) => setState((state) => ({ ...state, email: ev.target.value }))}
            />
            <Input
                type="password"
                label="Password"
                onChange={(ev) => setState((state) => ({ ...state, password: ev.target.value }))}
                error={errors.password}
            />
            <Input
                type="password"
                label="Password Confirmation"
                onChange={(ev) => setState((state) => ({ ...state, passwordConfirmation: ev.target.value }))}
                error={errors.passwordConfirmation}
            />
        </Form>
    );
};

export default LoginForm;
