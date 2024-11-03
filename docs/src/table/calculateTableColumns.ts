/*
 * Copyright (c) 2024 - 2024 MissingNo Gaming.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Card, Series, Variation } from "../../../src/types.js";


export function calculateTableColumns<T extends Series>(cards: Card<T>[]): [(keyof Card<T>)[], (keyof Variation<T>)[]] {
  const cardColumns: Set<keyof Card<T>> = new Set<keyof Card<T>>(["number", "name"]);
  const variationColumns: Set<keyof Variation<T>> = new Set<keyof Variation<T>>();

  Object.values(cards).forEach((card) => {
    if (card.rarity !== undefined) cardColumns.add("rarity");

    // Only add columns for non-standard variations
    card.variations.forEach((variation) => {
      if (variation.art !== "standard") variationColumns.add("art");
      if (variation.holofoil !== "none") variationColumns.add("holofoil");
      if (variation.material !== "standard") variationColumns.add("material");
      if (variation.size !== "standard") variationColumns.add("size");
      if (variation.stamp !== "none") variationColumns.add("stamp");
      if (variation.stamp !== "none") variationColumns.add("stamp");
    });
  });

  // Add sources to the end
  variationColumns.add("sources");

  return [[...cardColumns], [...variationColumns]];
}
