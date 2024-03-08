import { useState } from "react";
import Section from "./Section";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p id="select">Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == "templates"}
              onClick={() => handleSelect("templates")}
            >
              Templates
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "viwe"}
              onClick={() => handleSelect("viwe")}
            >
              Viwe
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "models"}
              onClick={() => handleSelect("models")}
            >
              Models
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <Tabs></Tabs>
    </Section>
  );
}
