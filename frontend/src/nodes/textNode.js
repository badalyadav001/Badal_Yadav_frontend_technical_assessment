import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function TextNode({ data }) {
  const [text, setText] = useState(data?.text || "Sample Text");

  return (
    <div style={{ padding: 10, border: '1px solid #555', borderRadius: 6, width: 200 }}>
      <strong>Text Node</strong>

      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        style={{ width: '100%' }}
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
