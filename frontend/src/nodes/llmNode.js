import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function LLMNode({ data }) {
  const [prompt, setPrompt] = useState(data?.prompt || "");

  return (
    <div style={{ padding: 12, width: 230, border: "1px solid #0e67ff", borderRadius: 8 }}>
      <strong>AI / LLM Node</strong>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        style={{ width: "100%", marginTop: 8 }}
      />

      <button style={{ marginTop: 10, width: "100%" }}>
        Generate
      </button>

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
