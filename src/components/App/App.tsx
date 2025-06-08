import styles from "./App.module.css";
import GradientGrid from "../GradientGrid/GradientGrid.tsx";
import ReloadButton from "../ReloadButton/ReloadButton.tsx";
import { useState } from "react";

export default function App(): JSX.Element {
  const [reloadKey, setReloadKey] = useState(0);
  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Pick your gradient!</h1>
      <main className={styles.mainContainer}>
        <GradientGrid reloadKey={reloadKey} />
        <ReloadButton setReloadKey={setReloadKey} />
      </main>
    </div>
  );
}
