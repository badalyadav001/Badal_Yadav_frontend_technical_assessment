from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque

app = FastAPI()

# Allow frontend (React) requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[dict]
    edges: List[dict]


# --------------------------
#   DAG CHECK FUNCTION
# --------------------------
def is_dag(nodes, edges):
    graph = defaultdict(list)
    indegree = defaultdict(int)

    # Initialize all nodes with 0 indegree
    for node in nodes:
        indegree[node['id']] = 0

    # Build graph and indegree counts
    for edge in edges:
        src = edge.get("source")
        tgt = edge.get("target")
        if src and tgt:
            graph[src].append(tgt)
            indegree[tgt] += 1

    # Kahn's Algorithm for DAG check
    queue = deque([n for n in indegree if indegree[n] == 0])
    visited_count = 0

    while queue:
        node = queue.popleft()
        visited_count += 1

        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    # If visited nodes != total nodes → cycle exists
    return visited_count == len(nodes)


# --------------------------
#   API ENDPOINT
# --------------------------
@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    dag_status = is_dag(data.nodes, data.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag_status
    }


@app.get("/")
async def root():
    return {"message": "Backend is running!"}
