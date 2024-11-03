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

export type Art =
  | "standard"
  | "full";

export interface Card<T extends Series> {
  readonly id: string;
  readonly series: T;
  readonly number: number;
  readonly name: string;
  readonly type: T extends "sve" ? "energy" : Type;
  readonly rarity: T extends "mew" ? Rarity : undefined;
  readonly variations: Variation<T>[];
}

type CardId<T extends Series> =
  T extends "mew" ? `mew-${0 | 1 | 2}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
    : T extends "svp" ? `svp-${0}${4 | 5}${0 | 1 | 2 | 3 | 6 | 7 | 8 | 9}`
      : T extends "sve" ? `sve-${0}${0}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
        : never;

export type CardMap<T extends Series> = Partial<Record<CardId<T>, Card<T>>>;

export type Holofoil =
  | "none"
  | "holo"
  | "reverse"
  | "cosmos"
  | "reverse-cosmos"
  | "ex"
  | "full-art";

export type Material =
  | "standard"
  | "metal";

export type Rarity =
  | "common"
  | "uncommon"
  | "rare"
  | "double-rare"
  | "ultra-rare"
  | "illustration-rare"
  | "special-illustration-rare"
  | "hyper-rare";

export type Series =
  | "mew"
  | "svp"
  | "sve";

export type Size =
  | "standard"
  | "jumbo";

export type Source =
  | "booster-pack"
  | "poster-collection-box"
  | "zapdos-ex-collection-box"
  | "alakazam-ex-collection-box"
  | "elite-trainer-box"
  | "pokemon-center-elite-trainer-box"
  | "pokemon-center-exclusive"
  | "ultra-premium-collection"
  | "charizard-ex-super-premium-collection"
  | "trainers-toolkit-2024"
  | "gamestop-exclusive"
  | "eb-games-exclusive"
  | "poke-post-exclusive"
  | "play-pokemon-series-five-prize-pack"
  | "professor-program-award"
  | "best-buy-exclusive"
  | "costco-mini-tin-five-pack";

export type Stamp =
  | "none"
  | "scarlet-violet-151"
  | "gamestop"
  | "eb-games"
  | "pokemon-together"
  | "pokemon-center"
  | "professor-program"
  | "play-pokemon";

export type Type =
  | "pokemon"
  | "trainer"
  | "energy";

type VariationIdType<T extends Series> =
  T extends "mew" ? "std" | "cos" | "rev" | "revcos" | "nonholo"
    : "std" | "cos";
type VariationIdModifier<T extends Series> =
  T extends "mew" ? "play" | "prof" | "best" | "game" | "eb" | "pokcen" | "poktog" | "metal"
    : T extends "svp" ? "jumbo" | "pokcen"
      : "play" | "prof"
type VariationId<T extends Series> =
  | `${CardId<T>}-${VariationIdType<T>}`
  | `${CardId<T>}-${VariationIdType<T>}-${VariationIdModifier<T>}`;

export interface Variation<T extends Series> {
  readonly id: VariationId<T>;
  readonly art: Art;
  readonly holofoil: Holofoil;
  readonly material: Material;
  readonly size: Size;
  readonly stamp: Stamp;
  readonly sources: Source[];
}