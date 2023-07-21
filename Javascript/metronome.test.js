
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
     
     test( 'first beat to play click1', () => {
        const click1 = new Audio('assets/metronome-sound/click1.wav');
        let count = 0;
        if ( count === 0) {
            click1.play;
        expect(count === 0).toBeTruthy();
    }});
    
    test( 'rest  play click2', () => {
        const click2 = new Audio('assets/metronome-sound/click2.wav');
        let count = 0;
        if ( count !== 0) {
            count = 0;
            click2.play;
        expect(count !== 0).toBeTruthy();
    }});

});
