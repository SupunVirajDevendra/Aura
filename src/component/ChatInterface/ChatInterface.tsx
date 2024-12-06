import style from "./ChatInterface.module.css";
import user_Acc from "../../assets/common/User_Acc.png";
import Moon from "../../assets/chat_Interface/Moon.png";
import logonn from "../../assets/common/logonn.png";
import { useNavigate } from 'react-router-dom';

function ChatInterface() {
  const navigate = useNavigate();

  return (
    
    <div className={style.wrapper}>

      <div className={style.moon}>
          <img
            src={Moon}
            alt="moon"
            className={style.moonImage}
      /></div>

      <div className={style.logoC}>
          <img
            src={logonn}
            alt="moon"
            className={style.logoImageC}
      /></div>
      
      <div className={style.side_panel}>
        <div className={style.q}>
          <div className={style.q1}>
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
