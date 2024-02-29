import { useState } from "react";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  // let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    // selectedButton +> 'templets','jsx',
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} /> */}
            {/* <CoreConcepts /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic == "templates"}
              onSelect={() => handleSelect("templates")}
            >
              Templates
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "viwe"}
              onSelect={() => handleSelect("viwe")}
            >
              Viwe
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "models"}
              onSelect={() => handleSelect("models")}
            >
              Models
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p id="select">Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
