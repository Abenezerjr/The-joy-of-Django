import CoreConcepts from "./CoreConcepts.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConceptss() {
  return (
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
  );
}
