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

import { createTableRow } from "./createTableRow.js";
import { Card, Series, Variation } from "../../../src/types.js";


interface Params<T extends Series> {
  card?: Card<T>;
  variation: Variation<T>;
  cardColumns: (keyof Card<T>)[];
  variationColumns: (keyof Variation<T>)[];
}

export function createCardTableRow<T extends Series>(params: Params<T>): string {
  const { card, variation, cardColumns, variationColumns } = params;

  const cardFields: string[] = [];
  if (card) {
    cardFields.push(...cardColumns.map(field => {
      if (card[field]) return card[field].toString();
      return " ";
    }));
  } else {
    // Add empty columns to simulate a merged row for variations of the same card
    cardFields.push(...cardColumns.map(() => " "));
  }

  const variationFields: string[] = variationColumns.map(field => {
    const name = field[0].toUpperCase() + field.slice(1);
    const value = variation[field] === "none" ? "No" : variation[field];

    if (Array.isArray(value)) return value.join(",");
    return `${value} ${name}`;
  });

  const formattedFields = [...cardFields, ...variationFields].map(field => {
    if (field.trim().length === 0) return field;
    // e.g. "booster-pack,elite-trainer-box" -> "Booster pack, Elite Trainer Box"
    return field.split(",").map(formatField).join(", ");
  });

  return createTableRow(formattedFields);
}

function formatField(field: string): string {
  // e.g. "booster-pack" -> "Booster Pack"
  return field.split("-").map(word => {
    if (field.split("-").length > 1 && word === "ex") return word;
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
}