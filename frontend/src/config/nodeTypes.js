// frontend/src/config/nodeTypes.js

import InputNode from "../nodes/inputNode";
import OutputNode from "../nodes/outputNode";
import TextNode from "../nodes/textNode";
import LLMNode from "../nodes/llmNode";

import MathNode from "../nodes/newNodes/MathNode";
import ConditionNode from "../nodes/newNodes/ConditionNode";
import DelayNode from "../nodes/newNodes/DelayNode";
import MergeNode from "../nodes/newNodes/MergeNode";
import LoggerNode from "../nodes/newNodes/LoggerNode";

const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  textNode: TextNode,
  llmNode: LLMNode,

  mathNode: MathNode,
  conditionNode: ConditionNode,
  delayNode: DelayNode,
  mergeNode: MergeNode,
  loggerNode: LoggerNode,
};

export default nodeTypes;
