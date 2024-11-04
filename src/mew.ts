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
import { COSMOS_HOLO, EX, FULL_ART, HOLO, NON_HOLO, REVERSE_COSMOS_HOLO, REVERSE_HOLO } from "./constants.js";


export const MEW = {
	"mew-001": {
		id: "mew-001",
		series: "mew",
		number: 1,
		name: "Bulbasaur",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-001-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-001-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-001-rev-best",
				stamp: "scarlet-violet-151",
				sources: ["best-buy-exclusive"]
			},
			{
				...REVERSE_COSMOS_HOLO,
				id: "mew-001-revcos"
			}
		]
	},
	"mew-002": {
		id: "mew-002",
		series: "mew",
		number: 2,
		name: "Ivysaur",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-002-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-002-rev"
			}
		]
	},
	"mew-003": {
		id: "mew-003",
		series: "mew",
		number: 3,
		name: "Venusaur ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-003-std"
			}
		]
	},
	"mew-004": {
		id: "mew-004",
		series: "mew",
		number: 4,
		name: "Charmander",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-004-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-004-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-004-rev-game",
				stamp: "gamestop",
				sources: ["gamestop-exclusive"]
			},
			{
				...REVERSE_HOLO,
				id: "mew-004-rev-eb",
				stamp: "eb-games",
				sources: ["eb-games-exclusive"]
			},
			{
				...REVERSE_COSMOS_HOLO,
				id: "mew-004-revcos"
			},
			{
				...COSMOS_HOLO,
				id: "mew-004-cos",
				sources: ["charizard-ex-super-premium-collection"]
			}
		]
	},
	"mew-005": {
		id: "mew-005",
		series: "mew",
		number: 5,
		name: "Charmeleon",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-005-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-005-rev"
			},
			{
				...COSMOS_HOLO,
				id: "mew-005-cos",
				sources: [
					"charizard-ex-super-premium-collection"
				]
			}
		]
	},
	"mew-006": {
		id: "mew-006",
		series: "mew",
		number: 6,
		name: "Charizard ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-006-std"
			}
		]
	},
	"mew-007": {
		id: "mew-007",
		series: "mew",
		number: 7,
		name: "Squirtle",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-007-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-007-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-007-rev-pokcen",
				stamp: "pokemon-center",
				sources: ["pokemon-center-exclusive"]
			},
			{
				...REVERSE_COSMOS_HOLO,
				id: "mew-007-revcos"
			}
		]
	},
	"mew-008": {
		id: "mew-008",
		series: "mew",
		number: 8,
		name: "Wartortle",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-008-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-008-rev"
			}
		]
	},
	"mew-009": {
		id: "mew-009",
		series: "mew",
		number: 9,
		name: "Blastoise ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-009-std"
			}
		]
	},
	"mew-010": {
		id: "mew-010",
		series: "mew",
		number: 10,
		name: "Caterpie",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-010-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-010-rev"
			}
		]
	},
	"mew-011": {
		id: "mew-011",
		series: "mew",
		number: 11,
		name: "Metapod",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-011-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-011-rev"
			}
		]
	},
	"mew-012": {
		id: "mew-012",
		series: "mew",
		number: 12,
		name: "Butterfree",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-012-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-012-rev"
			}
		]
	},
	"mew-013": {
		id: "mew-013",
		series: "mew",
		number: 13,
		name: "Weedle",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-013-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-013-rev"
			}
		]
	},
	"mew-014": {
		id: "mew-014",
		series: "mew",
		number: 14,
		name: "Kakuna",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-014-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-014-rev"
			}
		]
	},
	"mew-015": {
		id: "mew-015",
		series: "mew",
		number: 15,
		name: "Beedrill",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-015-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-015-rev"
			}
		]
	},
	"mew-016": {
		id: "mew-016",
		series: "mew",
		number: 16,
		name: "Pidgey",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-016-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-016-rev"
			}
		]
	},
	"mew-017": {
		id: "mew-017",
		series: "mew",
		number: 17,
		name: "Pidgeotto",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-017-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-017-rev"
			}
		]
	},
	"mew-018": {
		id: "mew-018",
		series: "mew",
		number: 18,
		name: "Pidgeot",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-018-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-018-rev"
			}
		]
	},
	"mew-019": {
		id: "mew-019",
		series: "mew",
		number: 19,
		name: "Rattata",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-019-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-019-rev"
			}
		]
	},
	"mew-020": {
		id: "mew-020",
		series: "mew",
		number: 20,
		name: "Raticate",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-020-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-020-rev"
			}
		]
	},
	"mew-021": {
		id: "mew-021",
		series: "mew",
		number: 21,
		name: "Spearow",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-021-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-021-rev"
			}
		]
	},
	"mew-022": {
		id: "mew-022",
		series: "mew",
		number: 22,
		name: "Fearow",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-022-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-022-rev"
			}
		]
	},
	"mew-023": {
		id: "mew-023",
		series: "mew",
		number: 23,
		name: "Ekans",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-023-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-023-rev"
			}
		]
	},
	"mew-024": {
		id: "mew-024",
		series: "mew",
		number: 24,
		name: "Arbok ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-024-std"
			}
		]
	},
	"mew-025": {
		id: "mew-025",
		series: "mew",
		number: 25,
		name: "Pikachu",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-025-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-025-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-025-rev-poktog",
				stamp: "pokemon-together",
				sources: ["poke-post-exclusive"]
			},
			{
				...REVERSE_COSMOS_HOLO,
				id: "mew-025-revcos"
			}
		]
	},
	"mew-026": {
		id: "mew-026",
		series: "mew",
		number: 26,
		name: "Raichu",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-026-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-026-rev"
			}
		]
	},
	"mew-027": {
		id: "mew-027",
		series: "mew",
		number: 27,
		name: "Sandshrew",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-027-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-027-rev"
			}
		]
	},
	"mew-028": {
		id: "mew-028",
		series: "mew",
		number: 28,
		name: "Sandslash",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-028-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-028-rev"
			}
		]
	},
	"mew-029": {
		id: "mew-029",
		series: "mew",
		number: 29,
		name: "Nidoran♀",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-029-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-029-rev"
			}
		]
	},
	"mew-030": {
		id: "mew-030",
		series: "mew",
		number: 30,
		name: "Nidorina",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-030-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-030-rev"
			}
		]
	},
	"mew-031": {
		id: "mew-031",
		series: "mew",
		number: 31,
		name: "Nidoqueen",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-031-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-031-rev"
			}
		]
	},
	"mew-032": {
		id: "mew-032",
		series: "mew",
		number: 32,
		name: "Nidoran♂",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-032-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-032-rev"
			}
		]
	},
	"mew-033": {
		id: "mew-033",
		series: "mew",
		number: 33,
		name: "Nidorino",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-033-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-033-rev"
			}
		]
	},
	"mew-034": {
		id: "mew-034",
		series: "mew",
		number: 34,
		name: "Nidoking",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-034-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-034-rev"
			}
		]
	},
	"mew-035": {
		id: "mew-035",
		series: "mew",
		number: 35,
		name: "Clefairy",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-035-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-035-rev"
			}
		]
	},
	"mew-036": {
		id: "mew-036",
		series: "mew",
		number: 36,
		name: "Clefable",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-036-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-036-rev"
			}
		]
	},
	"mew-037": {
		id: "mew-037",
		series: "mew",
		number: 37,
		name: "Vulpix",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-037-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-037-rev"
			}
		]
	},
	"mew-038": {
		id: "mew-038",
		series: "mew",
		number: 38,
		name: "Ninetails ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-038-std"
			}
		]
	},
	"mew-039": {
		id: "mew-039",
		series: "mew",
		number: 39,
		name: "Jigglypuff",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-039-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-039-rev"
			}
		]
	},
	"mew-040": {
		id: "mew-040",
		series: "mew",
		number: 40,
		name: "Wigglytuff ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-040-std"
			}
		]
	},
	"mew-041": {
		id: "mew-041",
		series: "mew",
		number: 41,
		name: "Zubat",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-041-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-041-rev"
			}
		]
	},
	"mew-042": {
		id: "mew-042",
		series: "mew",
		number: 42,
		name: "Golbat",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-042-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-042-rev"
			}
		]
	},
	"mew-043": {
		id: "mew-043",
		series: "mew",
		number: 43,
		name: "Oddish",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-043-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-043-rev"
			}
		]
	},
	"mew-044": {
		id: "mew-044",
		series: "mew",
		number: 44,
		name: "Gloom",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-044-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-044-rev"
			}
		]
	},
	"mew-045": {
		id: "mew-045",
		series: "mew",
		number: 45,
		name: "Vileplume",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-045-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-045-rev"
			}
		]
	},
	"mew-046": {
		id: "mew-046",
		series: "mew",
		number: 46,
		name: "Paras",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-046-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-046-rev"
			}
		]
	},
	"mew-047": {
		id: "mew-047",
		series: "mew",
		number: 47,
		name: "Parasect",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-047-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-047-rev"
			}
		]
	},
	"mew-048": {
		id: "mew-048",
		series: "mew",
		number: 48,
		name: "Venonat",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-048-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-048-rev"
			}
		]
	},
	"mew-049": {
		id: "mew-049",
		series: "mew",
		number: 49,
		name: "Venomoth",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-049-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-049-rev"
			}
		]
	},
	"mew-050": {
		id: "mew-050",
		series: "mew",
		number: 50,
		name: "Diglett",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-050-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-050-rev"
			}
		]
	},
	"mew-051": {
		id: "mew-051",
		series: "mew",
		number: 51,
		name: "Dugtrio",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-051-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-051-rev"
			}
		]
	},
	"mew-052": {
		id: "mew-052",
		series: "mew",
		number: 52,
		name: "Meowth",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-052-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-052-rev"
			}
		]
	},
	"mew-053": {
		id: "mew-053",
		series: "mew",
		number: 53,
		name: "Persian",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-053-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-053-rev"
			}
		]
	},
	"mew-054": {
		id: "mew-054",
		series: "mew",
		number: 54,
		name: "Psyduck",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-054-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-054-rev"
			}
		]
	},
	"mew-055": {
		id: "mew-055",
		series: "mew",
		number: 55,
		name: "Golduck",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-055-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-055-rev"
			}
		]
	},
	"mew-056": {
		id: "mew-056",
		series: "mew",
		number: 56,
		name: "Mankey",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-056-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-056-rev"
			}
		]
	},
	"mew-057": {
		id: "mew-057",
		series: "mew",
		number: 57,
		name: "Primeape",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-057-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-057-rev"
			}
		]
	},
	"mew-058": {
		id: "mew-058",
		series: "mew",
		number: 58,
		name: "Growlithe",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-058-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-058-rev"
			}
		]
	},
	"mew-059": {
		id: "mew-059",
		series: "mew",
		number: 59,
		name: "Arcanine",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-059-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-059-rev"
			}
		]
	},
	"mew-060": {
		id: "mew-060",
		series: "mew",
		number: 60,
		name: "Poliwag",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-060-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-060-rev"
			}
		]
	},
	"mew-061": {
		id: "mew-061",
		series: "mew",
		number: 61,
		name: "Poliwhirl",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-061-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-061-rev"
			}
		]
	},
	"mew-062": {
		id: "mew-062",
		series: "mew",
		number: 62,
		name: "Poliwrath",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-062-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-062-rev"
			}
		]
	},
	"mew-063": {
		id: "mew-063",
		series: "mew",
		number: 63,
		name: "Abra",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-063-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-063-rev"
			},
			{
				...COSMOS_HOLO,
				id: "mew-063-cos",
				sources: ["alakazam-ex-collection-box"]
			}
		]
	},
	"mew-064": {
		id: "mew-064",
		series: "mew",
		number: 64,
		name: "Kadabra",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-064-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-064-rev"
			},
			{
				...COSMOS_HOLO,
				id: "mew-064-cos",
				sources: ["alakazam-ex-collection-box"]
			}
		]
	},
	"mew-065": {
		id: "mew-065",
		series: "mew",
		number: 65,
		name: "Alakazam ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-065-std"
			}
		]
	},
	"mew-066": {
		id: "mew-066",
		series: "mew",
		number: 66,
		name: "Machop",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-066-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-066-rev"
			}
		]
	},
	"mew-067": {
		id: "mew-067",
		series: "mew",
		number: 67,
		name: "Machoke",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-067-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-067-rev"
			}
		]
	},
	"mew-068": {
		id: "mew-068",
		series: "mew",
		number: 68,
		name: "Machamp",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-068-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-068-rev"
			}
		]
	},
	"mew-069": {
		id: "mew-069",
		series: "mew",
		number: 69,
		name: "Bellsprout",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-069-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-069-rev"
			}
		]
	},
	"mew-070": {
		id: "mew-070",
		series: "mew",
		number: 70,
		name: "Weepingbell",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-070-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-070-rev"
			}
		]
	},
	"mew-071": {
		id: "mew-071",
		series: "mew",
		number: 71,
		name: "Victreebel",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-071-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-071-rev"
			}
		]
	},
	"mew-072": {
		id: "mew-072",
		series: "mew",
		number: 72,
		name: "Tentacool",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-072-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-072-rev"
			}
		]
	},
	"mew-073": {
		id: "mew-073",
		series: "mew",
		number: 73,
		name: "Tentacruel",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-073-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-073-rev"
			}
		]
	},
	"mew-074": {
		id: "mew-074",
		series: "mew",
		number: 74,
		name: "Geodude",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-074-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-074-rev"
			}
		]
	},
	"mew-075": {
		id: "mew-075",
		series: "mew",
		number: 75,
		name: "Graveler",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-075-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-075-rev"
			}
		]
	},
	"mew-076": {
		id: "mew-076",
		series: "mew",
		number: 76,
		name: "Golem ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-076-std"
			}
		]
	},
	"mew-077": {
		id: "mew-077",
		series: "mew",
		number: 77,
		name: "Ponyta",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-077-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-077-rev"
			}
		]
	},
	"mew-078": {
		id: "mew-078",
		series: "mew",
		number: 78,
		name: "Rapidash",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-078-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-078-rev"
			}
		]
	},
	"mew-079": {
		id: "mew-079",
		series: "mew",
		number: 79,
		name: "Slowpoke",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-079-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-079-rev"
			}
		]
	},
	"mew-080": {
		id: "mew-080",
		series: "mew",
		number: 80,
		name: "Slowbro",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-080-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-080-rev"
			}
		]
	},
	"mew-081": {
		id: "mew-081",
		series: "mew",
		number: 81,
		name: "Magnemite",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-081-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-081-rev"
			}
		]
	},
	"mew-082": {
		id: "mew-082",
		series: "mew",
		number: 82,
		name: "Magneton",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-082-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-082-rev"
			}
		]
	},
	"mew-083": {
		id: "mew-083",
		series: "mew",
		number: 83,
		name: "Farfetch'd",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-083-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-083-rev"
			}
		]
	},
	"mew-084": {
		id: "mew-084",
		series: "mew",
		number: 84,
		name: "Doduo",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-084-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-084-rev"
			}
		]
	},
	"mew-085": {
		id: "mew-085",
		series: "mew",
		number: 85,
		name: "Dodrio",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-085-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-085-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-085-rev-play",
				stamp: "play-pokemon",
				sources: ["play-pokemon-series-five-prize-pack"]
			}
		]
	},
	"mew-086": {
		id: "mew-086",
		series: "mew",
		number: 86,
		name: "Seel",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-086-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-086-rev"
			}
		]
	},
	"mew-087": {
		id: "mew-087",
		series: "mew",
		number: 87,
		name: "Dewgong",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-087-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-087-rev"
			}
		]
	},
	"mew-088": {
		id: "mew-088",
		series: "mew",
		number: 88,
		name: "Grimer",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-088-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-088-rev"
			}
		]
	},
	"mew-089": {
		id: "mew-089",
		series: "mew",
		number: 89,
		name: "Muk",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-089-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-089-rev"
			}
		]
	},
	"mew-090": {
		id: "mew-090",
		series: "mew",
		number: 90,
		name: "Shellder",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-090-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-090-rev"
			}
		]
	},
	"mew-091": {
		id: "mew-091",
		series: "mew",
		number: 91,
		name: "Cloyster",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-091-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-091-rev"
			}
		]
	},
	"mew-092": {
		id: "mew-092",
		series: "mew",
		number: 92,
		name: "Gastly",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-092-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-092-rev"
			}
		]
	},
	"mew-093": {
		id: "mew-093",
		series: "mew",
		number: 93,
		name: "Haunter",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-093-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-093-rev"
			}
		]
	},
	"mew-094": {
		id: "mew-094",
		series: "mew",
		number: 94,
		name: "Gengar",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-094-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-094-rev"
			}
		]
	},
	"mew-095": {
		id: "mew-095",
		series: "mew",
		number: 95,
		name: "Onix",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-095-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-095-rev"
			}
		]
	},
	"mew-096": {
		id: "mew-096",
		series: "mew",
		number: 96,
		name: "Drowzee",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-096-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-096-rev"
			}
		]
	},
	"mew-097": {
		id: "mew-097",
		series: "mew",
		number: 97,
		name: "Hypno",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-097-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-097-rev"
			}
		]
	},
	"mew-098": {
		id: "mew-098",
		series: "mew",
		number: 98,
		name: "Krabby",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-098-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-098-rev"
			}
		]
	},
	"mew-099": {
		id: "mew-099",
		series: "mew",
		number: 99,
		name: "Kingler",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-099-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-099-rev"
			}
		]
	},
	"mew-100": {
		id: "mew-100",
		series: "mew",
		number: 100,
		name: "Voltorb",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-100-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-100-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-100-rev-prof",
				stamp: "professor-program",
				sources: ["professor-program-award"]
			},
			{
				...COSMOS_HOLO,
				id: "mew-100-cos-prof",
				stamp: "professor-program",
				sources: ["professor-program-award"]
			}
		]
	},
	"mew-101": {
		id: "mew-101",
		series: "mew",
		number: 101,
		name: "Electrode",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-101-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-101-rev"
			}
		]
	},
	"mew-102": {
		id: "mew-102",
		series: "mew",
		number: 102,
		name: "Exeggcute",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-102-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-102-rev"
			}
		]
	},
	"mew-103": {
		id: "mew-103",
		series: "mew",
		number: 103,
		name: "Exeggutor",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-103-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-103-rev"
			}
		]
	},
	"mew-104": {
		id: "mew-104",
		series: "mew",
		number: 104,
		name: "Cubone",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-104-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-104-rev"
			}
		]
	},
	"mew-105": {
		id: "mew-105",
		series: "mew",
		number: 105,
		name: "Marowak",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-105-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-105-rev"
			}
		]
	},
	"mew-106": {
		id: "mew-106",
		series: "mew",
		number: 106,
		name: "Hitmonlee",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-106-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-106-rev"
			}
		]
	},
	"mew-107": {
		id: "mew-107",
		series: "mew",
		number: 107,
		name: "Hitmonchan",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-107-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-107-rev"
			}
		]
	},
	"mew-108": {
		id: "mew-108",
		series: "mew",
		number: 108,
		name: "Likitung",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-108-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-108-rev"
			}
		]
	},
	"mew-109": {
		id: "mew-109",
		series: "mew",
		number: 109,
		name: "Koffing",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-109-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-109-rev"
			}
		]
	},
	"mew-110": {
		id: "mew-110",
		series: "mew",
		number: 110,
		name: "Weezing",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...NON_HOLO,
				id: "mew-110-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-110-rev"
			}
		]
	},
	"mew-111": {
		id: "mew-111",
		series: "mew",
		number: 111,
		name: "Rhyhorn",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-111-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-111-rev"
			}
		]
	},
	"mew-112": {
		id: "mew-112",
		series: "mew",
		number: 112,
		name: "Rhydon",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-112-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-112-rev"
			}
		]
	},
	"mew-113": {
		id: "mew-113",
		series: "mew",
		number: 113,
		name: "Chansey",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-113-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-113-rev"
			}
		]
	},
	"mew-114": {
		id: "mew-114",
		series: "mew",
		number: 114,
		name: "Tangela",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-114-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-114-rev"
			}
		]
	},
	"mew-115": {
		id: "mew-115",
		series: "mew",
		number: 115,
		name: "Kangaskhan ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-115-std"
			}
		]
	},
	"mew-116": {
		id: "mew-116",
		series: "mew",
		number: 116,
		name: "Horsea",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-116-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-116-rev"
			}
		]
	},
	"mew-117": {
		id: "mew-117",
		series: "mew",
		number: 117,
		name: "Seadra",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-117-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-117-rev"
			}
		]
	},
	"mew-118": {
		id: "mew-118",
		series: "mew",
		number: 118,
		name: "Goldeen",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-118-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-118-rev"
			}
		]
	},
	"mew-119": {
		id: "mew-119",
		series: "mew",
		number: 119,
		name: "Seaking",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-119-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-119-rev"
			}
		]
	},
	"mew-120": {
		id: "mew-120",
		series: "mew",
		number: 120,
		name: "Staryu",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-120-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-120-rev"
			}
		]
	},
	"mew-121": {
		id: "mew-121",
		series: "mew",
		number: 121,
		name: "Starmie",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-121-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-121-rev"
			}
		]
	},
	"mew-122": {
		id: "mew-122",
		series: "mew",
		number: 122,
		name: "Mr. Mime",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-122-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-122-rev"
			}
		]
	},
	"mew-123": {
		id: "mew-123",
		series: "mew",
		number: 123,
		name: "Scyther",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-123-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-123-rev"
			}
		]
	},
	"mew-124": {
		id: "mew-124",
		series: "mew",
		number: 124,
		name: "Jynx ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-124-std"
			}
		]
	},
	"mew-125": {
		id: "mew-125",
		series: "mew",
		number: 125,
		name: "Electabuzz",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-125-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-125-rev"
			},
			{
				...COSMOS_HOLO,
				id: "mew-125-cos",
				sources: ["zapdos-ex-collection-box"]
			}
		]
	},
	"mew-126": {
		id: "mew-126",
		series: "mew",
		number: 126,
		name: "Magmar",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-126-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-126-rev"
			}
		]
	},
	"mew-127": {
		id: "mew-127",
		series: "mew",
		number: 127,
		name: "Pinsir",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-127-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-127-rev"
			}
		]
	},
	"mew-128": {
		id: "mew-128",
		series: "mew",
		number: 128,
		name: "Tauros",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-128-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-128-rev"
			}
		]
	},
	"mew-129": {
		id: "mew-129",
		series: "mew",
		number: 129,
		name: "Magikarp",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-129-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-129-rev"
			}
		]
	},
	"mew-130": {
		id: "mew-130",
		series: "mew",
		number: 120,
		name: "Gyrados",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-130-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-130-rev"
			}
		]
	},
	"mew-131": {
		id: "mew-131",
		series: "mew",
		number: 131,
		name: "Lapras",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-131-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-131-rev"
			}
		]
	},
	"mew-132": {
		id: "mew-132",
		series: "mew",
		number: 132,
		name: "Ditto",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...NON_HOLO,
				id: "mew-132-nonholo",
				sources: ["trainers-toolkit-2024"]
			},
			{
				...HOLO,
				id: "mew-132-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-132-rev"
			}
		]
	},
	"mew-133": {
		id: "mew-133",
		series: "mew",
		number: 133,
		name: "Eevee",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-133-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-133-rev"
			},
			{
				...REVERSE_HOLO,
				id: "mew-133-rev-poktog",
				stamp: "pokemon-together",
				sources: ["poke-post-exclusive"]
			}
		]
	},
	"mew-134": {
		id: "mew-134",
		series: "mew",
		number: 134,
		name: "Vaporeon",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-134-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-134-rev"
			}
		]
	},
	"mew-135": {
		id: "mew-135",
		series: "mew",
		number: 135,
		name: "Jolteon",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-135-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-135-rev"
			}
		]
	},
	"mew-136": {
		id: "mew-136",
		series: "mew",
		number: 136,
		name: "Flareon",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-136-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-136-rev"
			}
		]
	},
	"mew-137": {
		id: "mew-137",
		series: "mew",
		number: 137,
		name: "Porygon",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-137-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-137-rev"
			}
		]
	},
	"mew-138": {
		id: "mew-138",
		series: "mew",
		number: 138,
		name: "Omanyte",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-138-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-138-rev"
			}
		]
	},
	"mew-139": {
		id: "mew-139",
		series: "mew",
		number: 139,
		name: "Omastar",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-139-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-139-rev"
			}
		]
	},
	"mew-140": {
		id: "mew-140",
		series: "mew",
		number: 140,
		name: "Kabuto",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-140-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-140-rev"
			}
		]
	},
	"mew-141": {
		id: "mew-141",
		series: "mew",
		number: 141,
		name: "Kabutops",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-141-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-141-rev"
			}
		]
	},
	"mew-142": {
		id: "mew-142",
		series: "mew",
		number: 142,
		name: "Aerodactyl",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-142-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-142-rev"
			}
		]
	},
	"mew-143": {
		id: "mew-143",
		series: "mew",
		number: 143,
		name: "Snorlax",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-143-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-143-rev"
			}
		]
	},
	"mew-144": {
		id: "mew-144",
		series: "mew",
		number: 144,
		name: "Articuno",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-144-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-144-rev"
			}
		]
	},
	"mew-145": {
		id: "mew-145",
		series: "mew",
		number: 145,
		name: "Zapdos ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-145-std"
			}
		]
	},
	"mew-146": {
		id: "mew-146",
		series: "mew",
		number: 146,
		name: "Moltres",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-146-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-146-rev"
			}
		]
	},
	"mew-147": {
		id: "mew-147",
		series: "mew",
		number: 147,
		name: "Dratini",
		type: "pokemon",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-147-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-147-rev"
			}
		]
	},
	"mew-148": {
		id: "mew-148",
		series: "mew",
		number: 148,
		name: "Dragonair",
		type: "pokemon",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-148-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-148-rev"
			}
		]
	},
	"mew-149": {
		id: "mew-149",
		series: "mew",
		number: 149,
		name: "Dragonite",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-149-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-149-rev"
			}
		]
	},
	"mew-150": {
		id: "mew-150",
		series: "mew",
		number: 150,
		name: "Mewtwo",
		type: "pokemon",
		rarity: "rare",
		variations: [
			{
				...HOLO,
				id: "mew-150-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-150-rev"
			}
		]
	},
	"mew-151": {
		id: "mew-151",
		series: "mew",
		number: 151,
		name: "Mew ex",
		type: "pokemon",
		rarity: "double-rare",
		variations: [
			{
				...EX,
				id: "mew-151-std"
			},
			{
				...EX,
				id: "mew-151-std-play",
				stamp: "play-pokemon",
				sources: ["play-pokemon-series-five-prize-pack"]
			}
		]
	},
	"mew-152": {
		id: "mew-152",
		series: "mew",
		number: 152,
		name: "Antique Dome Fossil",
		type: "trainer",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-152-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-152-rev"
			}
		]
	},
	"mew-153": {
		id: "mew-153",
		series: "mew",
		number: 153,
		name: "Antique Helix Fossil",
		type: "trainer",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-153-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-153-rev"
			}
		]
	},
	"mew-154": {
		id: "mew-154",
		series: "mew",
		number: 154,
		name: "Antique Old Amber",
		type: "trainer",
		rarity: "common",
		variations: [
			{
				...NON_HOLO,
				id: "mew-154-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-154-rev"
			}
		]
	},
	"mew-155": {
		id: "mew-155",
		series: "mew",
		number: 155,
		name: "Big Air Balloon",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-155-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-155-rev"
			}
		]
	},
	"mew-156": {
		id: "mew-156",
		series: "mew",
		number: 156,
		name: "Bill's Transfer",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-156-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-156-rev"
			}
		]
	},
	"mew-157": {
		id: "mew-157",
		series: "mew",
		number: 157,
		name: "Cycling Road",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-157-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-157-rev"
			}
		]
	},
	"mew-158": {
		id: "mew-158",
		series: "mew",
		number: 158,
		name: "Daisy's Help",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-158-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-158-rev"
			}
		]
	},
	"mew-159": {
		id: "mew-159",
		series: "mew",
		number: 159,
		name: "Energy Sticker",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-159-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-159-rev"
			}
		]
	},
	"mew-160": {
		id: "mew-160",
		series: "mew",
		number: 160,
		name: "Erika's Invitation",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-160-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-160-rev"
			}
		]
	},
	"mew-161": {
		id: "mew-161",
		series: "mew",
		number: 161,
		name: "Giovanni's Charisma",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-161-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-161-rev"
			}
		]
	},
	"mew-162": {
		id: "mew-162",
		series: "mew",
		number: 162,
		name: "Grabber",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-162-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-162-rev"
			}
		]
	},
	"mew-163": {
		id: "mew-163",
		series: "mew",
		number: 163,
		name: "Leftovers",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-163-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-163-rev"
			}
		]
	},
	"mew-164": {
		id: "mew-164",
		series: "mew",
		number: 164,
		name: "Protective Goggles",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-164-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-164-rev"
			}
		]
	},
	"mew-165": {
		id: "mew-165",
		series: "mew",
		number: 165,
		name: "Rigid Band",
		type: "trainer",
		rarity: "uncommon",
		variations: [
			{
				...NON_HOLO,
				id: "mew-165-std"
			},
			{
				...REVERSE_HOLO,
				id: "mew-165-rev"
			}
		]
	},
	"mew-166": {
		id: "mew-166",
		series: "mew",
		number: 166,
		name: "Bulbasaur",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-166-std"
			}
		]
	},
	"mew-167": {
		id: "mew-167",
		series: "mew",
		number: 167,
		name: "Ivysaur",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-167-std"
			}
		]
	},
	"mew-168": {
		id: "mew-168",
		series: "mew",
		number: 168,
		name: "Charmander",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-168-std"
			}
		]
	},
	"mew-169": {
		id: "mew-169",
		series: "mew",
		number: 169,
		name: "Charmeleon",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-169-std"
			}
		]
	},
	"mew-170": {
		id: "mew-170",
		series: "mew",
		number: 170,
		name: "Squirtle",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-170-std"
			}
		]
	},
	"mew-171": {
		id: "mew-171",
		series: "mew",
		number: 171,
		name: "Wartortle",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-171-std"
			}
		]
	},
	"mew-172": {
		id: "mew-172",
		series: "mew",
		number: 172,
		name: "Caterpie",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-172-std"
			}
		]
	},
	"mew-173": {
		id: "mew-173",
		series: "mew",
		number: 173,
		name: "Pikachu",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-173-std"
			}
		]
	},
	"mew-174": {
		id: "mew-174",
		series: "mew",
		number: 174,
		name: "Nidoking",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-174-std"
			}
		]
	},
	"mew-175": {
		id: "mew-175",
		series: "mew",
		number: 175,
		name: "Psyduck",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-175-std"
			}
		]
	},
	"mew-176": {
		id: "mew-176",
		series: "mew",
		number: 176,
		name: "Poliwhirl",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-176-std"
			}
		]
	},
	"mew-177": {
		id: "mew-177",
		series: "mew",
		number: 177,
		name: "Machoke",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-177-std"
			}
		]
	},
	"mew-178": {
		id: "mew-178",
		series: "mew",
		number: 178,
		name: "Tangela",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-178-std"
			}
		]
	},
	"mew-179": {
		id: "mew-179",
		series: "mew",
		number: 179,
		name: "Mr. Mime",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-179-std"
			}
		]
	},
	"mew-180": {
		id: "mew-180",
		series: "mew",
		number: 180,
		name: "Omanyte",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-180-std"
			}
		]
	},
	"mew-181": {
		id: "mew-181",
		series: "mew",
		number: 181,
		name: "Dragonair",
		type: "pokemon",
		rarity: "illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-181-std"
			}
		]
	},
	"mew-182": {
		id: "mew-182",
		series: "mew",
		number: 182,
		name: "Venusaur ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-182-std"
			}
		]
	},
	"mew-183": {
		id: "mew-183",
		series: "mew",
		number: 183,
		name: "Charizard ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-183-std"
			}
		]
	},
	"mew-184": {
		id: "mew-184",
		series: "mew",
		number: 184,
		name: "Blastoise ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-184-std"
			}
		]
	},
	"mew-185": {
		id: "mew-185",
		series: "mew",
		number: 185,
		name: "Arbok ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-185-std"
			}
		]
	},
	"mew-186": {
		id: "mew-186",
		series: "mew",
		number: 186,
		name: "Ninetails ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-186-std"
			}
		]
	},
	"mew-187": {
		id: "mew-187",
		series: "mew",
		number: 187,
		name: "Wigglytuff ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-187-std"
			}
		]
	},
	"mew-188": {
		id: "mew-188",
		series: "mew",
		number: 188,
		name: "Alakazam ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-188-std"
			}
		]
	},
	"mew-189": {
		id: "mew-189",
		series: "mew",
		number: 189,
		name: "Golem ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-189-std"
			}
		]
	},
	"mew-190": {
		id: "mew-190",
		series: "mew",
		number: 190,
		name: "Kangaskhan ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-190-std"
			}
		]
	},
	"mew-191": {
		id: "mew-191",
		series: "mew",
		number: 191,
		name: "Jynx ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-191-std"
			}
		]
	},
	"mew-192": {
		id: "mew-192",
		series: "mew",
		number: 192,
		name: "Zapdos ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-192-std"
			}
		]
	},
	"mew-193": {
		id: "mew-193",
		series: "mew",
		number: 193,
		name: "Mew ex",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-193-std"
			}
		]
	},
	"mew-194": {
		id: "mew-194",
		series: "mew",
		number: 194,
		name: "Bill's Transfer",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-194-std"
			}
		]
	},
	"mew-195": {
		id: "mew-195",
		series: "mew",
		number: 195,
		name: "Daisy's Help",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-195-std"
			}
		]
	},
	"mew-196": {
		id: "mew-196",
		series: "mew",
		number: 196,
		name: "Erika's Invitation",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-196-std"
			}
		]
	},
	"mew-197": {
		id: "mew-197",
		series: "mew",
		number: 197,
		name: "Giovanni's Charisma",
		type: "pokemon",
		rarity: "ultra-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-197-std"
			}
		]
	},
	"mew-198": {
		id: "mew-198",
		series: "mew",
		number: 198,
		name: "Venusaur ex",
		type: "pokemon",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-198-std"
			}
		]
	},
	"mew-199": {
		id: "mew-199",
		series: "mew",
		number: 199,
		name: "Charizard ex",
		type: "pokemon",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-199-std"
			}
		]
	},
	"mew-200": {
		id: "mew-200",
		series: "mew",
		number: 200,
		name: "Blastoise ex",
		type: "pokemon",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-200-std"
			}
		]
	},
	"mew-201": {
		id: "mew-201",
		series: "mew",
		number: 201,
		name: "Alakazam ex",
		type: "pokemon",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-201-std"
			}
		]
	},
	"mew-202": {
		id: "mew-202",
		series: "mew",
		number: 202,
		name: "Zapdos ex",
		type: "pokemon",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-202-std"
			}
		]
	},
	"mew-203": {
		id: "mew-203",
		series: "mew",
		number: 203,
		name: "Erika's Invitation",
		type: "trainer",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-203-std"
			}
		]
	},
	"mew-204": {
		id: "mew-204",
		series: "mew",
		number: 204,
		name: "Giovanni's Charisma",
		type: "pokemon",
		rarity: "special-illustration-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-204-std"
			}
		]
	},
	"mew-205": {
		id: "mew-205",
		series: "mew",
		number: 205,
		name: "Mew ex",
		type: "pokemon",
		rarity: "hyper-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-205-std"
			},
			{
				...FULL_ART,
				id: "mew-205-std-metal",
				material: "metal",
				sources: ["ultra-premium-collection"]
			}
		]
	},
	"mew-206": {
		id: "mew-206",
		series: "mew",
		number: 206,
		name: "Switch",
		type: "trainer",
		rarity: "hyper-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-206-std"
			}
		]
	},
	"mew-207": {
		id: "mew-207",
		series: "mew",
		number: 207,
		name: "Basic Psychic Energy",
		type: "energy",
		rarity: "hyper-rare",
		variations: [
			{
				...FULL_ART,
				id: "mew-207-std"
			}
		]
	}
} as const satisfies CardMap<"mew">;