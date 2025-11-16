import { Handle, Position } from "reactflow";

export default function MergeNode() {
    return (
        <div style={{ padding: 10, width: 160, border: "1px solid black", background: "white" }}>
            <strong>Merge</strong>

            <Handle type="target" position={Position.Left} style={{ top: "30%" }} />
            <Handle type="target" position={Position.Left} style={{ top: "70%" }} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
