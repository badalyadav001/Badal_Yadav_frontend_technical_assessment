import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import nodeTypes from "./config/nodeTypes";
import Toolbar from "./toolbar";

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // ----------------------------
  // 🔥 UNIVERSAL SUBMIT HANDLER
  // ----------------------------
  const handleNodeSubmit = (nodeId, submitData) => {
    console.log("Node submitted:", nodeId, submitData);

    // Update node data inside ReactFlow state
    setNodes((nds) =>
      nds.map((n) =>
        n.id === nodeId ? { ...n, data: { ...n.data, ...submitData } } : n
      )
    );
  };

  // ----------------------------
  // EDGE CONNECT FIX
  // ----------------------------
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // ----------------------------
  // Add node from toolbar
  // ----------------------------
  const addNode = (type) => {
    setNodes((nds) => [
      ...nds,
      {
        id: `node_${nds.length + 1}`,
        type,
        position: { x: 200, y: 100 + nds.length * 40 },
        data: {
          label: `${type} node`,
          onSubmit: (values) => handleNodeSubmit(`node_${nds.length + 1}`, values),
        },
      },
    ]);
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <Toolbar addNode={addNode} />

      <div style={{ flexGrow: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
