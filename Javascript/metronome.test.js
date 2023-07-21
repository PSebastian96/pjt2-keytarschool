
const {playClick} = ('./metronome.js');
describe("playClick", () => {
     test('count should be 0, when the beat is changed-start a new round', () => {
        let count = 0;
        let beat = 4;
        while (count === beat) {
            count = 0;
        }
        expect(count).toBe(0);
     });

    test( '', () => {})

});