import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';
import HomePageButton from '../components/HomePageButton';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);

        if (error) {
            navigate('/');
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
                                <h2>{locale === 'id' ? 'Daftar disini' : 'Register here'}</h2>
                                <RegisterInput register={onRegisterHandler} />
                                {locale === 'id' ?
                                    <p>Sudah memiliki akun? <Link to='/' className='tertiary__button'>Masuk disini</Link></p>
                                    :
                                    <p>Already have an account? <Link to='/' className='tertiary__button'>Login here</Link></p>
                                }
                            </div>
                        </section>
                    )
                }
            }
        </LocaleConsumer>
    )
}

export default RegisterPage;