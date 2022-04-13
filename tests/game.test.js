const ScoreCard = require('../scores/game')

describe('Score', () => {
    const scoreCard = new ScoreCard;

    it('gives you an empty score card', () => {
        expect(scoreCard.currentScore).toEqual (0);
    })
});