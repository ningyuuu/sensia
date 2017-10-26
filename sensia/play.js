var scoreText, sky;
var problems, dialogue;

const positions = [
    {
        x: 100, 
        y: 330, 
        problem: {
            text: `I'm bored...`, 
            selections: [
                { choice: 'SIA player cards for you!', points: 30 },
                { choice: `Life's boring :(`, points: -10 },
            ]
        }
    },
    {
        x: 420, 
        y: 210, 
        problem: {
            text: `I'm thirsty...`, 
            selections: [
                { choice: 'Can I get you a drink?', points: 30 },
                { choice: 'You want water?', points: 10 },
            ]
        }
    },
    {
        x: 220, 
        y: 100, 
        problem: {
            text: 'This guy beside me is snoring loudly, I cannot fall asleep.', 
            selections: [
                { choice: 'Let me find you another seat', points: 20 },
                { choice: 'Would you like earplugs?', points: 10 },
                { choice: 'Let me go wake him up ok?', points: -10 },
            ]
        }
    },
    {
        x: 470, 
        y: 230, 
        problem: {
            text: 'I wanna party! Get me drinks!!!!', 
            selections: [
                { choice: `Oh yeah let's party!!`, points: -10 },
                { choice: 'Sir please control yourself', points: 0 },
            ]
        }
    }
];

const play = {
    preload: function() {
        game.load.image('sky', './assets/sky.png');
        game.load.image('start', './assets/diamond.png');
        game.load.image('problem', './assets/star.png');
        game.load.image('option', './assets/option.png');
        game.load.image('dialogue', './assets/dialogue.png');
    },

    create: function() {
        sky = this.add.sprite(0, 0, 'sky');
        sky.scale.setTo(1.3, 1);

        // groups
        problems = this.add.group();
        dialogue = this.add.group();

        // creating a health bar
        this.add.text(30, 20, "Satisfaction:");
        this.life = 100;
        this.bar = new HealthBar(this.game, {x: 330, y: 34, height: 30});
        this.bar.setPercent(this.life);

        this.dec = 0;
        setInterval(() => this.decreaseLife(this.dec), 100);

        // start button
        this.startButton = this.add.button(200, 200, 'start', this.startGame, this);
    },

    update: function() {
        let one = false;
        let two = false;
        let three = false;

        if (this.life < 0) {
            console.log('game over!');
            this.gameOver();
        }
    },

    addLife: function(amt) {
        this.life = this.life + amt;
        this.bar.setPercent(this.life);
    },

    decreaseLife: function(amt) {
        this.life = this.life - amt;
        this.bar.setPercent(this.life);
    },

    createRequest: function() {
        if (this.life <= 0) {
            return;
        }

        if (positions.length <= 0) {
            return;
        }
        this.dec += 1;
        console.log('request');

        // create a dude here
        const pos = positions.shift();
        const but = this.add.button(pos.x, pos.y, 'problem', () => this.openProblem(pos.problem, but), this);
        problems.add(but);
    },

    startGame: function() {
        this.spawner = game.time.events.repeat(Phaser.Timer.SECOND * 5.5, 10, this.createRequest, this);
        this.createRequest();
        this.startButton.pendingDestroy = true;
    },

    openProblem(prob, button) {
        const problem = this.add.group();

        const dial = this.add.sprite(190, 100, 'dialogue');
        const question = this.add.text(290, 200, prob.text);
        problem.add(dial);
        problem.add(question);

        button.pendingDestroy = true;
        this.dec = this.dec - 1;

        prob.selections.forEach((x, idx) => {
            this.createOption(problem, x.choice, x.points, idx);
        })

        dialogue.add(problem);
    },

    gameOver: function() {
        problems.pendingDestroy = true;
        dialogue.pendingDestroy = true;
        this.add.text(400, 200, "Game Over :(");
        this.dec = 0;
        this.life = 0;
    },

    createOption: function(problem, text, score, order) {
        const btn = this.add.button(216, 250+order*60, 'option', () => this.executeOption(problem, score), this);
        const txt = this.add.text(230, 255+order*60, text, {fill: 'white'});
        problem.add(btn);
        problem.add(txt);
    },

    executeOption: function(grp, score) {
        this.addLife(score);
        grp.pendingDestroy = true;
    }

}