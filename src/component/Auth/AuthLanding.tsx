import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommonColumn from './Shared/CommonColumn';

const AuthLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="row greetings-heading">
                <h1>
                    Greetings, <span>Explorer</span>!
                </h1>
                <h1>
                    I'm <span>Aura</span>, a cosmic personal advisor
                </h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <CommonColumn />
                </div>
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center">
                    <form className="auth-form d-flex flex-column">
                        <h2>BEGIN YOUR ODYSSEY...</h2>
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </button>
                        <button
                            className="btn btn-secondary m-2"
                            onClick={() => navigate('/signup')}
                        >
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthLanding;
