import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const alert = () => {
    setvisibility(true)
  };
  const [visibility, setvisibility] = useState(false);
  return (
    <div>
      {visibility && <Alert onClose={()=>setvisibility(false)}>test</Alert>}
      <Button color="primary" handleClick={alert}>
        test{" "}
      </Button>
    </div>
  );
}

export default App;
