import React from "react";
import "./DSAFlow.scss";
import DSA_Roadmap from "../../assets/images/DSA_Flow.jpeg";
import { Link } from "react-router-dom";

const DSAFlow = () => {
  return (
    <div className="dsa-flow">
      <div className="dsa-flow-img">
        <img src={DSA_Roadmap} alt="" />
        <div className="link-box array">
          <a>Array</a>
        </div>
        <div className="link-box stack">
          <Link className="stack-link" to="/StackGame">Stack</Link>
        </div>
        <div className="link-box queue">
          <a>Queue</a>
        </div>
        <div className="link-box linked-list">
          <Link className="link" to="/LinkedList">Linked-list</Link>
        </div>
        <div className="link-box b-tree">
          <a>B-Tree</a>
        </div>
        <div className="link-box heap">
          <a>Heaps</a>
        </div>
        <div className="link-box binary-tree">
          <a>Binary Tree</a>
        </div>
        <div className="link-box hash">
          <a>Hash Table</a>
        </div>
        <div className="link-box graph">
          <a>Graph</a>
        </div>
        <div className="link-box end">
          <a>End</a>
        </div>
      </div>
    </div>
  );
};

export default DSAFlow;
