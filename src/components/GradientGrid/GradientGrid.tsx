import GradientElement from "../GradientElement/GradientElement";
import styles from "./GradientGrid.module.css";

type childProps = {
  reloadKey: number;
};

export default function GradientGrid({ reloadKey }: childProps): JSX.Element {
  return (
    <ul className={styles.gridContainer}>
      {Array.from({ length: 6 }, (_, i) => i).map((_, i) => (
        <GradientElement key={6 * reloadKey - i} />
      ))}
    </ul>
  );
}
