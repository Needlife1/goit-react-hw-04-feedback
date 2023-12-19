import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAssessment = e => {
    const option = e.target.textContent;

    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        onLeaveFeedback={handleAssessment}
        options={['good', 'neutral', 'bad']}
      />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </Section>
  );
}
