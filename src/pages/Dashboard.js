import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImagePlot from "../components/ImagePlot";
import MonthlyCon from "../components/MonthlyCon";
import AmericaCon from "../components/AmericaCon";
import ConGoal from "../components/ConGoal";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <div className={styles.dashboardDiv}>
      <div className={styles.groupDiv}>
        <button className={styles.searchButton} onClick={onSearchButtonClick}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rawDataDiv}>Raw Data</div>
          <img className={styles.search1Icon} alt="" src="../search-1.svg" />
        </button>
      </div>
      <b className={styles.theNuevaSchoolCarbonConc}>
        The Nueva School - Carbon Concentration
      </b>
      <ImagePlot />
      <img
        className={styles.cloud1ByStreamlinehq1}
        alt=""
        src="https://i.imgur.com/QD8zRol.png"
      />
      <img
        className={styles.leafFlutteringInWindByStr}
        alt=""
        src="https://i.imgur.com/ZVIpfCY.png"
      />
      <div className={styles.groupDiv1}>
        <div className={styles.earningDiv}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-15.svg"
          />
          <div className={styles.groupDiv2}>
            <div className={styles.groupDiv3}>
              <div className={styles.dailyConcentrationDiv}>
                Daily Concentration
              </div>
              <MonthlyCon monthlyVal="413 ppm" />
              <AmericaCon americaVal="460 ppm" />
              <img className={styles.groupIcon} alt="" src="https://i.imgur.com/Q0oW5PX.png" />
            </div>
            <div className={styles.groupDiv4}>
              <div
                className={styles.concentrationDiv}
              >{`2021 Concentration `}</div>
              <div className={styles.concentrationGoalDiv}>
                Concentration Goal
              </div>
              <img
                className={styles.groupIcon1}
                alt=""
                src="https://i.imgur.com/QD8zRol.png"
              />
            </div>
            <div className={styles.groupDiv5}>
              <ConGoal goalVal="350 ppm" />
              <img
                className={styles.groupIcon2}
                alt=""
                src="../group-102.svg"
              />
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.lineDiv1} />
          </div>
        </div>
        <img className={styles.group231} alt="" src="https://i.imgur.com/hxgmiLt.png" />
      </div>
    </div>
  );
};

export default Dashboard;
