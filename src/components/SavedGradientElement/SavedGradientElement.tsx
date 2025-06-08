import styles from "./SavedGradientElement.module.css";

type childProps = {
  gradient: string;
};

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Successfuly copied to clipboard!");
  } catch (err) {
    console.error(err);
  }
}

export default function SavedGradientElement({
  gradient,
}: childProps): JSX.Element {
  return (
    <li
      className={styles.savedGradient}
      style={{ background: gradient }}
      onClick={() => copyToClipboard(gradient)}
    ></li>
  );
}
