import style from "./ChatInterface.module.css";

function ChatInterface() {  
    return (
        <div className={style.wrapper}>
            ChatInterface
            <div className={style.sparkle}>+</div>
            <div className={style.sparkle}>+</div>
            <div className={style.sparkle}>+</div>
            <div className={style.sparkle}>+</div>
            <div className={style.sparkle}>+</div>
            <div className={style.sparkle}>+</div>
            <div className={style.box}>Chat</div>
        </div>
    );
}

export default ChatInterface;
