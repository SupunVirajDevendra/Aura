import style from './ChatInterface.module.css';
import user_Acc from '../../assets/common/User_Acc.png';
import { useNavigate } from 'react-router-dom';

function ChatInterface() {
    const navigate = useNavigate();

    return (
        <div className={style.wrapper}>
            <div className={style.side_panel}>
                <div className={style.q}>
                    <div className={style.q1}>
                        <p>How far is Mar....</p>
                    </div>
                    <div className={style.q2}>
                        <p>Are aliens real?</p>
                    </div>
                </div>

<<<<<<< HEAD
      <div className={style.side_panel}>
        <div className={style.q}>
          <div className={style.q1} onClick={() => navigate('/existing')} style={{ cursor: 'pointer' }}>
            <p>How far is Mar....</p>
          </div>
          <div className={style.q2}>
            <p>Are aliens real?</p>
          </div>
=======
                <div className={style.user}>
                    <img
                        src={user_Acc}
                        alt="profile_image"
                        className={style.profileImage}
                    />
                    <p
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        Log Out
                    </p>
                </div>
            </div>
>>>>>>> 49090a1ae7b3af2026366638022317156187488a
        </div>
    );
}

export default ChatInterface;
