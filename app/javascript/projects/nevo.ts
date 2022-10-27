export const nevoLevelNames = {
  "2km": "2km Grid",
  "subbasins": "Subcatchment",
  "national_parks": "National Park",
  "lad": "Local Authority",
  "basins": "Catchment",
  "counties_uas": "County",
  "regions": "Government Office Region",
  "countries": "Country",
} as const

export type NevoLevel = keyof typeof nevoLevelNames

export const nevoPropertyNames = {
  "tot_area": "total hectare area of spatial unit",
  "wood_ha": "woodland hectares",
  "sngrass_ha": "semi-natural grassland hectares",
  "urban_ha": "urban hectares",
  "water_ha": "water hectares",
  "farm_ha": "farmland hectares",
  "arable_ha_20": "predicted annual arable hectares in 2020s",
  "arable_ha_30": "predicted annual arable hectares in 2030s",
  "arable_ha_40": "predicted annual arable hectares in 2040s",
  "arable_ha_50": "predicted annual arable hectares in 2050s",
  "grass_ha_20": "predicted annual farm grassland hectares in 2020s",
  "grass_ha_30": "predicted annual farm grassland hectares in 2030s",
  "grass_ha_40": "predicted annual farm grassland hectares in 2040s",
  "grass_ha_50": "predicted annual farm grassland hectares in 2050s",
  "wheat_ha_20": "predicted annual wheat hectares in 2020s",
  "wheat_ha_30": "predicted annual wheat hectares in 2030s",
  "wheat_ha_40": "predicted annual wheat hectares in 2040s",
  "wheat_ha_50": "predicted annual wheat hectares in 2050s",
  "osr_ha_20": "predicted annual oil seed rape hectares in 2020s",
  "osr_ha_30": "predicted annual oil seed rape hectares in 2030s",
  "osr_ha_40": "predicted annual oil seed rape hectares in 2040s",
  "osr_ha_50": "predicted annual oil seed rape hectares in 2050s",
  "wbar_ha_20": "predicted annual winter barley hectares in 2020s",
  "wbar_ha_30": "predicted annual winter barley hectares in 2030s",
  "wbar_ha_40": "predicted annual winter barley hectares in 2040s",
  "wbar_ha_50": "predicted annual winter barley hectares in 2050s",
  "sbar_ha_20": "predicted annual spring barley hectares in 2020s",
  "sbar_ha_30": "predicted annual spring barley hectares in 2030s",
  "sbar_ha_40": "predicted annual spring barley hectares in 2040s",
  "sbar_ha_50": "predicted annual spring barley hectares in 2050s",
  "pot_ha_20": "predicted annual potato hectares in 2020s",
  "pot_ha_30": "predicted annual potato hectares in 2030s",
  "pot_ha_40": "predicted annual potato hectares in 2040s",
  "pot_ha_50": "predicted annual potato hectares in 2050s",
  "sb_ha_20": "predicted annual sugarbeet hectares in 2020s",
  "sb_ha_30": "predicted annual sugarbeet hectares in 2030s",
  "sb_ha_40": "predicted annual sugarbeet hectares in 2040s",
  "sb_ha_50": "predicted annual sugarbeet hectares in 2050s",
  "other_ha_20": "predicted annual other farmland hectares in 2020s",
  "other_ha_30": "predicted annual other farmland hectares in 2030s",
  "other_ha_40": "predicted annual other farmland hectares in 2040s",
  "other_ha_50": "predicted annual other farmland hectares in 2050s",
  "pgrass_ha_20": "predicted annual permanent grassland hectares in 2020s",
  "pgrass_ha_30": "predicted annual permanent grassland hectares in 2030s",
  "pgrass_ha_40": "predicted annual permanent grassland hectares in 2040s",
  "pgrass_ha_50": "predicted annual permanent grassland hectares in 2050s",
  "tgrass_ha_20": "predicted annual temporary grassland hectares in 2020s",
  "tgrass_ha_30": "predicted annual temporary grassland hectares in 2030s",
  "tgrass_ha_40": "predicted annual temporary grassland hectares in 2040s",
  "tgrass_ha_50": "predicted annual temporary grassland hectares in 2050s",
  "rgraz_ha_20": "predicted annual rough grazing hectares in 2020s",
  "rgraz_ha_30": "predicted annual rough grazing hectares in 2030s",
  "rgraz_ha_40": "predicted annual rough grazing hectares in 2040s",
  "rgraz_ha_50": "predicted annual rough grazing hectares in 2050s",
  "dairy_20": "predicted annual dairy heads in 2020s",
  "dairy_30": "predicted annual dairy heads in 2030s",
  "dairy_40": "predicted annual dairy heads in 2040s",
  "dairy_50": "predicted annual dairy heads in 2050s",
  "beef_20": "predicted annual beef heads in 2020s",
  "beef_30": "predicted annual beef heads in 2030s",
  "beef_40": "predicted annual beef heads in 2040s",
  "beef_50": "predicted annual beef heads in 2050s",
  "sheep_20": "predicted annual sheep heads in 2020s",
  "sheep_30": "predicted annual sheep heads in 2030s",
  "sheep_40": "predicted annual sheep heads in 2040s",
  "sheep_50": "predicted annual sheep heads in 2050s",
  "livestock_20": "predicted annual livestock heads in 2020s",
  "livestock_30": "predicted annual livestock heads in 2030s",
  "livestock_40": "predicted annual livestock heads in 2040s",
  "livestock_50": "predicted annual livestock heads in 2050s",
  "wheat_food_20": "predicted annual wheat yield (kg) in 2020s",
  "wheat_food_30": "predicted annual wheat yield (kg) in 2030s",
  "wheat_food_40": "predicted annual wheat yield (kg) in 2040s",
  "wheat_food_50": "predicted annual wheat yield (kg) in 2050s",
  "osr_food_20": "predicted annual oil seed rape yield (kg) in 2020s",
  "osr_food_30": "predicted annual oil seed rape yield (kg) in 2030s",
  "osr_food_40": "predicted annual oil seed rape yield (kg) in 2040s",
  "osr_food_50": "predicted annual oil seed rape yield (kg) in 2050s",
  "wbar_food_20": "predicted annual winter barley yield (kg) in 2020s",
  "wbar_food_30": "predicted annual winter barley yield (kg) in 2030s",
  "wbar_food_40": "predicted annual winter barley yield (kg) in 2040s",
  "wbar_food_50": "predicted annual winter barley yield (kg) in 2050s",
  "sbar_food_20": "predicted annual spring barley yield (kg) in 2020s",
  "sbar_food_30": "predicted annual spring barley yield (kg) in 2030s",
  "sbar_food_40": "predicted annual spring barley yield (kg) in 2040s",
  "sbar_food_50": "predicted annual spring barley yield (kg) in 2050s",
  "pot_food_20": "predicted annual potato yield (kg) in 2020s",
  "pot_food_30": "predicted annual potato yield (kg) in 2030s",
  "pot_food_40": "predicted annual potato yield (kg) in 2040s",
  "pot_food_50": "predicted annual potato yield (kg) in 2050s",
  "sb_food_20": "predicted annual sugarbeet yield (kg) in 2020s",
  "sb_food_30": "predicted annual sugarbeet yield (kg) in 2030s",
  "sb_food_40": "predicted annual sugarbeet yield (kg) in 2040s",
  "sb_food_50": "predicted annual sugarbeet yield (kg) in 2050s",
  "food_20": "predicted annual crop yield (kg) in 2020s",
  "food_30": "predicted annual crop yield (kg) in 2030s",
  "food_40": "predicted annual crop yield (kg) in 2040s",
  "food_50": "predicted annual crop yield (kg) in 2050s",
  "arable_profit_ann": "predicted annual arable profit",
  "livestock_profit_ann": "predicted annual livestock profit",
  "farm_profit_ann": "predicted annual farm profit",
  "arable_profit_flow_20": "predicted annual arable profit in 2020s",
  "arable_profit_flow_30": "predicted annual arable profit in 2030s",
  "arable_profit_flow_40": "predicted annual arable profit in 2040s",
  "arable_profit_flow_50": "predicted annual arable profit in 2050s",
  "livestock_profit_flow_20": "predicted annual livestock profit in 2020s",
  "livestock_profit_flow_30": "predicted annual livestock profit in 2030s",
  "livestock_profit_flow_40": "predicted annual livestock profit in 2040s",
  "livestock_profit_flow_50": "predicted annual livestock profit in 2050s",
  "farm_profit_flow_20": "predicted annual farm profit in 2020s",
  "farm_profit_flow_30": "predicted annual farm profit in 2030s",
  "farm_profit_flow_40": "predicted annual farm profit in 2040s",
  "farm_profit_flow_50": "predicted annual farm profit in 2050s",
  "ghg_arable_20": "predicted annual greenhouse gas sequestration from arable in 2020s",
  "ghg_arable_30": "predicted annual greenhouse gas sequestration from arable in 2030s",
  "ghg_arable_40": "predicted annual greenhouse gas sequestration from arable in 2040s",
  "ghg_arable_50": "predicted annual greenhouse gas sequestration from arable in 2050s",
  "ghg_grass_20": "predicted annual greenhouse gas sequestration from farm grassland in 2020s",
  "ghg_grass_30": "predicted annual greenhouse gas sequestration from farm grassland in 2030s",
  "ghg_grass_40": "predicted annual greenhouse gas sequestration from farm grassland in 2040s",
  "ghg_grass_50": "predicted annual greenhouse gas sequestration from farm grassland in 2050s",
  "ghg_livestock_20": "predicted annual greenhouse gas sequestration from livestock in 2020s",
  "ghg_livestock_30": "predicted annual greenhouse gas sequestration from livestock in 2030s",
  "ghg_livestock_40": "predicted annual greenhouse gas sequestration from livestock in 2040s",
  "ghg_livestock_50": "predicted annual greenhouse gas sequestration from livestock in 2050s",
  "ghg_farm_20": "predicted annual greenhouse gas sequestration from farm in 2020s",
  "ghg_farm_30": "predicted annual greenhouse gas sequestration from farm in 2030s",
  "ghg_farm_40": "predicted annual greenhouse gas sequestration from farm in 2040s",
  "ghg_farm_50": "predicted annual greenhouse gas sequestration from farm in 2050s",
  "ghg_arable_ann": "predicted annual greenhouse gas sequestration value from arable",
  "ghg_grass_ann": "predicted annual greenhouse gas sequestration value from farm grassland",
  "ghg_livestock_ann": "predicted annual greenhouse gas sequestration value from livestock",
  "ghg_farm_ann": "predicted annual greenhouse gas sequestration value from farm",
  "ghg_arable_flow_20": "predicted annual greenhouse gas sequestration value from arable in 2020s",
  "ghg_arable_flow_30": "predicted annual greenhouse gas sequestration value from arable in 2030s",
  "ghg_arable_flow_40": "predicted annual greenhouse gas sequestration value from arable in 2040s",
  "ghg_arable_flow_50": "predicted annual greenhouse gas sequestration value from arable in 2050s",
  "ghg_grass_flow_20": "predicted annual greenhouse gas sequestration value from farm grassland in 2020s",
  "ghg_grass_flow_30": "predicted annual greenhouse gas sequestration value from farm grassland in 2030s",
  "ghg_grass_flow_40": "predicted annual greenhouse gas sequestration value from farm grassland in 2040s",
  "ghg_grass_flow_50": "predicted annual greenhouse gas sequestration value from farm grassland in 2050s",
  "ghg_livestock_flow_20": "predicted annual greenhouse gas sequestration value from livestock in 2020s",
  "ghg_livestock_flow_30": "predicted annual greenhouse gas sequestration value from livestock in 2030s",
  "ghg_livestock_flow_40": "predicted annual greenhouse gas sequestration value from livestock in 2040s",
  "ghg_livestock_flow_50": "predicted annual greenhouse gas sequestration value from livestock in 2050s",
  "ghg_farm_flow_20": "predicted annual greenhouse gas sequestration value from farm in 2020s",
  "ghg_farm_flow_30": "predicted annual greenhouse gas sequestration value from farm in 2030s",
  "ghg_farm_flow_40": "predicted annual greenhouse gas sequestration value from farm in 2040s",
  "ghg_farm_flow_50": "predicted annual greenhouse gas sequestration value from farm in 2050s",
  "nfwood_ha": "non-farm woodland hectares",
  "fwood_ha": "farm woodland hectares",
  "broad_ha": "broadleaf woodland hectares",
  "conif_ha": "coniferous woodland hectares",
  "wood_mgmt_ha": "managed woodland hectares",
  "wood_nmgmt_ha": "non-managed woodland hectares",
  "broad_mgmt_ha": "managed broadleaf woodland hectares",
  "conif_mgmt_ha": "managed coniferous woodland hectares",
  "broad_nmgmt_ha": "non-managed broadleaf hectares",
  "conif_nmgmt_ha": "non-managed coniferous hectares",
  "broad_yc_20": "predicted broadleaf yield class in 2020s",
  "broad_yc_30": "predicted broadleaf yield class in 2030s",
  "broad_yc_40": "predicted broadleaf yield class in 2040s",
  "broad_yc_50": "predicted broadleaf yield class in 2050s",
  "conif_yc_20": "predicted coniferous yield class in 2020s",
  "conif_yc_30": "predicted coniferous yield class in 2030s",
  "conif_yc_40": "predicted coniferous yield class in 2040s",
  "conif_yc_50": "predicted coniferous yield class in 2050s",
  "broad_rp": "predicted broadleaf rotation period",
  "conif_rp": "predicted coniferous rotation period",
  "timber_broad_yr": "predicted annual timber volume (cubic metres) from 100% broadleaf managed woodland",
  "timber_conif_yr": "predicted annual timber volume (cubic metres) from 100% coniferous managed woodland",
  "timber_mixed_yr": "predicted annual timber volume (cubic metres) from 60% broadleaf 40% coniferous managed woodland",
  "timber_current_yr": "predicted annual timber volume (cubic metres) from managed woodland with current broadleaf coniferous mix",
  "timber_broad_50": "predicted annual timber volume (cubic metres) from 100% broadleaf managed woodland in 2050s",
  "timber_conif_40": "predicted annual timber volume (cubic metres) from 100% coniferous managed woodland in 2040s",
  "timber_conif_50": "predicted annual timber volume (cubic metres) from 100% coniferous managed woodland in 2050s",
  "timber_mixed_40": "predicted annual timber volume (cubic metres) from 60% broadleaf 40% coniferous managed woodland in 2040s",
  "timber_mixed_50": "predicted annual timber volume (cubic metres) from 60% broadleaf 40% coniferous managed woodland in 2050s",
  "timber_current_40": "predicted annual timber volume (cubic metres) from managed woodland with current broadleaf coniferous mix in 2040s",
  "timber_current_50": "predicted annual timber volume (cubic metres) from managed woodland with current broadleaf coniferous mix in 2050s",
  "timber_broad_ann": "predicted annual timber value from 100% broadleaf managed woodland",
  "timber_conif_ann": "predicted annual timber values from 100% coniferous managed woodland",
  "timber_mixed_ann": "predicted annual timber values from 60% broadleaf 40% coniferous managed woodland",
  "timber_current_ann": "predicted annual timber values from managed woodland with current broadleaf coniferous mix",
  "timber_broad_flow_20": "predicted annual timber value from 100% broadleaf managed woodland in 2020s",
  "timber_broad_flow_30": "predicted annual timber value from 100% broadleaf managed woodland in 2030s",
  "timber_broad_flow_40": "predicted annual timber value from 100% broadleaf managed woodland in 2040s",
  "timber_broad_flow_50": "predicted annual timber value from 100% broadleaf managed woodland in 2050s",
  "timber_conif_flow_20": "predicted annual timber values from 100% coniferous managed woodland in 2020s",
  "timber_conif_flow_30": "predicted annual timber values from 100% coniferous managed woodland in 2030s",
  "timber_conif_flow_40": "predicted annual timber values from 100% coniferous managed woodland in 2040s",
  "timber_conif_flow_50": "predicted annual timber values from 100% coniferous managed woodland in 2050s",
  "timber_mixed_flow_20": "predicted annual timber values from 60% broadleaf 40% coniferous managed woodland in 2020s",
  "timber_mixed_flow_30": "predicted annual timber values from 60% broadleaf 40% coniferous managed woodland in 2030s",
  "timber_mixed_flow_40": "predicted annual timber values from 60% broadleaf 40% coniferous managed woodland in 2040s",
  "timber_mixed_flow_50": "predicted annual timber values from 60% broadleaf 40% coniferous managed woodland in 2050s",
  "timber_current_flow_20": "predicted annual timber values from managed woodland with current broadleaf coniferous mix in 2020s",
  "timber_current_flow_30": "predicted annual timber values from managed woodland with current broadleaf coniferous mix in 2030s",
  "timber_current_flow_40": "predicted annual timber values from managed woodland with current broadleaf coniferous mix in 2040s",
  "timber_current_flow_50": "predicted annual timber values from managed woodland with current broadleaf coniferous mix in 2050s",
  "ghg_broad_yr": "predicted annual greenhouse gas sequestration from 100% broadleaf managed woodland",
  "ghg_conif_yr": "predicted annual greenhouse gas sequestration from 100% coniferous managed woodland",
  "ghg_mixed_yr": "predicted annual greenhouse gas sequestration from 60% broadleaf 40% coniferous managed woodland",
  "ghg_current_yr": "predicted annual greenhouse gas sequestration from managed woodland with current broadleaf coniferous mix",
  "ghg_broad_30": "predicted annual greenhouse gas sequestration from 100% broadleaf managed woodland in 2030s",
  "ghg_broad_40": "predicted annual greenhouse gas sequestration from 100% broadleaf managed woodland in 2040s",
  "ghg_broad_50": "predicted annual greenhouse gas sequestration from 100% broadleaf managed woodland in 2050s",
  "ghg_conif_20": "predicted annual greenhouse gas sequestration from 100% coniferous managed woodland in 2020s",
  "ghg_conif_30": "predicted annual greenhouse gas sequestration from 100% coniferous managed woodland in 2030s",
  "ghg_conif_40": "predicted annual greenhouse gas sequestration from 100% coniferous managed woodland in 2040s",
  "ghg_conif_50": "predicted annual greenhouse gas sequestration from 100% coniferous managed woodland in 2050s",
  "ghg_mixed_30": "predicted annual greenhouse gas sequestration from 60% broadleaf 40% coniferous managed woodland in 2030s",
  "ghg_mixed_40": "predicted annual greenhouse gas sequestration from 60% broadleaf 40% coniferous managed woodland in 2040s",
  "ghg_mixed_50": "predicted annual greenhouse gas sequestration from 60% broadleaf 40% coniferous managed woodland in 2050s",
  "ghg_current_30": "predicted annual greenhouse gas sequestration from managed woodland with current broadleaf coniferous mix in 2030s",
  "ghg_current_40": "predicted annual greenhouse gas sequestration from managed woodland with current broadleaf coniferous mix in 2040s",
  "ghg_current_50": "predicted annual greenhouse gas sequestration from managed woodland with current broadleaf coniferous mix in 2050s",
  "ghg_broad_ann": "predicted annual greenhouse gas sequestration value from 100% broadleaf managed woodland",
  "ghg_conif_ann": "predicted annual greenhouse gas sequestration value from 100% coniferous managed woodland",
  "ghg_mixed_ann": "predicted annual greenhouse gas sequestration value from 60% broadleaf 40% coniferous managed woodland",
  "ghg_current_ann": "predicted annual greenhouse gas sequestration value from managed woodland from current broadleaf coniferous mix",
  "ghg_broad_flow_20": "predicted annual greenhouse gas sequestration value from 100% broadleaf managed woodland in 2020s",
  "ghg_broad_flow_30": "predicted annual greenhouse gas sequestration value from 100% broadleaf managed woodland in 2030s",
  "ghg_broad_flow_40": "predicted annual greenhouse gas sequestration value from 100% broadleaf managed woodland in 2040s",
  "ghg_broad_flow_50": "predicted annual greenhouse gas sequestration value from 100% broadleaf managed woodland in 2050s",
  "ghg_conif_flow_20": "predicted annual greenhouse gas sequestration value from 100% coniferous managed woodland in 2020s",
  "ghg_conif_flow_30": "predicted annual greenhouse gas sequestration value from 100% coniferous managed woodland in 2030s",
  "ghg_conif_flow_40": "predicted annual greenhouse gas sequestration value from 100% coniferous managed woodland in 2040s",
  "ghg_conif_flow_50": "predicted annual greenhouse gas sequestration value from 100% coniferous managed woodland in 2050s",
  "ghg_mixed_flow_20": "predicted annual greenhouse gas sequestration value from 60% broadleaf 40% coniferous managed woodland in 2020s",
  "ghg_mixed_flow_30": "predicted annual greenhouse gas sequestration value from 60% broadleaf 40% coniferous managed woodland in 2030s",
  "ghg_mixed_flow_40": "predicted annual greenhouse gas sequestration value from 60% broadleaf 40% coniferous managed woodland in 2040s",
  "ghg_mixed_flow_50": "predicted annual greenhouse gas sequestration value from 60% broadleaf 40% coniferous managed woodland in 2050s",
  "ghg_current_flow_20": "predicted annual greenhouse gas sequestration value from managed woodland from current broadleaf coniferous mix in 2020s",
  "ghg_current_flow_30": "predicted annual greenhouse gas sequestration value from managed woodland from current broadleaf coniferous mix in 2030s",
  "ghg_current_flow_40": "predicted annual greenhouse gas sequestration value from managed woodland from current broadleaf coniferous mix in 2040s",
  "ghg_current_flow_50": "predicted annual greenhouse gas sequestration value from managed woodland from current broadleaf coniferous mix in 2050s",
  "fert_nitr_20": "predicted annual nitrate fertiliser use (kg) on farmland in 2020s",
  "fert_nitr_30": "predicted annual nitrate fertiliser use (kg) on farmland in 2030s",
  "fert_nitr_40": "predicted annual nitrate fertiliser use (kg) on farmland in 2040s",
  "fert_nitr_50": "predicted annual nitrate fertiliser use (kg) on farmland in 2050s",
  "fert_phos_20": "predicted annual phosphate fertiliser use (kg) on farmland in 2020s",
  "fert_phos_30": "predicted annual phosphate fertiliser use (kg) on farmland in 2030s",
  "fert_phos_40": "predicted annual phosphate fertiliser use (kg) on farmland in 2040s",
  "fert_phos_50": "predicted annual phosphate fertiliser use (kg) on farmland in 2050s",
  "pest_20": "predicted annual pesticide use (kg) on farmland in 2020s",
  "pest_30": "predicted annual pesticide use (kg) on farmland in 2030s",
  "pest_40": "predicted annual pesticide use (kg) on farmland in 2040s",
  "pest_50": "predicted annual pesticide use (kg) on farmland in 2050s",
  "tot_fert_pest_20": "predicted annual total fertiliser and pesticide use (kg) on farmland in 2020s",
  "tot_fert_pest_30": "predicted annual total fertiliser and pesticide use (kg) on farmland in 2030s",
  "tot_fert_pest_40": "predicted annual total fertiliser and pesticide use (kg) on farmland in 2040s",
  "tot_fert_pest_50": "predicted annual total fertiliser and pesticide use (kg) on farmland in 2050s",
  "prk_area": "total area of recreational parks",
  "pth_len": "total length of recreational paths",
  "prk_vis_20": "predicted annual total visits to parks in 2020s",
  "prk_viscar_20": "predicted annual visits by car to parks in 2020s",
  "prk_viswlk_20": "predicted annual visits on foot to parks in 2020s",
  "prk_visab_20": "predicted annual visits to parks from socioeconomic class AB in 2020s",
  "prk_visc1_20": "predicted annual visits to parks from socioeconomic class C1 in 2020s",
  "prk_visc2_20": "predicted annual visits to parks from socioeconomic class C2 in 2020s",
  "prk_visde_20": "predicted annual visits to parks from socioeconomic class DE in 2020s",
  "prk_val_20": "predicted annual recreational value from parks in 2020s",
  "prk_valab_20": "predicted annual recreational value from socioeconomic class AB in 2020s",
  "prk_valc1_20": "predicted annual recreation value from socioeconomic class C1 in 2020s",
  "prk_valc2_20": "predicted annual recreation value from socioeconomic class C2 in 2020s",
  "prk_valde_20": "predicted annual recreation value from socioeconomic class DE in 2020s",
  "pth_vis_20": "predicted annual total visits to paths in 2020s",
  "pth_viscar_20": "predicted annual visits by car to paths in 2020s",
  "pth_viswlk_20": "predicted annual visits on foot to paths in 2020s",
  "pth_visab_20": "predicted annual visits to paths from socioeconomic class AB in 2020s",
  "pth_visc1_20": "predicted annual visits to paths from socioeconomic class C1 in 2020s",
  "pth_visc2_20": "predicted annual visits to paths from socioeconomic class C2 in 2020s",
  "pth_visde_20": "predicted annual visits to paths from socioeconomic class DE in 2020s",
  "pth_val_20": "predicted annual recreational value from paths in 2020s",
  "pth_valab_20": "predicted annual recreational value from socioeconomic class AB in 2020s",
  "pth_valc1_20": "predicted annual recreation value from socioeconomic class C1 in 2020s",
  "pth_valc2_20": "predicted annual recreation value from socioeconomic class C2 in 2020s",
  "pth_valde_20": "predicted annual recreation value from socioeconomic class DE in 2020s",
  "prk_vis_30": "predicted annual total visits to parks in 2030s",
  "prk_viscar_30": "predicted annual visits by car to parks in 2030s",
  "prk_viswlk_30": "predicted annual visits on foot to parks in 2030s",
  "prk_visab_30": "predicted annual visits to parks from socioeconomic class AB in 2030s",
  "prk_visc1_30": "predicted annual visits to parks from socioeconomic class C1 in 2030s",
  "prk_visc2_30": "predicted annual visits to parks from socioeconomic class C2 in 2030s",
  "prk_visde_30": "predicted annual visits to parks from socioeconomic class DE in 2030s",
  "prk_val_30": "predicted annual recreational value from parks in 2030s",
  "prk_valab_30": "predicted annual recreational value from socioeconomic class AB in 2030s",
  "prk_valc1_30": "predicted annual recreation value from socioeconomic class C1 in 2030s",
  "prk_valc2_30": "predicted annual recreation value from socioeconomic class C2 in 2030s",
  "prk_valde_30": "predicted annual recreation value from socioeconomic class DE in 2030s",
  "pth_vis_30": "predicted annual total visits to paths in 2030s",
  "pth_viscar_30": "predicted annual visits by car to paths in 2030s",
  "pth_viswlk_30": "predicted annual visits on foot to paths in 2030s",
  "pth_visab_30": "predicted annual visits to paths from socioeconomic class AB in 2030s",
  "pth_visc1_30": "predicted annual visits to paths from socioeconomic class C1 in 2030s",
  "pth_visc2_30": "predicted annual visits to paths from socioeconomic class C2 in 2030s",
  "pth_visde_30": "predicted annual visits to paths from socioeconomic class DE in 2030s",
  "pth_val_30": "predicted annual recreational value from paths in 2030s",
  "pth_valab_30": "predicted annual recreational value from socioeconomic class AB in 2030s",
  "pth_valc1_30": "predicted annual recreation value from socioeconomic class C1 in 2030s",
  "pth_valc2_30": "predicted annual recreation value from socioeconomic class C2 in 2030s",
  "pth_valde_30": "predicted annual recreation value from socioeconomic class DE in 2030s",
  "prk_vis_40": "predicted annual total visits to parks in 2040s",
  "prk_viscar_40": "predicted annual visits by car to parks in 2040s",
  "prk_viswlk_40": "predicted annual visits on foot to parks in 2040s",
  "prk_visab_40": "predicted annual visits to parks from socioeconomic class AB in 2040s",
  "prk_visc1_40": "predicted annual visits to parks from socioeconomic class C1 in 2040s",
  "prk_visc2_40": "predicted annual visits to parks from socioeconomic class C2 in 2040s",
  "prk_visde_40": "predicted annual visits to parks from socioeconomic class DE in 2040s",
  "prk_val_40": "predicted annual recreational value from parks in 2040s",
  "prk_valab_40": "predicted annual recreational value from socioeconomic class AB in 2040s",
  "prk_valc1_40": "predicted annual recreation value from socioeconomic class C1 in 2040s",
  "prk_valc2_40": "predicted annual recreation value from socioeconomic class C2 in 2040s",
  "prk_valde_40": "predicted annual recreation value from socioeconomic class DE in 2040s",
  "pth_vis_40": "predicted annual total visits to paths in 2040s",
  "pth_viscar_40": "predicted annual visits by car to paths in 2040s",
  "pth_viswlk_40": "predicted annual visits on foot to paths in 2040s",
  "pth_visab_40": "predicted annual visits to paths from socioeconomic class AB in 2040s",
  "pth_visc1_40": "predicted annual visits to paths from socioeconomic class C1 in 2040s",
  "pth_visc2_40": "predicted annual visits to paths from socioeconomic class C2 in 2040s",
  "pth_visde_40": "predicted annual visits to paths from socioeconomic class DE in 2040s",
  "pth_val_40": "predicted annual recreational value from paths in 2040s",
  "pth_valab_40": "predicted annual recreational value from socioeconomic class AB in 2040s",
  "pth_valc1_40": "predicted annual recreation value from socioeconomic class C1 in 2040s",
  "pth_valc2_40": "predicted annual recreation value from socioeconomic class C2 in 2040s",
  "pth_valde_40": "predicted annual recreation value from socioeconomic class DE in 2040s",
  "prk_vis_50": "predicted annual total visits to parks in 2050s",
  "prk_viscar_50": "predicted annual visits by car to parks in 2050s",
  "prk_viswlk_50": "predicted annual visits on foot to parks in 2050s",
  "prk_visab_50": "predicted annual visits to parks from socioeconomic class AB in 2050s",
  "prk_visc1_50": "predicted annual visits to parks from socioeconomic class C1 in 2050s",
  "prk_visc2_50": "predicted annual visits to parks from socioeconomic class C2 in 2050s",
  "prk_visde_50": "predicted annual visits to parks from socioeconomic class DE in 2050s",
  "prk_val_50": "predicted annual recreational value from parks in 2050s",
  "prk_valab_50": "predicted annual recreational value from socioeconomic class AB in 2050s",
  "prk_valc1_50": "predicted annual recreation value from socioeconomic class C1 in 2050s",
  "prk_valc2_50": "predicted annual recreation value from socioeconomic class C2 in 2050s",
  "prk_valde_50": "predicted annual recreation value from socioeconomic class DE in 2050s",
  "pth_vis_50": "predicted annual total visits to paths in 2050s",
  "pth_viscar_50": "predicted annual visits by car to paths in 2050s",
  "pth_viswlk_50": "predicted annual visits on foot to paths in 2050s",
  "pth_visab_50": "predicted annual visits to paths from socioeconomic class AB in 2050s",
  "pth_visc1_50": "predicted annual visits to paths from socioeconomic class C1 in 2050s",
  "pth_visc2_50": "predicted annual visits to paths from socioeconomic class C2 in 2050s",
  "pth_visde_50": "predicted annual visits to paths from socioeconomic class DE in 2050s",
  "pth_val_50": "predicted annual recreational value from paths in 2050s",
  "pth_valab_50": "predicted annual recreational value from socioeconomic class AB in 2050s",
  "pth_valc1_50": "predicted annual recreation value from socioeconomic class C1 in 2050s",
  "pth_valc2_50": "predicted annual recreation value from socioeconomic class C2 in 2050s",
  "pth_valde_50": "predicted annual recreation value from socioeconomic class DE in 2050s",
  "rec_vis_20": "predicted annual total recreational visits in 2020s",
  "rec_vis_30": "predicted annual total recreational visits in 2030s",
  "rec_vis_40": "predicted annual total recreational visits in 2040s",
  "rec_vis_50": "predicted annual total recreational visits in 2050s",
  "rec_val_20": "predicted annual total recreational value in 2020s",
  "rec_val_30": "predicted annual total recreational value in 2030s",
  "rec_val_40": "predicted annual total recreational value in 2040s",
  "rec_val_50": "predicted annual total recreational value in 2050s",
  "prk_val_ann": "predicted annual recreational value from parks",
  "prk_valab_ann": "predicted annual recreation value from socioeconomic class AB from parks",
  "prk_valc1_ann": "predicted annual recreation value from socioeconomic class C1 from parks",
  "prk_valc2_ann": "predicted annual recreation value from socioeconomic class C2 from parks",
  "prk_valde_ann": "predicted annual recreation value from socioeconomic class DE from parks",
  "pth_val_ann": "predicted annual recreation value from paths",
  "pth_valab_ann": "predicted annual recreation value from socioeconomic class AB from paths",
  "pth_valc1_ann": "predicted annual recreation value from socioeconomic class C1 from paths",
  "pth_valc2_ann": "predicted annual recreation value from socioeconomic class C2 from paths",
  "pth_valde_ann": "predicted annual recreation value from socioeconomic class DE from paths",
  "rec_val_ann": "predicted annual total recreational value",
  "sr_bird_20": "predicted bird species richness in 2020s",
  "sr_herp_20": "predicted herp species richness in 2020s",
  "sr_invert_20": "predicted invert species richness in 2020s",
  "sr_lichen_20": "predicted lichen species richness in 2020s",
  "sr_mammal_20": "predicted mammal species richness in 2020s",
  "sr_plant_20": "predicted plant species richness in 2020s",
  "sr_100_20": "predicted species richness in 2020s",
  "sr_bird_30": "predicted bird species richness in 2030s",
  "sr_herp_30": "predicted herp species richness in 2030s",
  "sr_invert_30": "predicted invert species richness in 2030s",
  "sr_lichen_30": "predicted lichen species richness in 2030s",
  "sr_mammal_30": "predicted mammal species richness in 2030s",
  "sr_plant_30": "predicted plant species richness in 2030s",
  "sr_100_30": "predicted species richness in 2030s",
  "sr_bird_40": "predicted bird species richness in 2040s",
  "sr_herp_40": "predicted herp species richness in 2040s",
  "sr_invert_40": "predicted invert species richness in 2040s",
  "sr_lichen_40": "predicted lichen species richness in 2040s",
  "sr_mammal_40": "predicted mammal species richness in 2040s",
  "sr_plant_40": "predicted plant species richness in 2040s",
  "sr_100_40": "predicted species richness in 2040s",
  "sr_bird_50": "predicted bird species richness in 2050s",
  "sr_herp_50": "predicted herp species richness in 2050s",
  "sr_invert_50": "predicted invert species richness in 2050s",
  "sr_lichen_50": "predicted lichen species richness in 2050s",
  "sr_mammal_50": "predicted mammal species richness in 2050s",
  "sr_plant_50": "predicted plant species richness in 2050s",
  "sr_100_50": "predicted species richness in 2050s",
} as const

export type NevoProperty = keyof typeof nevoPropertyNames

export const minZoomByNevoLevel: Record<NevoLevel, number> = {
  "2km": 11,
  "subbasins": 11,
  "national_parks": 0,
  "lad": 0,
  "basins": 10,
  "counties_uas": 0,
  "regions": 0,
  "countries": 0,
}
