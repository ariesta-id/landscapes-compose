import { Input, Node } from "rete"
import { NodeData, WorkerInputs, WorkerOutputs } from "rete/types/core/data"
import { dataSocket } from "../socket_types"
import { BooleanTileGrid, NumericTileGrid } from "../tile_grid"
import { BaseComponent } from "./base_component"

export type SaveMapLayer = (id: number, tileGrid: BooleanTileGrid | NumericTileGrid) => void

export class MapLayerComponent extends BaseComponent {
  callback: SaveMapLayer

  constructor(callback: SaveMapLayer) {
    super("Map layer")
    this.callback = callback
    this.category = "Outputs"
  }

  async builder(node: Node) {
    node.addInput(new Input("in", "Input", dataSocket))
  }

  async worker(node: NodeData, inputs: WorkerInputs, outputs: WorkerOutputs, ...args: unknown[]) {
    const editorNode = this.editor?.nodes.find(n => n.id === node.id)
    if (editorNode === undefined) { return }

    if (inputs['in'].length === 0) {
      editorNode.meta.errorMessage = 'No input'
    }
    else {
      delete editorNode.meta.errorMessage
      this.callback(node.id, inputs["in"][0] as BooleanTileGrid | NumericTileGrid)
    }
    editorNode.update()
  }
}
