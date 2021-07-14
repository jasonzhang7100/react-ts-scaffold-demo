import React from 'react';
import Counter from './pages/Counter';
import { Router } from '@reach/router';

const App: React.FC = () => {
  return (
    <Router>
      <Counter path="/count" />
    </Router>
  );
};

export default App;
