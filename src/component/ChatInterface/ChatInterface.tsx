import style from "./ChatInterface.module.css";
import user_Acc from "../../assets/common/User_Acc.png";

function ChatInterface() {  
    return (
        <div className={style.wrapper}>
            ChatInterface
            <div className={style.sparkle1}>+</div>
            <div className={style.sparkle2}>+</div>
            <div className={style.sparkle3}>+</div>
            <div className={style.sparkle4}>+</div>
            <div className={style.sparkle5}>+</div>
            <div className={style.sparkle6}>+</div>

            <div className={style.box}>

                <a href="">
                <div className={style.q1}>
                    <p>How far is Mar..</p>
                </div>
                </a>

                <a href="">
                <div className={style.q2}>
                    <p>Are aliens real?</p>
                </div>
                </a>

            <a href="" className={style.imageLink}>
                <img src={user_Acc} alt="profile_image" className={style.profileImage} />
            </a>
            <a href="" className={style.logOut}>
                <p>Log Out</p>
            </a>
            </div>
            
        </div>
    );
}

export default ChatInterface;
