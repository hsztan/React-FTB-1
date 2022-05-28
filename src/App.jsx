import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Header bgColor="rgba(0,0,0,0.4)" text="FeedbackUI" textColor="#ff6a95" />
      <div className="container">
        <FeedbackItem />
      </div>
    </FeedbackProvider>
  );
};

export default App;
