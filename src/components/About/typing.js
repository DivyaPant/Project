import React, {useEffect, useState} from "react";

const TypingEffect = (props)=>{
    const {string, speed} = props;

    const [completeText, setCompleteText] = useState('');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    let timer = currentLetterIndex === 0 ? 0 : speed;
  
    useEffect(() => {
        if(currentLetterIndex === string.length) return;
      const intervalId = setInterval(() => {
        const letter = string[currentLetterIndex];
        if (currentLetterIndex < string.length) {
          setCompleteText(completeText + letter);
          setCurrentLetterIndex(currentLetterIndex + 1);
        }   
      }, timer);
      return () => clearInterval(intervalId);
    }, [currentLetterIndex, string, speed]);
    return (
      <div>
        {completeText}&nbsp;
      </div>
    );
};

export default TypingEffect;