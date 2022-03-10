import React from "react";
import "./LinkedList.scss";
import key from "../../assets/images/key.png";
import person from "../../assets/images/person.png";

const LinkedList = () => {
  let listPos = 0;
  let personPos = 0;

  const startAnimation = () => {
    const listContainer = document.querySelector(".list-container");
    const personContainer = document.querySelector(".person-container");
    const messageContainer = document.querySelector(".message-container");

    if(personPos==0){
      document.querySelector(".btn").innerHTML='Move To Next';
    }

    if(listPos==10){
      listContainer.children[listPos].classList.add("active");
      personContainer.children[personPos].classList.add("active");
      messageContainer.children[personPos].classList.add("active");
    }else {
      listContainer.children[listPos].classList.add("active");
      listContainer.children[listPos+1].classList.add("active");
      personContainer.children[personPos].classList.add("active");
      messageContainer.children[personPos].classList.add("active");
    }
    
    if(personPos==3){
      listContainer.children[6].children[0].classList.add('active');
    }
    
    listPos = listPos + 2;
    personPos = personPos + 1;
  };

  return (
    <div className="linked-list">
      <h1>Treasure hunt where a person can move in a single direction</h1>
      <div className="linked-list-container">
        <div className="list-container">
          <div className="list-element">Box1</div>
          <div className="line"></div>
          <div className="list-element">Box2</div>
          <div className="line"></div>
          <div className="list-element">Box3</div>
          <div className="line"></div>
          <div className="list-element">
            <div className="key">
              <img src={key} alt="" />
            </div>
          </div>
          <div className="line"></div>
          <div className="list-element">Box5</div>
          <div className="line"></div>
          <div className="list-element">Box6</div>
        </div>
        <div className="person-container">
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="person">
            <img src={person} alt="" />
          </div>
          <div className="person">
            <img src={person} alt="" />
          </div>
        </div>
        <div className="message-container">
        <div className="message">Start of the race analogus to head of the linked list </div>
          <div className="message">We always find the address of the next location in the current location</div>
          <div className="message">Moved to third, nothing useful found yet😢</div>
          <div className="message">Yeyy, Found the key in Box 4😍........Finally we found a desired item!!</div>
          <div className="message"> Exploring the next node 🤔</div>
          <div className="message">Reached the end 😊Next address is null </div>

        </div>
        <div className="btn" onClick={startAnimation}>
          Start Animation
        </div>
      </div>
    </div>
  );
};

export default LinkedList;
