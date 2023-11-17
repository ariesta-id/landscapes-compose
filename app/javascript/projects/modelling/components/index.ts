import { booleanDataSocket, numericDataSocket, numericNumberDataSocket } from "../socket_types"
import { BaseComponent } from "./base_component"
import { BinaryOpComponent } from "./binary_op_component"
import { MapLayerComponent, SaveMapLayer } from "./map_layer_component"
import { NumericConstantComponent } from "./numeric_constant_component"
import { UnaryOpComponent } from "./unary_op_component"
import { VariadicOpComponent } from "./variadic_op_component"
import { MaskNumericDataComponent } from "./mask_numeric_data_component"
import { NumberToNumericDatasetComponent } from "./number_to_numeric_dataset_component"
import { NevoLayerComponent } from "./nevo_layer_component"
import { OSMLandUseComponent } from "./osm_land_use_component"
import { AreaComponent } from "./area_component"
import { BarChartComponent } from "./bar_chart_component"
import { DistanceMapComponent } from "./distance_map_component"
import { CategoricalComponent } from "./categorical_component"
import { DigitalModelComponent } from "./digital_model_component"
import { ExpressionComponent } from "./expression_component"
import { NumericDatasetToNumberComponent } from "./numeric_dataset_to_numeric_component"
import { SaveModelOutputComponent, SaveModel } from "./save_model_component"
import { PrecompiledModelComponent, getDatasets } from "./dataset_component"
import { UkcehLandCoverComponent } from "./ukceh_land_cover_component"
import { CensusComponent } from "./census_component"
import { OSGreenSpacesComponent } from "./os_greenspaces_component"
import { CellAreaComponent } from "./cell_area_component"
import { ScaleFactorComponent } from "./scale_factor_component"
import { CROMEComponent } from "./crome_component"
import { RescaleComponent } from "./rescale_component"
import { Extent } from "ol/extent"

export function createDefaultComponents(saveMapLayer: SaveMapLayer, saveModel: SaveModel, getDatasets: getDatasets, extent: Extent): BaseComponent[] {
  return [
    // Inputs
    new UkcehLandCoverComponent(extent),
    new NevoLayerComponent(),
    new OSMLandUseComponent(),
    new NumericConstantComponent(),
    new DigitalModelComponent(),
    new PrecompiledModelComponent(getDatasets),
    new CensusComponent(),
    new OSGreenSpacesComponent(),
    new CROMEComponent(),

    // Outputs
    new MapLayerComponent(saveMapLayer),
    new SaveModelOutputComponent(saveModel),

    // Conversions
    new NumberToNumericDatasetComponent(),
    new NumericDatasetToNumberComponent(),
    new CategoricalComponent(),

    // Calculations
    new AreaComponent(),
    new DistanceMapComponent(),
    new ScaleFactorComponent(),

    // Charts
    new BarChartComponent(),

    // Set operations
    new VariadicOpComponent('Union', '⋃', booleanDataSocket, booleanDataSocket, 'Set operations'),
    new VariadicOpComponent('Intersection', '⋂', booleanDataSocket, booleanDataSocket, 'Set operations'),
    new BinaryOpComponent('Set difference', '−', booleanDataSocket, booleanDataSocket, 'Set operations'),
    new VariadicOpComponent('Symmetric difference', 'Δ', booleanDataSocket, booleanDataSocket, 'Set operations'),
    new UnaryOpComponent('Complement', '′', 'postfix', booleanDataSocket, booleanDataSocket, 'Set operations'),

    // Arithmetic
    new MaskNumericDataComponent(),
    new ExpressionComponent(),
    new BinaryOpComponent('Min', '', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Max', '', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new VariadicOpComponent('Sum', '∑', numericDataSocket, numericDataSocket, 'Arithmetic'),
    new VariadicOpComponent('Product', '∏', numericDataSocket, numericDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Add', '+', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Subtract', '−', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Multiply', '×', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Divide', '÷', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Power', '^', numericNumberDataSocket, numericNumberDataSocket, 'Arithmetic'),
    new UnaryOpComponent('Negate', '−', 'prefix', numericDataSocket, numericDataSocket, 'Arithmetic'),
    new UnaryOpComponent('Reciprocal', '⁻¹', 'postfix', numericDataSocket, numericDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Less', '<', numericDataSocket, booleanDataSocket, 'Arithmetic'),
    new BinaryOpComponent('Greater', '>', numericDataSocket, booleanDataSocket, 'Arithmetic'),

    // DEBUG TOOLS
    new CellAreaComponent(),
    new RescaleComponent(),

  ]
}
