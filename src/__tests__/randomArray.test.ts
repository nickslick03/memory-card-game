import { randomArray } from "../randomArray";

test('randomArray', () => {
    expect(randomArray([])).toEqual([]);

    console.log(randomArray(['a', 'b', 'c']));

    expect(randomArray(['a', 'b', 'c']).sort()).toEqual(['a', 'b', 'c']);
});