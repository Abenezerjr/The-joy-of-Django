import CoreConcepts from "./CoreConcepts.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConceptss() {
  return (
    <section id="core-concepts">
      <h2 style={{ color: "#FFF" }}>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
