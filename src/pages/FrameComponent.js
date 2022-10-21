import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImage21Click = useCallback(() => {
    window.open("https://github.com/NavSous/Software-Studio-Project");
  }, []);

  const onImage31Click = useCallback(() => {
    window.open(
      "https://www.nuevaschool.org/about/notably-nueva/environmental-citizenship"
    );
  }, []);

  const onImage41Click = useCallback(() => {
    window.open("https://twitter.com/claymalott");
  }, []);

  return (
    <div className={styles.frameDiv}>
      <b className={styles.rawDataCarbonConcentratio}>
        Raw Data - Carbon Concentration
      </b>
      <div className={styles.backDiv} onClick={onBackTextClick}>
        Back
      </div>
      <img
        className={styles.rectangle491}
        alt=""
        src="https://media.npr.org/assets/img/2022/07/29/20170317_arh-5362-pano_custom-c6c9b04d1b0d75672aad98ef19a5e7168de58958-s1100-c50.jpg"
      />
      <img
        className={styles.rectangle511}
        alt=""
        src="https://www.travelandleisure.com/thmb/fO7XqI4KSxfatFXn_Spy822LaMA=/1600x1200/smart/filters:no_upscale()/grand-teton-rocky-mountains-USMNTNS0720-52499caea565471a8571acdfc3dfd9fe.jpg"
      />
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-50.svg"
        />
        <b className={styles.dailyDataB}>Daily Data</b>
        <a
          className={styles.groupA}
          href="https://clamalo.github.io/downscaling-custom-domain/co2.csv"
          target="_blank"
        >
          <div className={styles.sEETHEDATA}>SEE THE DATA</div>
        </a>
        <div className={styles.dailyDataAsUpdatedByTheN}>
          Daily data as updated by the NOAA from the Mauna Loa Observatory
        </div>
        <img className={styles.lineIcon} alt="" src="../line-6.svg" />
        <img className={styles.arrowIcon} alt="" src="../arrow-3.svg" />
      </div>
      <div className={styles.groupDiv1}>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-52.svg"
        />
        <b className={styles.ourPlotsB}>Our Plots</b>
        <a
          className={styles.groupA1}
          href="https://github.com/NavSous/Software-Studio-Project/commits/master"
          target="_blank"
        >
          <div className={styles.sEETHECODE}>SEE THE CODE</div>
        </a>
        <div className={styles.customPlotsCreatedByUWashi}>
          Custom plots created by UWashington published atmospheric scientist
          Clay Malott, graphing NOAA ppm data
        </div>
        <img className={styles.lineIcon1} alt="" src="../line-7.svg" />
        <img className={styles.arrowIcon1} alt="" src="../arrow-4.svg" />
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <img
            className={styles.rectangle531}
            alt=""
            src="https://res.cloudinary.com/dpcbzfiye/image/upload/w_1620,c_fit,dpr_auto,f_auto,q_auto,fl_progressive/v1650575251/xqrtanikjz8onydz0lgx.jpg"
          />
          <div className={styles.groupDiv4}>
            <img
              className={styles.rectangleIcon2}
              alt=""
              src="../rectangle-54.svg"
            />
            <b className={styles.monthlyDataB}>Monthly Data</b>
            <div className={styles.monthlyDataAsUpdatedByThe}>
              Monthly data as updated by the NOAA from the Mauna Loa Observatory
            </div>
            <img className={styles.lineIcon2} alt="" src="../line-8.svg" />
            <a
              className={styles.groupA2}
              href="https://gml.noaa.gov/ccgg/trends/monthly.html"
              target="_blank"
            >
              <div className={styles.sEETHEDATA1}>SEE THE DATA</div>
              <img className={styles.arrowIcon2} alt="" src="../arrow-5.svg" />
            </a>
          </div>
        </div>
      </div>
      <b className={styles.contactUsB}>Contact Us</b>
      <img className={styles.image21} src="https://i.imgur.com/BIj6hHW.png" onClick={onImage21Click} />
      <img className={styles.image31} src="https://i.imgur.com/cqdXxBJ.png" onClick={onImage31Click} />
      <img className={styles.image41} src="https://i.imgur.com/Gf4H7nN.png" onClick={onImage41Click} />
    </div>
  );
};

export default FrameComponent;
