import { useState } from "react";
import Section from "./Section";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    // selectedButton +> 'templets','jsx',
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
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
    </Section>
  );
}
