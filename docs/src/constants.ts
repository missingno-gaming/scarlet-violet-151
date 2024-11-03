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

import { SVP } from "../../src/svp.js";
import { MEW } from "../../src/mew.js";
import { SVE } from "../../src/sve.js";
import { Doc } from "./types.js";
import { Card } from "../../src/types.js";


const MEW_CARDS: Card<"mew">[] = Object.values(MEW);
const MEW_CARD_VARIATIONS = MEW_CARDS.flatMap(card => card.variations);
const MEW_DOC: Doc<"mew"> = {
	filename: "MEW.md",
	title: "Main set cards",
	description: "All cards with the 'MEW' set symbol.",
	metrics: [
		{
			title: "Totals",
			columns: [
				"Set",
				"All"
			],
			values: [
				MEW_CARDS.length.toString(),
				MEW_CARD_VARIATIONS.length.toString()
			]
		},
		{
			title: "Rarities",
			columns: [
				"Common",
				"Uncommon",
				"Rare",
				"Double Rare",
				"Illustration Rare",
				"Ultra Rare",
				"Special Illustration Rare",
				"Hyper Rare"
			],
			values: [
				MEW_CARDS.filter(card => card.rarity === "common").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "uncommon").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "rare").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "double-rare").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "illustration-rare").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "ultra-rare").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "special-illustration-rare").length.toString(),
				MEW_CARDS.filter(card => card.rarity === "hyper-rare").length.toString()
			]
		},
		{
			title: "Types",
			columns: [
				"Pokemon",
				"Trainer",
				"Energy"
			],
			values: [
				MEW_CARDS.filter(card => card.type === "pokemon").length.toString(),
				MEW_CARDS.filter(card => card.type === "trainer").length.toString(),
				MEW_CARDS.filter(card => card.type === "energy").length.toString()
			]
		},
		{
			title: "Variations",
			columns: [
				"Reverse Holo",
				"Reverse Cosmos Holo",
				"Cosmos Holo",
				"Stamped",
				"Metal"
			],
			values: [
				MEW_CARD_VARIATIONS.filter(variation => variation.holofoil === "reverse").length.toString(),
				MEW_CARD_VARIATIONS.filter(variation => variation.holofoil === "reverse-cosmos").length.toString(),
				MEW_CARD_VARIATIONS.filter(variation => variation.holofoil === "cosmos").length.toString(),
				MEW_CARD_VARIATIONS.filter(variation => variation.stamp !== "none").length.toString(),
				MEW_CARD_VARIATIONS.filter(variation => variation.material === "metal").length.toString()
			]
		}
	],
	cards: MEW_CARDS
} as const;

const SVP_CARDS: Card<"svp">[] = Object.values(SVP);
const SVP_CARD_VARIATIONS = SVP_CARDS.flatMap(card => card.variations);
const SVP_DOC: Doc<"svp"> = {
	filename: "SVP.md",
	title: "Promo cards",
	description: "Cards with the 'SVP' set symbol provided in Scarlet & Violet - 151 labelled products.",
	metrics: [
		{
			title: "Totals",
			columns: [
				"Set",
				"All"
			],
			values: [
				SVP_CARDS.length.toString(),
				SVP_CARD_VARIATIONS.length.toString()
			]
		},
		{
			title: "Variations",
			columns: [
				"Stamped",
				"Jumbo"
			],
			values: [
				SVP_CARD_VARIATIONS.filter(variation => variation.stamp !== "none").length.toString(),
				SVP_CARD_VARIATIONS.filter(variation => variation.size === "jumbo").length.toString()
			]
		}
	],
	cards: SVP_CARDS
} as const;

const SVE_CARDS: Card<"sve">[] = Object.values(SVE);
const SVE_CARD_VARIATIONS = SVE_CARDS.flatMap(card => card.variations);
const SVE_DOC: Doc<"sve"> = {
	filename: "SVE.md",
	title: "Energy cards",
	description: "Cards with the 'SVE' set symbol provided with other Scarlet & Violet - 151 products.",
	metrics: [
		{
			title: "Totals",
			columns: [
				"Set",
				"All"
			],
			values: [
				SVE_CARDS.length.toString(),
				SVE_CARD_VARIATIONS.length.toString()
			]
		},
		{
			title: "Variations",
			columns: [
				"Reverse Holo",
				"Reverse Cosmos Holo",
				"Cosmos Holo",
				"Stamped"
			],
			values: [
				SVE_CARD_VARIATIONS.filter(variation => variation.holofoil === "reverse").length.toString(),
				SVE_CARD_VARIATIONS.filter(variation => variation.holofoil === "reverse-cosmos").length.toString(),
				SVE_CARD_VARIATIONS.filter(variation => variation.holofoil === "cosmos").length.toString(),
				SVE_CARD_VARIATIONS.filter(variation => variation.stamp !== "none").length.toString()
			]
		}
	],
	cards: SVE_CARDS
} as const;

export const DOCS = [MEW_DOC, SVP_DOC, SVE_DOC] as const;