import { useCallback } from "react";
import styles from "./ConGoal.module.css";

const ConGoal = ({ goalVal }) => {
  const onPpmText2Click = useCallback(() => {
    window.open(
      "https://mn350.org/understanding350/#:~:text=The%20origins%20of%20350%20and%20the%20history%20of%20atmospheric%20CO&text=Countless%20scientists%2C%20climate%20experts%2C%20and,275%20ppm%20of%20carbon%20dioxide."
    );
  }, []);

  return (
    <div className={styles.ppmDiv} onClick={onPpmText2Click}>
      {goalVal}
    </div>
  );
};

export default ConGoal;
