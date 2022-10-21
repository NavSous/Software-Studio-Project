import { useCallback } from "react";
import styles from "./MonthlyCon.module.css";

const MonthlyCon = ({ monthlyVal }) => {
  const onPpmTextClick = useCallback(() => {
    window.open("https://gml.noaa.gov/ccgg/trends/data.html");
  }, []);

  return (
    <div className={styles.ppmDiv} onClick={onPpmTextClick}>
      {monthlyVal}
    </div>
  );
};

export default MonthlyCon;
