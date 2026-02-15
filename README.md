# AI Agent Flow Builder

This project is a visual workflow builder developed as part of the technical assessment. It allows users to create AI-powered pipelines using a drag-and-drop interface and execute them through a custom backend engine.

---

## 🔎 Project Overview

The application enables users to:

* Add different types of nodes (Input, Text, LLM, Output, etc.)
* Connect nodes visually using a graph interface
* Configure node-specific data
* Execute the workflow end-to-end
* Receive processed output from the backend

The system mimics simplified automation tools like Langflow or n8n, focusing on modular architecture and execution logic.

---

## 🖥 Frontend (React + React Flow)

The frontend is built using React and React Flow to provide a dynamic node-based editor.

### Key Features:

* Drag-and-drop node system
* Custom node components
* Edge connections between nodes
* Dynamic node configuration
* Toolbar for adding new nodes
* Real-time visual workflow editing

### Implemented Nodes:

* **Input Node** – Accepts user input
* **Text Node** – Static text processing
* **LLM Node** – Sends prompt to AI model
* **Output Node** – Displays final result
* **Math Node** – Performs arithmetic operations
* **Condition Node** – Handles conditional branching
* **Delay Node** – Adds execution delay
* **Merge Node** – Combines outputs
* **Logger Node** – Logs intermediate results

---

## ⚙ Backend (Node.js + Express)

The backend contains a custom-built workflow execution engine.

### Responsibilities:

* Accept nodes and edges from frontend
* Determine execution order
* Process nodes sequentially
* Handle data flow between nodes
* Return final computed output

### Core API Endpoint:

`POST /api/run`

This endpoint:

1. Receives graph structure (nodes + edges)
2. Builds execution order
3. Executes each node logic
4. Returns final output to frontend

---

## 🧠 Execution Logic

The workflow engine:

* Traverses the graph structure
* Executes nodes based on connections
* Passes output of one node to the next
* Handles errors and invalid flows gracefully

LLM node integrates with an AI API (OpenAI or placeholder logic depending on environment configuration).

---

## 📁 Project Structure

```
ai-agent-flow-builder/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── toolbar.js
│   │   ├── config/nodeTypes.js
│   │   └── nodes/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── executionEngine.js
│   └── package.json
│
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone Repository

```
git clone <your-repo-url>
cd ai-agent-flow-builder
```

### 2. Install Backend

```
cd backend
npm install
npm start
```

Backend runs on: `http://localhost:5000`

### 3. Install Frontend

```
cd ../frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🎯 Assignment Objectives Covered

* Node-based UI using React Flow
* Custom reusable node components
* Graph-based workflow execution
* Backend processing engine
* Clean modular architecture
* Working end-to-end pipeline execution

---

## 💡 Design Decisions

* Used modular node structure for scalability
* Separated execution logic from route handlers
* Maintained clear frontend-backend communication
* Designed system to easily extend with new node types

---

## 📌 Conclusion

This project demonstrates:

* Frontend engineering with dynamic UI
* Backend architecture and graph execution logic
* API integration (LLM support)
* Full-stack development capability

Built as part of a technical assessment submission.

---

**Author:** Badal Yadav
