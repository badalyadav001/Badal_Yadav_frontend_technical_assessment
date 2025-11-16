import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function InputNode({ id, data }) {
  const [name, setName] = useState(data?.name || `input_${id}`);
  const [type, setType] = useState(data?.type || 'text');

  return (
    <div
      style={{
        width: 200,
        padding: 10,
        border: '1px solid #000',
        borderRadius: 8,
        background: 'white'
      }}
    >
      <strong>Input Node</strong>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
        </select>
      </label>

      {/* 👉 Yeh missing tha */}
      <button 
        style={{ marginTop: 10 }}
        onClick={() => data?.onSubmit?.(name, type)}
      >
        Submit
      </button>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
