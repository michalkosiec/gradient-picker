import styles from "./SavedGradients.module.css";
import SavedGradientElement from "../SavedGradientElement/SavedGradientElement";

export default function SavedGradients(): JSX.Element {
  return (
    <>
      <p className={styles.text}>Saved gradients </p>
      <ul className={styles.savedContainer}>
        {Array.from({ length: 25 }, (_, i) => i).map((i) => (
          <SavedGradientElement className={styles.savedElement} key={i} />
        ))}
      </ul>
    </>
  );
}
