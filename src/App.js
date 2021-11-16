import { useState } from "react";
// import React, { Component } from "react";
// import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGrade = (nameGrade) => {
    switch (nameGrade) {
      case "good":
        setGood((PrevGood) => PrevGood + 1);
        break;
      case "neutral":
        setNeutral((PrevNeutral) => PrevNeutral + 1);
        break;
      case "bad":
        setBad((PrevBad) => PrevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good * 100) / countTotalFeedback())
      : 0;
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={addGrade}
        />
      </Section>
      <Section title="">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addGrade = (nameGrade) => {
//     this.setState((prevState) => {
//       return { [nameGrade]: prevState[nameGrade] + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     return this.state.bad + this.state.good + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return total
//       ? Math.round((this.state.good * 100) / this.countTotalFeedback())
//       : 0;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.addGrade}
//           />
//         </Section>
//         <Section title="">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
export default App;
