import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function DelayNode({ id, data }) {
    const [delay, setDelay] = useState(data?.delay || 1000);

    return (
        <div style={{ padding: 10, width: 180, border: "1px solid black", background: "white" }}>
            <strong>Delay</strong>

            <div>
                <label>Time (ms):</label>
                <input
                    type="number"
                    value={delay}
                    onChange={(e) => setDelay(e.target.value)}
                    style={{ width: "100%" }}
                />
            </div>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
