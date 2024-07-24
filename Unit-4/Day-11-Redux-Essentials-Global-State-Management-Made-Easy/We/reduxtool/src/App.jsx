import { useState } from "react";
import { store } from "./redux/store";
function App() {
  const [up, setUp] = useState(0)
  store.subscribe(() => {
    console.log(store.getState());
    setUp(up+1)
  });
  console.log(store.getState());

  return (
    <>
      {JSON.stringify(store.getState())}
      <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => store.dispatch({ type: "SUB" })}>-</button>
      <div></div>
    </>
  );
}

export default App;
