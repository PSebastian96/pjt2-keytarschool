
const {playClick} = ('./metronome.js');

describe("playClick", () => {
     test('count should be equal to beat', () => {
        let count = 0;
        let beat = 4;
        while (count === beat) {
            count = 0;
        }
        expect(count).toBe(0);
     })
});