import React from 'react';
import CommonColumn from './Shared/CommonColumn';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="row greetings-heading">
                <h1>
                    <span>Your Personal</span>
                </h1>
                <h1>
                    <span>AI Advisor</span>
                </h1>
            </div>
            <div className="row">
                <div className="col-4">
                    <CommonColumn />
                </div>
                <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                    <form className="auth-form d-flex flex-column">
                        <h2 className="mb-3">Login</h2>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Example@gmail.com"
                                className="form-control pb-2"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control pb-2"
                                placeholder="Password"
                            />
                        </div>
                        <p
                            className="p-2"
                            onClick={() => navigate('/forgot-password')}
                            style={{ cursor: 'pointer' }}
                        >
                            Forgot Password?
                        </p>
                        <button className="btn btn-primary" onClick={() => navigate('/intro')}
                            style={{ cursor: 'pointer' }}>Sign in</button>
                        <p className="mt-5 text-center">or continue with</p>
                        <div className="row">
                            <div className="col-4">
                                <div className="card p-2 my-2 mx-auto">
                                    <img src="/images/logo/google.png" alt="" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-2 my-2 mx-auto">
                                    <img src="/images/logo/github.png" alt="" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-2 my-2 mx-auto">
                                    <img
                                        src="/images/logo/facebook.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            Don't have an account yet?{' '}
                            <span
                                onClick={() => navigate('/signup')}
                                style={{ cursor: 'pointer' }}
                            >
                                Register for free
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
