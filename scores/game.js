class ScoreCard {
    constructor() {
        this.currentScore = 0;
    }
    currentScore() {
        return this.currentScore;
    }
    
    addRoll(points) {
        this.firstRoll ? (this.secondRoll = points) : (this.firstRoll = points);
    }

    bonusRoll(points) {
        this.firstBonus ? (this.secondBonus = points) : (this.firstBonus = points);
    }

    strike() {
        return this.firstRoll == 10 ? ('Strike!') : ('Roll Again');
    }
}

module.exports = ScoreCard;