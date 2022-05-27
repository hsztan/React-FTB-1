import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeedbackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item.');

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
      className="card"
    >
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <div className="icon">
        <FaBeer />
      </div>
    </motion.div>
  );
};

export default FeedbackItem;
