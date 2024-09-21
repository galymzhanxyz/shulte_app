import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ShulteTable from "./components/ShulteTable/ShulteTable";
import { increment } from "./slices/targetNumSlice";

function App() {
  const count = useSelector((state) => state.targetNum.value);
  const errorMessage = useSelector((state) => state.error.value);

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Найдите: {count}</h2>
      {errorMessage.length > 0 && (
        <h3 style={{ textAlign: "center", color: "red" }}>{errorMessage}!</h3>
      )}
      <ShulteTable />
    </div>
  );
}

export default App;
