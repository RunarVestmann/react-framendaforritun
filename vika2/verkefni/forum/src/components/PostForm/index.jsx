import { useState } from 'react';
import Form from '../Form';
import Input from '../Input';

const PostForm = ({ onSubmit, initalState = { author: '', title: '', description: '' } }) => {
    const [errors, setErrors] = useState({});
    const [state, setState] = useState(initalState);

    const handleSubmit = () => {
        const errors = {};
        if (state.author === '') errors.author = 'Author is required';
        if (state.title === '') errors.title = 'Title is required';
        if (state.description === '') errors.description = 'Description is required';
        if (Object.keys(errors).length === 0) {
            setErrors({});
            onSubmit(state);
        } else setErrors(errors);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                error={errors.author}
                label="Author"
                onChange={(ev) => setState((state) => ({ ...state, author: ev.target.value }))}
                value={state.author}
            />
            <Input
                error={errors.title}
                label="Title"
                onChange={(ev) => setState((state) => ({ ...state, title: ev.target.value }))}
                value={state.title}
            />
            <Input
                error={errors.description}
                label="Description"
                onChange={(ev) => setState((state) => ({ ...state, description: ev.target.value }))}
                type="textarea"
                value={state.description}
            />
        </Form>
    );
};

export default PostForm;
