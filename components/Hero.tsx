import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello, Sinister Here", "The Serial Killer"],
    loop: true,
    deleteSpeed: 100,
    typeSpeed: 100,
    delaySpeed: 2000,
  });
  return <div> 
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
    </div>;
}
