import React, { useState, useEffect } from "react";
import styles from "./TypeGame.module.css";

const words: string[] = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "flower",
  "galaxy",
  "horizon",
  "island",
  "journey",
  "kite",
  "lemon",
  "mountain",
  "notebook",
  "ocean",
  "puzzle",
  "queen",
  "river",
  "sunflower",
  "tree",
  "universe",
  "valley",
  "waterfall",
  "xylophone",
  "yellow",
  "zebra",
  "adventure",
  "brave",
  "courage",
  "delight",
  "energy",
  "freedom",
  "grace",
  "harmony",
  "inspire",
  "joy",
  "kindness",
  "laughter",
  "marvel",
  "noble",
  "optimism",
  "passion",
  "radiant",
  "serene",
  "thrill",
  "unique",
  "victory",
  "wonder",
  "extreme",
  "youthful",
  "zealous",
  "ambition",
  "blossom",
  "creativity",
  "dream",
  "embrace",
  "flourish",
  "glimmer",
  "hope",
  "illuminate",
  "kindle",
  "liberty",
  "miracle",
  "nature",
  "oasis",
  "promise",
  "resilient",
  "spark",
  "tranquil",
  "unity",
  "vibrant",
  "wisdom",
  "xenial",
  "youth",
  "zenith",
  "agile",
  "bold",
  "curious",
  "dynamic",
  "elegant",
  "fierce",
  "genuine",
  "humble",
  "ingenious",
  "joyful",
  "keen",
  "lively",
  "mysterious",
  "outstanding",
  "powerful",
  "quirky",
  "reliable",
  "sincere",
  "tenacious",
  "unyielding",
  "versatile",
  "witty",
  "extraordinary",
  "yonder",
  "zestful",
  "cascade",
  "dazzle",
  "epiphany",
  "fascinate",
  "galvanize",
  "honor",
  "imagine",
  "jubilant",
  "knowledge",
  "luminescent",
  "momentum",
];

const INITIAL_TIME = 3;

const Game: React.FC = () => {
  const [jugando, setJugando] = useState(false);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [gameWords, setGameWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string[]>([]);

  const generarPalabras = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 50);
    const suffledWords = shuffled.join(" ");
    const firstWord = suffledWords.split(" ")[0];
    setCurrentWord(firstWord);
    return shuffled;
  };

  useEffect(() => {
    if (!jugando) {
      setGameWords(generarPalabras());
      setTimeLeft(INITIAL_TIME);
    } else {
      console.log(currentWord);
    }
  }, [jugando]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (jugando && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setJugando(false);
    }
    return () => clearInterval(interval);
  }, [jugando, timeLeft]);

  const iniciarJuego = () => {
    setJugando(true);
  };
  const pararJuego = () => {
    setJugando(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Typing Game</h1>
      </header>
      <p className={styles.timer}>Tiempo restante: {timeLeft} s</p>
      <input type="text" />
      <div className={styles.words}>
        {gameWords.map((word, index) => {
          const letters = word.split("");
          return (
            <x-word
              key={index}
              className={`${styles.word} ${index === 0 ? styles.activeWord : ""}`}
            >
              {letters.map((letter) => {
                return letter;
              })}
            </x-word>
          );
        })}
      </div>
      {!jugando && (
        <button onClick={iniciarJuego} className={styles.button}>
          {"Empezar juego"}
        </button>
      )}
      {jugando && (
        <button onClick={pararJuego} className={styles.button}>
          {"Reiniciar juego"}
        </button>
      )}
    </div>
  );
};

export default Game;
