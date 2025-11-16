// frontend/src/toolbar.js
import React from "react";

export default function Toolbar({ addNode }) {
  return (
    <div
      style={{
        width: 180,
        background: "#f4f4f4",
        padding: 10,
        borderRight: "1px solid #ccc",
      }}
    >
      <h3>Nodes</h3>

      <button onClick={() => addNode("inputNode")}>Input</button>
      <button onClick={() => addNode("textNode")}>Text</button>
      <button onClick={() => addNode("llmNode")}>LLM</button>
      <button onClick={() => addNode("outputNode")}>Output</button>

      <hr />

      <button onClick={() => addNode("mathNode")}>Math</button>
      <button onClick={() => addNode("conditionNode")}>Condition</button>
      <button onClick={() => addNode("delayNode")}>Delay</button>
      <button onClick={() => addNode("mergeNode")}>Merge</button>
      <button onClick={() => addNode("loggerNode")}>Logger</button>
    </div>
  );
}
