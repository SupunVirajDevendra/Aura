import React from 'react';
import CommonColumn from './Shared/CommonColumn';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
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
                        <div className="row">
                            <div className="col-10">
                                <h2 className="mb-3">Forgot Password...</h2>
                            </div>
                            <div className="col-2">
                                <img
                                    src="/images/logo/rocket.png"
                                    alt="rocket"
                                />
                            </div>
                        </div>
                        <p className="m-3">
                            Please enter the email address you'd like your
                            passwrod reset information send to
                        </p>
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
                        <div className="row d-flex flex-nowrap justify-content-between">
                            <button
                                className="btn btn-primary col-5 m-2"
                                style={{
                                    fontSize: '9px',
                                    width: '45%',
                                }}
                            >
                                Request Reset Link
                            </button>
                            <button
                                className="btn btn-primary col-5 m-2"
                                style={{
                                    fontSize: '9px',
                                    width: '45%',
                                }}
                                onClick={() => navigate('/')}
                            >
                                Back to Home
                            </button>
                        </div>
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

export default ForgotPassword;
