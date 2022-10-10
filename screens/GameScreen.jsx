import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { nameToPic } from "../constants/Constants";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";
const names = Object.keys(nameToPic);

export default function GameScreen() {
  const [numCorrect, setNumCorrect] = useState(0);
  const [numTotal, setNumTotal] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [currNames, setCurrNames] = useState([]);
  const [currImage, setCurrImage] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5000);

  const countDown = () => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 10);
    } else {
      setNumTotal(numTotal + 1);
    }
  };

  const getNextRound = () => {
    let correct = names[Math.floor(Math.random() * names.length)];
    let correctName = nameToPic[correct][0];
    let correctImage = nameToPic[correct][1];

    let nameOptions = [correctName];
    while (nameOptions.length < 4) {
      let wrong = names[Math.floor(Math.random() * names.length)];
      let wrongName = nameToPic[wrong][0];
      if (!nameOptions.includes(wrongName)) {
        nameOptions.push(wrongName);
      }
    }
    nameOptions = shuffle(nameOptions);

    setCorrectIndex(nameOptions.indexOf(correctName));
    setCurrNames(nameOptions);
    setCurrImage(correctImage);

    setTimeLeft(5000);
  };

  const selectedNameChoice = (index) => {
    if (index === correctIndex) {
      setNumCorrect(numCorrect + 1);
    }
    setNumTotal(numTotal + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => countDown(), 10);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    getNextRound();
  }, [numTotal]);

  const nameButtons = [];
  for (let i = 0; i < 4; i++) {
    const j = i;
    nameButtons.push(
      <TouchableOpacity
        key={j}
        style={styles.button}
        onPress={() => selectedNameChoice(j)}
      >
        <Text style={styles.buttonText}>{currNames[j]}</Text>
      </TouchableOpacity>
    );
  }

  const timeRemainingStr = (timeLeft / 1000).toFixed(2);

  return (
    <View style={styles.gamesBackground}>
      <Text style={styles.timerText}>
        What MDB Newbie is This?
      </Text>
      <Text style={styles.timerText}>
        {timeRemainingStr}
      </Text>
      <Image style={styles.image} source={currImage} />
      {nameButtons[0]}
      {nameButtons[1]}
      {nameButtons[2]}
      {nameButtons[3]}
      <Text style={styles.scoreText}>
        {numCorrect} out of {numTotal} correct!
      </Text>
    </View>
  );
}
