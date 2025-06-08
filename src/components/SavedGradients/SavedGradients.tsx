import styles from "./SavedGradients.module.css";
import SavedGradientElement from "../SavedGradientElement/SavedGradientElement";

type childProps = {
  savedGradients: string[];
};

export default function SavedGradients({
  savedGradients,
}: childProps): JSX.Element {
  return (
    <>
      <p className={styles.text}>
        {savedGradients.length > 0 ? `Saved gradients` : ""}
      </p>
      <div className={styles.gridWrapper}>
        <ul className={styles.savedContainer}>
          {savedGradients.map((gradient, i) => (
            <SavedGradientElement key={i} gradient={gradient} />
          ))}
        </ul>
      </div>
    </>
  );
}
