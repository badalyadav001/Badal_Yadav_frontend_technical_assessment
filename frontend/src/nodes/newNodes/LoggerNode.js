import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function LoggerNode({ id, data }) {
    const [label, setLabel] = useState(data?.label || "Log");

    return (
        <div style={{ padding: 10, width: 180, border: "1px solid black", background: "white" }}>
            <strong>Logger</strong>

            <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                style={{ width: "100%" }}
            />

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
