import style from './IntroPage.module.css';
import { useNavigate } from 'react-router-dom';
import ufoImage from '../../assets/intro_page/ufo.png';
import logo from '../../assets/common/logonn.png';
import rocket1 from '../../assets/common/rocket-1.png';
import rocket2 from '../../assets/common/rocket-2.png';
import rocket3 from '../../assets/common/rocket-3.png';
import user_Acc from '../../assets/chat_Interface/User_Acc_logo.png';

function IntroPage() {
    const navigate = useNavigate();

    function onClick() {
        navigate('/chat');
    }

    return (
        <div className={style.wrapper}>
            <img
                src={user_Acc}
                alt="profile_image"
                className={style.profileImage}
            />

            <div className={style.main_div}>
                {/* Intro panel */}
                <div className={style.intro_div}>
                    <div className={style.image_left}>
                        <img src={logo} alt="logo" />
                    </div>

                    {/* Info */}
                    <div className={style.info}>
                        <h1>
                            Meet <span>Aura</span>
                        </h1>
                        <div id={style.info_1}>
                            <img src={rocket1} alt="" />
                            <p>
                                Remembers What you said earlier in the
                                conversation.
                            </p>
                        </div>
                        <div id={style.info_2}>
                            <img src={rocket2} alt="" />
                            <p>Allow users to continue conversations.</p>
                        </div>
                        <div id={style.info_3}>
                            <img src={rocket3} alt="" />
                            <p>Trained to decline inappropriate requests.</p>
                        </div>
                    </div>

                    <div className={style.image_right}>
                        <img src={logo} alt="logo" />
                    </div>
                </div>

                {/* Start Button */}
                <button className={style.start_button} onClick={onClick}>
                    <img src={ufoImage} alt="UFO" />
                    <span>Start</span>
                </button>
            </div>
        </div>
    );
}

export default IntroPage;
