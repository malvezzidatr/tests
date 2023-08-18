import { getFlyingSuperHeros } from "../super-heroes";

test('returns super heros that can fly', () => {
    const flyingHeros = getFlyingSuperHeros()
    expect(flyingHeros).toEqual([{"name": "Dynaguy", "powers": ["disintegration ray", "fly"]}, {"name": "Apogee", "powers": ["gravity control", "fly"]}])
})