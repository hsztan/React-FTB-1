import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

const App = () => {
  return (
    <>
      <Header bgColor="rgba(0,0,0,0.4)" text="FeedbackUI" textColor="#ff6a95" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;
