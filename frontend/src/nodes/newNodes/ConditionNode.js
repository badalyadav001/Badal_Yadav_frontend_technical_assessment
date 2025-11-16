import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function ConditionNode({ id, data }) {
    const [condition, setCondition] = useState(data?.condition || "");

    return (
        <div style={{ padding: 10, width: 220, border: "1px solid black", background: "white" }}>
            <strong>Condition</strong>

            <div>
                <label>If:</label>
                <input
                    type="text"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    style={{ width: "100%" }}
                />
            </div>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" id="true" position={Position.Right} style={{ top: "30%" }} />
            <Handle type="source" id="false" position={Position.Right} style={{ top: "70%" }} />
        </div>
    );
}
