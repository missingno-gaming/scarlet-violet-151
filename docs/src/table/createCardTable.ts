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

import { calculateTableColumns } from "./calculateTableColumns.js";
import { createTableHeader } from "./createTableHeader.js";
import { createCardTableRow } from "./createCardTableRow.js";
import { Card, Series } from "../../../src/types.js";


export function createCardTable<T extends Series>(cards: Card<T>[]): string {
  const [cardColumns, variationColumns] = calculateTableColumns(cards);

  const header = createTableHeader([...cardColumns, ...variationColumns]);

  const rows = cards.reduce((rows: string[], card: Card<T>) => {
    card.variations.forEach((variation, index) => {
      rows.push(createCardTableRow({
        card: index === 0 ? card : undefined,
        variation,
        cardColumns,
        variationColumns
      }));
    });

    return rows;
  }, []);

  return [header, ...rows].join("\n");
}