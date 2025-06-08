import styles from "./ReloadButton.module.css";
type childProps = {
  setReloadKey: React.Dispatch<React.SetStateAction<number>>;
};

export default function ReloadButton({
  setReloadKey,
}: childProps): JSX.Element {
  return (
    <button
      className={styles.reloadButton}
      onClick={() => {
        setReloadKey((reloadKey) => reloadKey + 1);
      }}
    >
      Reload
    </button>
  );
}
