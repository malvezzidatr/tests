import { getFlyingSuperHeros } from "../super-heroes";

test('returns super heros that can fly', () => {
    const flyingHeros = getFlyingSuperHeros()
    expect(flyingHeros).toMatchInlineSnapshot(`
[
  {
    "name": "Dynaguy",
    "powers": [
      "disintegration ray",
      "fly",
    ],
  },
  {
    "name": "Apogee",
    "powers": [
      "gravity control",
      "fly",
    ],
  },
  {
    "name": "Jack-Jack",
    "powers": [
      "shapeshifting",
      "fly",
    ],
  },
]
`)
})