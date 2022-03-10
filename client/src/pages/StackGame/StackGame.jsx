import React, { useState, useEffect } from "react";
import "./StackGame.scss";
import "axios";

const StackGame = () => {
  let stack = [];
  const [totalStack, setTotalStack] = useState([7, 6, 5, 4, 3, 2, 1]);
  const length = 7;

  const handlePop = () => {
    if (stack.length < 1) {
        alert("Stack is empty, cant pop");
        return;
      }
      stack.pop()

      
      const elems = document.querySelectorAll(".stack-element");
        elems.forEach((elem) => {
          if(elem.firstChild.innerHTML==stack.length+1){
            elem.classList.remove('active')
            return;
          }
              
      });
  };

  const handlePush = async () => {
    if (stack.length >= 7) {
        alert("full stack cant push");
        return;
      }
      stack.push(stack.length + 1);
      const elems = document.querySelectorAll(".stack-element");
      elems.forEach((elem) => {
          if(elem.firstChild.innerHTML<=stack[stack.length-1]){
              elem.classList.add('active')
          }   
    });
    
  };

  return (
    <div className="stack-game">
      <h1>Play with the stack to know about constraints</h1>
      <div className="flex-container">
        <div className="left">
          <div className="stack-info">
            <h3 className="info limit">Limit of the stack is {length}</h3>
          </div>
          <div className="button-container">
            <div className="btn" onClick={handlePush}>
              Push
            </div>
            <div className="btn" onClick={handlePop}>
              Pop
            </div>
          </div>
        </div>
        <div className="right">
          <div className="stack">
            {totalStack.map((elem, index) => (
              <div
                key={elem}
                className="stack-element"
              >
                <div className="element">{elem}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackGame;
