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
}

module.exports = ScoreCard;