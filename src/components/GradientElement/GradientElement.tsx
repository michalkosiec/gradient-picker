import { useState } from "react";
import styles from "./GradientElement.module.css";

function generateRandomGradient(): string {
  const getColor = (): string => {
    const hue: number = Math.floor(Math.random() * 360);
    const saturation: number = Math.floor(Math.random() * 41) + 60;
    return `hsl(${hue}, ${saturation}%, 50%)`;
  };

  const angle: number = Math.floor(Math.random() * 360);
  const color1: string = getColor();
  const color2: string = getColor();

  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Successfuly copied to clipboard!");
  } catch (err) {
    console.error(err);
  }
}

function handleOnClick(
  curGradient: string,
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
): void {
  copyToClipboard(curGradient);
  setIsClicked(true);
  setTimeout(() => setIsClicked(false), 3000);
}

export default function GradientElement(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  const [curGradient] = useState(generateRandomGradient());
  return (
    <li
      className={`${styles.gridGradientElement} ${
        isClicked ? styles.clicked : ""
      }`}
      style={{ background: curGradient }}
      onClick={() => handleOnClick(curGradient, setIsClicked)}
    ></li>
  );
}
