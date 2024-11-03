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

import { CardMap } from "./types.js";
import { COSMOS_HOLO, EX, FULL_ART } from "./constants.js";


export const SVP = {
	"svp-046": {
		id: "svp-046",
		series: "svp",
		number: 46,
		name: "Bulbasaur",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...COSMOS_HOLO,
				id: "svp-046-cos",
				sources: ["poster-collection-box"]
			}
		]
	},
	"svp-047": {
		id: "svp-047",
		series: "svp",
		number: 47,
		name: "Charmander",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...COSMOS_HOLO,
				id: "svp-047-cos",
				sources: ["poster-collection-box"]
			}
		]
	},
	"svp-048": {
		id: "svp-048",
		series: "svp",
		number: 48,
		name: "Squirtle",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...COSMOS_HOLO,
				id: "svp-048-cos",
				sources: ["poster-collection-box"]
			}
		]
	},
	"svp-049": {
		id: "svp-049",
		series: "svp",
		number: 49,
		name: "Zapdos ex",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...EX,
				id: "svp-049-std",
				sources: ["zapdos-ex-collection-box"]
			},
			{
				...EX,
				id: "svp-049-std-jumbo",
				size: "jumbo",
				sources: ["zapdos-ex-collection-box"]
			}
		]
	},
	"svp-050": {
		id: "svp-050",
		series: "svp",
		number: 50,
		name: "Alakazam ex",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...EX,
				id: "svp-050-std",
				sources: ["alakazam-ex-collection-box"]
			}
		]
	},
	"svp-051": {
		id: "svp-051",
		series: "svp",
		number: 51,
		name: "Snorlax",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...FULL_ART,
				id: "svp-051-std",
				sources: ["elite-trainer-box"]
			},
			{
				...FULL_ART,
				id: "svp-051-std-pokcen",
				stamp: "pokemon-center",
				sources: ["pokemon-center-elite-trainer-box"]
			}
		]
	},
	"svp-052": {
		id: "svp-052",
		series: "svp",
		number: 52,
		name: "Mewtwo",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...FULL_ART,
				id: "svp-052-std",
				sources: ["ultra-premium-collection"]
			}
		]
	},
	"svp-053": {
		id: "svp-053",
		series: "svp",
		number: 53,
		name: "Mew ex",
		type: "pokemon",
		rarity: undefined,
		variations: [
			{
				...FULL_ART,
				id: "svp-053-std",
				sources: ["ultra-premium-collection"]
			}
		]
	}
} as const satisfies CardMap<"svp">;