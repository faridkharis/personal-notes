import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";
import { register } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

export default function RegisterInput() {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);

    const onNameChangeHandler = (event) => setName(event.target.value);
    const onEmailChangeHandler = (event) => setEmail(event.target.value);
    const onPasswordChangeHandler = (event) => setPassword(event.target.value);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        await register({ name, email, password });
        navigate('/')
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input className='input__form' type='text' placeholder={locale === 'id' ? 'Nama' : 'Name'} value={name} onChange={onNameChangeHandler} />
            <input className='input__form' type='email' placeholder='Email' value={email} onChange={onEmailChangeHandler} />
            <input className='input__form' type='password' placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
            <button className='primary__button login__button'>{locale === 'id' ? 'Daftar' : 'Register'}</button>
        </form>
    )

}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}