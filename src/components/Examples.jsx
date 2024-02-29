import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  // let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    // selectedButton +> 'templets','jsx',
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
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
  );
}
