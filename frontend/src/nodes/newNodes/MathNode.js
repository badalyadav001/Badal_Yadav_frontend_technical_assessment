import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function MathNode({ id, data }) {
    const [expression, setExpression] = useState(data?.expression || "");

    return (
        <div style={{ padding: 10, width: 200, border: "1px solid black", background: "white" }}>
            <strong>Math</strong>
            <div>
                <label>Expression:</label>
                <input
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    style={{ width: "100%" }}
                />
            </div>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
