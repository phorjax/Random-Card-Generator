/* eslint-disable */
import { read } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  var suitRandom = RandomGen2();
  let NumSelector = document.querySelector("#mid");
  NumSelector.innerHTML = RandomGen();
  let suitTop = document.querySelector("#top");
  suitTop.innerHTML = suitRandom;
  let suitBottom = document.querySelector("#bottom");
  suitBottom.innerHTML = suitRandom;
  function RandomGen() {
    let number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "K",
      "Q",
      "J"
    ];
    let randomNum = Math.floor(Math.random() * number.length);
    return number[randomNum];
  }
  function RandomGen2() {
    let suit = ["♦", "♠", "♥", "♣"];
    let randiomSuit = Math.floor(Math.random() * suit.length);
    return suit[randiomSuit];
  }
  if (document.querySelector("#top" && "#bottom").innerHTML === "♦") {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
  }
  if (document.querySelector("#top" && "#bottom").innerHTML === "♥") {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
  }
};
