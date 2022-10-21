import { useCallback } from "react";
import styles from "./AmericaCon.module.css";

const AmericaCon = ({ americaVal }) => {
  const onPpmText1Click = useCallback(() => {
    window.open("https://gml.noaa.gov/ccgg/trends/data.html");
  }, []);

  return (
    <div className={styles.ppmDiv} onClick={onPpmText1Click}>
      {americaVal}
    </div>
  );
};

export default AmericaCon;
