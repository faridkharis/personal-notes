import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';
import HomePageButton from '../components/HomePageButton';

function LoginPage({ LoginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            LoginSuccess(data);
        }
    }

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <section className='container login__container'>
                            <div className='card login__section'>
                                <HomePageButton />
                                <h2>{locale === 'id' ? 'Masuk ke akun Anda' : 'Login to your account'}</h2>
                                <LoginInput login={onLogin} />
                                <div>
                                    {locale === 'id' ?
                                        <p>Belum memiliki akun? <Link to='/register' className='tertiary__button'>Daftar disini</Link></p>
                                        :
                                        <p>Don't have an account yet? <Link to='/register' className='tertiary__button'>Register here</Link></p>
                                    }
                                </div>
                            </div>
                        </section>
                    )
                }
            }
        </LocaleConsumer>
    );
}

LoginPage.propTypes = {
    LoginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;