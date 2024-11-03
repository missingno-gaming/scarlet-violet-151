# Pokémon Scarlet & Violet - 151

A fully-typed data library for every card in Pokémon Scarlet & Violet - 151.

## Cards

> [!NOTE]  
> The SVP set only includes promos from 151 sources

Card data can be previewed via the auto-generated card lists:

* [Main set (MEW)](/docs/MEW.md)
* [Promos (SVP)](/docs/MEW.md)
* [Energies (SVE)](/docs/MEW.md)

## Installation and Quickstart

```
npm i @missingnogaming/scarlet-violet-151
```

```typescript
const { MEW, SVP, SVE } = await import("@missingnogaming/scarlet-violet-151");

const charmander = MEW["mew-004"];
console.log(charmander.name); // "Charmander"

const charmanderPromo = SVP["svp-047"];
console.log(charmanderPromo.name); // "Charmander"

const basicFireEnergy = SVE["sve-002"];
console.log(basicFireEnergy.name); // "Basic Fire Energy"
```

## Usage

Cards are organized by set in corresponding key/value objects.

```typescript
const { MEW, SVP, SVE } = await import("@missingnogaming/scarlet-violet-151");
```

Types for each object and field are exported as well.

```typescript
import type {
	Art,
	Card,
	Holofoil,
	Material,
	Rarity,
	Series,
	Size,
	Source,
	Stamp,
	Type,
	Variation
} from "@missingnogaming/scarlet-violet-151";
```

The keys for each set object follow a `"<set>-<three-digit-number>"` format.

```typescript
const charmander = MEW["mew-004"];
console.log(charmander.series); // "mew"
console.log(charmander.number); // 4
console.log(charmander.name);   // "Charmander
console.log(charmander.type);   // "pokemon"
console.log(charmander.rarity); // "common"
```

Key uniqueness ensures set objects can be joined without collisions.

```typescript
const allCards = { ...MEW, ...SVP, ...SVE };
const charmander = allCards["mew-004"];
const charmanderPromo = allCards["svp-047"];
const fireEnergy = allCards["sve-002"];
```

Set objects can be enumerated using `Object.values()`.

```typescript
const nonEnergyCards = Object.values({ ...MEW, ...SVP });
console.log(nonEnergyCards.length);
```

Variations (i.e. reverse holo, stamped, etc.) are a card field.

```typescript
const charmander = MEW["mew-004"];
charmander.variations.forEach(variation => {
	console.log(variation.art);      // i.e. "standard", "full", etc.
	console.log(variation.holofoil); // i.e. "reverse", "cosmos", etc.
	console.log(variation.material); // i.e. "metal", etc.
	console.log(variation.size);     // i.e. "jumbo", etc.
	console.log(variation.stamp);    // i.e. "gamestop", "professor-program", etc.
	console.log(variation.sources);  // i.e. ["booster-pack", "elite-trainer-box", ...]
});
```

## Questions and answers

#### 1. Why aren't HD and pixel cosmos holos seperated into their own variations?

The Pokémon Company, CGC, and PSA do not recognize HD/pixel cosmos holofoil in 151 as variations.<br/>
Leftover HD holofoil was likely used in the initial print run of 151 until the sheets were replaced.

It's unclear whether HD holofoil in 151 will be considered misprints since both are 'Cosmos Holo'.<br/>
To date, no 151 HD holofoil cards have been graded as misprints by CGC or PSA.

#### 2. Why aren't cards like the Kanto starters in the Poster Collection Box listed as promos?

Only cards that belong to the Scarlet Violet Promo (SVP) set are promos.<br/>

Cards like the cosmos holo Charmander belong to the MEW set with their corresponding MEW set number.<br/>
While many folks refer to these cards as promos, it's more accurate to refer to them as promo**tional**.<br/>

#### 3. Why the discrepancy between `rarity` and `variation` fields?

Promo and energy cards do not have a rarity, as such their `rarity` fields are `undefined`.

Certain variation fields, like `material` and `size`, only differ for a single card (i.e. jumbo size Zapdos ex promo,
metal Mew ex).<br/>
While it's verbose to explicitly define other cards as 'standard' size/material, the size and material of these cards
is _technically_ defined.

## License

Licensed under the Apache License, Version 2.0.

## Copyright

Pokémon is a registered trademark of Nintendo of America Inc.

MissingNo. Gaming is not endorsed by or affiliated with Nintendo of America Inc., The Pokémon Company International, or
their affiliates.