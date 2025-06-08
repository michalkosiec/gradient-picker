import styles from "./App.module.css";
import GradientGrid from "../GradientGrid/GradientGrid.tsx";
import ReloadButton from "../ReloadButton/ReloadButton.tsx";
import SavedGradients from "../SavedGradients/SavedGradients.tsx";
import { useState } from "react";

export default function App(): JSX.Element {
  const [reloadKey, setReloadKey] = useState(0);
  const [savedGradients, setSavedGradients] = useState<string[]>([]);
  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Pick your gradient!</h1>
      <main className={styles.mainContainer}>
        <GradientGrid
          reloadKey={reloadKey}
          setSavedGradients={setSavedGradients}
        />
        <ReloadButton setReloadKey={setReloadKey} />
        <SavedGradients savedGradients={savedGradients} />
      </main>
    </div>
  );
}
