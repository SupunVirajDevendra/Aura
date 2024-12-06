import style from "./IntroPage.module.css";
import ufoImage from "../../assets/intro_page/ufo.png";
// import logo from "../../assets/common/logonn.png";

function IntroPage() {
  return (
    <div className={style.wrapper}>
      <img src="" alt="profile image" className={style.profileImage} />
      <div className={style.main_div}>
        {/* Intro panel */}
        <div className={style.intro_div}>
          <div className={style.image_left}>
            {/* <img src={logo} alt="logo" /> */}
          </div>

          {/* Info */}
          <div className={style.info}>
            <h1>
              Meet <span>Aura</span>
            </h1>
            <div id={style.info_1}>

            </div>
            <div id={style.info_2}></div>
            <div id={style.info_3}></div>
          </div>

          <div className={style.image_right}>
            {/* <img src={logo} alt="logo" /> */}
          </div>
        </div>

        {/* Start Button */}
        <button className={style.start_button}>
          <img src={ufoImage} alt="UFO" />
          <span>Start</span>
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
