import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div>
      {/* a prop is a dynamic piece of information */}
      <MyNavbar title="Manish" />
    </div>
  );
}

export default App;
