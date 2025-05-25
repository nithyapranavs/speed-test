import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TypingInput from './TypingInput'
import TypingStats from './TypingStats'

const getRandomSentence = () => {
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "Practice makes perfect, so keep typing every day.",
    "Learning React is fun and boosts your web development skills.",
    "Never give up on your dreams, no matter how hard it gets.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Every morning is a fresh start to achieve something new.",
    "Consistency is the key to mastering any skill.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Stay positive, work hard, and make it happen."
  ];

  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}
const sampleText = getRandomSentence(); 
const App = () => {
    const [input, setInput] = useState(""); 
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [errors, setErrors] = useState(0);

    useEffect(() => {
        if (input.length == 1 && !startTime) {
            setStartTime(Date.now());
        }

        if (input.length >= sampleText.length) {
            const endTime = Date.now();
            const timeTaken = (endTime - startTime) / 60000;
            const words = sampleText.split(" ").length;
            setWpm(Math.round(words / timeTaken));
            calculateAccuracy();
        }

    },[input])

    const calculateAccuracy = () => {
        let error = 0;
        for (let i=0; i<input.length; i++) {
            if (input[i] !== sampleText[i]) error++;
        }

        setErrors(error);
        setAccuracy(Math.max(0, 100 - (errors / sampleText.length) * 100));
    }


    return (
    <div>
    <h1> Typing speed test</h1>
    <p>{sampleText}</p>
    <TypingInput input={input} setInput={setInput} />
    <TypingStats wpm={wpm} accuracy={accuracy} errors={errors} />
    </div>
    );
    };

export default App
