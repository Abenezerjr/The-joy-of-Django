import Header from "./components/Header/Header";
import Examples from "./components/Examples";
import CoreConceptss from "./components/CoreConceptss";
import TabButton from "./components/TabButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptss />
        <Examples />
      </main>
    </>
  );
}

export default App;
