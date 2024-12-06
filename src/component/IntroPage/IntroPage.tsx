import style from "./IntroPage.module.css";
import ufoImage from "../../assets/intro_page/ufo.png";

function IntroPage() {
  return (
    <div className={style.wrapper}>
      <img src="" alt="profile image" className={style.profileImage} />
      <div className={style.main_div}>
        <div className={style.intro_div}>
          <img src="" alt="" />
          <div className={style.title}>
          <h1>Meet <span>Aura</span></h1>
          </div>
          <img src="" alt="" />
        </div>
        <button className={style.start_button}>
        <img src={ufoImage} alt="UFO" />
          <span>Start</span>
          </button>
      </div>
    </div>
  );
}

export default IntroPage;
