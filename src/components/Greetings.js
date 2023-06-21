import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/GreetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      {randomGreeting ? (<p>{randomGreeting}</p>) : (<p>Loading.....</p>)}
    </div>
  );
};

export default Greetings;
