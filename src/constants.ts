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

import { Variation } from "./types.js";


type VariationConst = Omit<Variation<any>, "id">;

export const NON_HOLO: VariationConst = {
	art: "standard",
	holofoil: "none",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["booster-pack"]
} as const;

export const REVERSE_HOLO: VariationConst = {
	art: "standard",
	holofoil: "reverse",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["booster-pack"]
} as const;

export const REVERSE_COSMOS_HOLO: VariationConst = {
	art: "standard",
	holofoil: "reverse-cosmos",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["costco-mini-tin-five-pack"]
} as const;

export const HOLO: VariationConst = {
	art: "standard",
	holofoil: "holo",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["booster-pack"]
} as const;

export const COSMOS_HOLO: VariationConst = {
	art: "standard",
	holofoil: "cosmos",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["booster-pack"]
} as const;

export const EX: VariationConst = {
	art: "standard",
	holofoil: "ex",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["booster-pack"]
} as const;

export const FULL_ART: VariationConst = {
	art: "full",
	holofoil: "full-art",
	material: "standard",
	size: "standard",
	stamp: "none",
	sources: ["booster-pack"]
} as const;