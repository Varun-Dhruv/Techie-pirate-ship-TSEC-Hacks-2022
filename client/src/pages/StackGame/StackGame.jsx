import React, { useState, useEffect } from "react";
import "./StackGame.scss";
import "axios";
import stack from '../../assets/images/Stack.png'

const StackGame = () => {
  let stack = [];
  const [totalStack, setTotalStack] = useState([7, 6, 5, 4, 3, 2, 1]);
  const length = 7;

  const handlePop = () => {
    if (stack.length < 1) {
      alert("Stack is empty, cant pop");
      return;
    }
    stack.pop();

    const elems = document.querySelectorAll(".stack-element");
    elems.forEach((elem) => {
      if (elem.firstChild.innerHTML == stack.length + 1) {
        elem.classList.remove("active");
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
      if (elem.firstChild.innerHTML <= stack[stack.length - 1]) {
        elem.classList.add("active");
      }
    });
  };

  return (
    <>
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
                <div key={elem} className="stack-element">
                  <div className="element">{elem}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="stack-info">
        <h1>Stack</h1>
        <div className="stack-desc"></div>
        <ul>
          <li><span>Push:</span> Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.</li>
          <li><span>Pop:</span> Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.</li>
          <li><span>Peek or Top:</span> Returns the top element of the stack.</li>
          <li><span>isEmpty:</span> Returns true if the stack is empty, else false.</li>
        </ul>
        <img src={stack} alt="" />
        <div className="below-image">
            <h2>How to understand a stack practically? </h2>
            <div>There are many real-life examples of a stack. Consider the simple example of blocks stacked over one another. The block which is at the top is the first one to be removed, i.e. the block which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow the LIFO(Last In First Out) / FILO (First In Last Out) order. The game below shows the same:</div>
        </div>
        <div className="below-image">
            <h2>Time Complexities of operations on stack: </h2>
            <div>push(), pop(), isEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.</div>
        </div>
      </div>
    </>
  );
};

export default StackGame;
