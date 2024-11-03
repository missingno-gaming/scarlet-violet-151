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

import { writeFile } from "node:fs";
import { join } from "node:path";

import { createCardTable } from "./table/createCardTable.js";
import { createMetricsTable } from "./table/createMetricsTable.js";
import { DOCS } from "./constants.js";


const PATH = join(process.cwd());

DOCS.forEach(doc => {
  const path = join(PATH, doc.filename);

  const title = `# ${doc.title}`;
  const description = `${doc.description}`;
  const metricsTitle = "## Metrics";
  const metrics = doc.metrics.map(metric => {
    const title = `### ${metric.title}`;
    const table = createMetricsTable(metric.columns, metric.values);
    return [title, table].join("\n\n");
  }).join("\n\n");
  const cardsTitle = "## Cards";
  const cards = createCardTable(doc.cards);

  const content = [
    title,
    description,
    metricsTitle,
    metrics,
    cardsTitle,
    cards
  ].join("\n\n");

  writeFile(path, content, error => {
    if (error) {
      console.error(`Failed to build ${doc.filename}`, error);
      return;
    }

    console.log(`Built ${doc.filename}`);
  });
});
