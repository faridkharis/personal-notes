import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../contexts/LocaleContext";

// export default function LoginInput() {

//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const navigate = useNavigate();
//     const { locale } = React.useContext(LocaleContext);

//     const onEmailChangeHandler = (event) => setEmail(event.target.value);
//     const onPasswordChangeHandler = (event) => setPassword(event.target.value);

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const { error, data } = await login({ email, password });
//         if (!error) {
//             putAccessToken(data.accessToken);
//             navigate('/');
//         }
//     };
//     return (
//         <form onSubmit={onSubmitHandler} className='login__form'>
//             <input className='input__form' type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
//             <input className='input__form' type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
//             <button className='primary__button login__button'>{locale === 'id' ? 'Masuk' : 'Login'}</button>
//         </form>
//     )
// }


class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            };
        });
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <LocaleConsumer>
                {
                    ({ locale }) => {
                        return (
                            <form onSubmit={this.onSubmitHandler} className='login__form'>
                                <input className='input__form' type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChangeHandler} />
                                <input className='input__form' type="password" placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
                                <button className='primary__button login__button'>{locale === 'id' ? 'Masuk' : 'Login'}</button>
                            </form>
                        )
                    }
                }
            </LocaleConsumer>
        )
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;