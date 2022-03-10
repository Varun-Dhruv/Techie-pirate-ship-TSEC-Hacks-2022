import React from "react";
import "./Quiz.scss";

const Quiz = () => {
  var marks = 0;

  const getMarks = () => {
    const questionContainer = document.querySelectorAll(".question-container");
    var count = 0;
    
    questionContainer.forEach((question) => {
      const options = document.querySelectorAll(".options")
      const answer = parseInt(question.querySelector('.answer').innerHTML)
      count++;
      options.forEach((option)=> {
        const checkboxes = option.querySelectorAll("input");
        checkboxes.forEach((element) => {
          if (element.checked && element.getAttribute("index")==answer) {
            marks = marks + 1;
          }
        });
      })
    });

    const scoreContainer = document.querySelector(".score-container");
    scoreContainer.innerHTML = `<h3>You Scored</h3>
    <div className="score">${marks} / ${count}</div>`;
  };

  return (
    <div className="quiz">
      <h1>Single Choice Questions for Data Structures</h1>
      <div className="question-bank">
        <div className="question-container">
          <div className="question">
            Minimum number of fields in each node of a doubly linked list is
          </div>
          <div className="options">
            <div className="anim-choice">
              <input type="checkbox" name="check" index="1" />
              <label htmlFor="check">2</label>
            </div>
            <div className="anim-choice">
              <input type="checkbox" name="check" index="2" />
              <label htmlFor="check">3</label>
            </div>
            <div className="anim-choice">
              <input type="checkbox" name="check" index="3" />
              <label htmlFor="check">4</label>
            </div>
            <div className="anim-choice">
              <input type="checkbox" name="check" index="4" />
              <label htmlFor="check">None of the above</label>
            </div>
          </div>
          <div className="answer">2</div>
        </div>
        <div className="question-container margin">
          <div className="question">
            A graph in which all vertices have equal degree is known as
          </div>
          <div className="options">
            <div className="anim-choice">
              <input type="checkbox" name="check" index="1" />
              <label htmlFor="check">Complete graph</label>
            </div>
            <div className="anim-choice">
              <input type="checkbox" name="check" index="2" />
              <label htmlFor="check">Regular graph</label>
            </div>
            <div className="anim-choice">
              <input type="checkbox" name="check" index="3" />
              <label htmlFor="check">Multi graph</label>
            </div>
            <div className="anim-choice">
              <input type="checkbox" name="check" index="4" />
              <label htmlFor="check">Simple graph</label>
            </div>
            <div className="answer">1</div>
          </div>
          <div className="question-container">
            <div className="question">
              A vertex of in-degree zero in a directed graph is called a/an
            </div>
            <div className="options">
              <div className="anim-choice">
                <input type="checkbox" name="check" index="1" />
                <label htmlFor="check">Root vertex</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="2" />
                <label htmlFor="check">Isolated vertex</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="3" />
                <label htmlFor="check">Sink</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="4" />
                <label htmlFor="check">Articulation point</label>
              </div>
            </div>
            <div className="answer">3</div>
          </div>
          <div className="question-container">
            <div className="question">
              A graph is a tree if and only if graph is
            </div>
            <div className="options">
              <div className="anim-choice">
                <input type="checkbox" name="check" index="1" />
                <label htmlFor="check">Directed graph</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="2" />
                <label htmlFor="check">Contains no cycles</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="3" />
                <label htmlFor="check">Planar</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="4" />
                <label htmlFor="check">Completely connected</label>
              </div>
            </div>
            <div className="answer">2</div>
          </div>
          <div className="question-container">
            <div className="question">
              The elements of a linked list are stored
            </div>
            <div className="options">
              <div className="anim-choice">
                <input type="checkbox" name="check" index="1" />
                <label htmlFor="check">In a structure</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="2" />
                <label htmlFor="check">In an array</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="3" />
                <label htmlFor="check">
                  Anywhere the computer has space for them
                </label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="4" />
                <label htmlFor="check">In contiguous memory locations</label>
              </div>
            </div>
            <div className="answer">3</div>
          </div>
          <div className="question-container">
            <div className="question">
              A parentheses checker program would be best implemented using
            </div>
            <div className="options">
              <div className="anim-choice">
                <input type="checkbox" name="check" index="1" />
                <label htmlFor="check">List</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="2" />
                <label htmlFor="check">Queue</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="3" />
                <label htmlFor="check">Stack</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="4" />
                <label htmlFor="check">Any of the abov</label>
              </div>
            </div>
            <div className="answer">3</div>
          </div>
          <div className="question-container">
            <div className="question">
              To perform level-order traversal on a binary tree, which of the
              following data structure will be required?
            </div>
            <div className="options">
              <div className="anim-choice">
                <input type="checkbox" name="check" index="1" />
                <label htmlFor="check">Hash table</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="2" />
                <label htmlFor="check">Queue</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="3" />
                <label htmlFor="check">Binary search tree</label>
              </div>
              <div className="anim-choice">
                <input type="checkbox" name="check" index="4" />
                <label htmlFor="check">Stack</label>
              </div>
            </div>
            <div className="answer">2</div>
          </div>
          <div className="btn" onClick={getMarks}>
            Submit
          </div>
        </div>
      </div>

      <div className="score-container"> </div>
    </div>
  );
};

export default Quiz;
