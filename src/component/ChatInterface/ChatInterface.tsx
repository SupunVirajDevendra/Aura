import style from "./ChatInterface.module.css";
import user_Acc from "../../assets/common/User_Acc.png";
import { useNavigate } from 'react-router-dom';

function ChatInterface() {
  const navigate = useNavigate();

  return (
    
    <div className={style.wrapper}>
      <div className={style.sparkle1}>+</div>
      <div className={style.sparkle2}>+</div>
      <div className={style.sparkle3}>+</div>
      <div className={style.sparkle4}>+</div>
      <div className={style.sparkle5}>+</div>
      <div className={style.sparkle6}>+</div>

      <div className={style.side_panel}>
        <div className={style.q}>
          <div className={style.q1} onClick={() => navigate('/existing')} style={{ cursor: 'pointer' }}>
            <p>How far is Mar....</p>
          </div>
          <div className={style.q2}>
            <p>Are aliens real?</p>
          </div>
        </div>

        <div className={style.user}>
          <img
            src={user_Acc}
            alt="profile_image"
            className={style.profileImage}
          />
          <p onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
