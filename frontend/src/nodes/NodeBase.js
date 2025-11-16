import React from "react";
import { Handle } from "reactflow";
import "./nodebase.css";

export default function NodeBase({ id, label, children, inputs = [], outputs = [], style = {} }) {
  return (
    <div className="vs-node" style={{ position: "relative", ...style }}>
      <div className="vs-node-header">{label}</div>

      {/* left handles */}
      <div className="vs-node-handles-left">
        {inputs.map((h, i) => (
          <Handle
            key={h.id || `${id}-in-${i}`}
            type="target"
            position="left"
            id={h.id || `in-${i}`}
            style={{ top: 28 + i * 18 }}
          />
        ))}
      </div>

      {/* main body */}
      <div className="vs-node-body">{children}</div>

      {/* right handles */}
      <div className="vs-node-handles-right">
        {outputs.map((h, i) => (
          <Handle
            key={h.id || `${id}-out-${i}`}
            type="source"
            position="right"
            id={h.id || `out-${i}`}
            style={{ top: 28 + i * 18 }}
          />
        ))}
      </div>
    </div>
  );
}
