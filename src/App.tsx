import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLanding from './component/Auth/AuthLanding';
import Login from './component/Auth/Login';
import Signup from './component/Auth/Singup';
import ForgotPassword from './component/Auth/forgotPassword';
import StarsContainer from './component/StarsContainer';
import ChatInterface from "./component/ChatInterface/ChatInterface";
import IntroPage from "./component/IntroPage/IntroPage";
import ExistingChat from './component/ExistingChat/ExistingChat';

function App() {
    return (
        <>
            <StarsContainer />

            <Router>
                <Routes>
                    <Route path="/" element={<AuthLanding />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="/intro" element={<IntroPage />} />
                    <Route path="/chat" element={<ChatInterface />} />
                    <Route path='/existing' element ={<ExistingChat />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
