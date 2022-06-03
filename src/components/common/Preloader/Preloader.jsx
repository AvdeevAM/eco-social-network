import preloader from "./../../../assets/images/preloader.svg";

const Preloader = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
          <img src={preloader} alt="" />
        </div>
    )
};

export default Preloader;