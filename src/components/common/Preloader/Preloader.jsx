import preloader from "./../../../assets/images/preloader.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
