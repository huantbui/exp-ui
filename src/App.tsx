import "./App.css";
import Deployments from "./pages/Deployments";
import Flows from "./pages/Flows";

function App() {
  return (
    <div className="p-2">
      <Deployments />
      <div className="pb-5"></div>
      <Flows />
    </div>
  );
}

const root = window.document.documentElement;
root.classList.remove("light", "dark");
root.classList.add("dark");

export default App;
