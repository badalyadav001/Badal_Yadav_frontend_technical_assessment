import { Handle, Position } from 'reactflow';

export default function OutputNode({ data }) {
  return (
    <div style={{ padding: 12, width: 210, border: '2px solid green', borderRadius: 8 }}>
      <strong>Output Node</strong>

      <div style={{ marginTop: 10 }}>
        {data?.value || "Output will appear here"}
      </div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}
