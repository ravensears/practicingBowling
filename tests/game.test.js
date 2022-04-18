const ScoreCard = require('../scores/game')

describe('Score', () => {
    const scoreCard = new ScoreCard;

    it('gives you an empty score card', () => {
        expect(scoreCard.currentScore).toEqual(0);
    });

    it('adds roll points', () => {
        scoreCard.addRoll(10);
        expect(scoreCard.firstRoll).toEqual(10);
    });

    it('adds second roll points', () => {
        scoreCard.addRoll(2);
        expect(scoreCard.secondRoll).toEqual(2);
    });

    it('adds bonus points', () => {
        scoreCard.bonusRoll(10);
        expect(scoreCard.firstBonus).toEqual(10);
    });

    it('adds a second bonus score', () => {
        scoreCard.bonusRoll(3);
        scoreCard.bonusRoll(10);
        expect(scoreCard.firstBonus).toEqual(10);
    });

    it('accounts for a strike', () => {
        scoreCard.addRoll(10);
        expect(scoreCard.strike()).toEqual('Strike!');
    });

    it('accounts for a spare', () => {
        scoreCard.addRoll(5);
        scoreCard.addRoll(5);
        expect(scoreCard.spare()).toEqual('Spare!');
    });
});