import React, { useState } from 'react';

function App(): React.ReactElement {
  const [msg] = useState<string>('hello world');

  return <div className="App">{msg}</div>;
}

export default App;
