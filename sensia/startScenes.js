const speeches = [
    ` Hello! I'm the CEO of SIA, 
 Mr. Goh Choon Phong. 

 Welcome to the family!`,
    ` Today we would like to give
 you a taste of flying aboard the
 best airline in the world as an
 air steward(ess). 
 
 But that means you'll have to do
 your job.`,
    `Please help us make our 
customers comfortable. If they 
have a problem, go attend to them
asap.`,
    `If our customers are not satisfied, 
YOU'RE FIRED!! >:)`
];
let speech;

const startScenes = {
    preload: function() {
        console.log('SCENE!');
        game.load.image('sky', './assets/talking_bg.png');
        game.load.image('ceo', './assets/ceo.png');
        game.load.image('dialogue', './assets/dialogue.png');
    },

    create: function() {
        // set background colour
        this.stage.backgroundColor = '#ffffff';

        // set sky background
        const sky = this.add.button(0, 0, 'sky', this.nextAction, this);
        sky.alpha = 0.7;

        // set ceo dude
        const ceo = this.add.sprite(30, 100, 'ceo');
        ceo.scale.setTo(0.4, 0.4);

        // set dialogue box
        const diag = this.add.sprite(400, 100, 'dialogue');
        diag.alpha = 0.7;
        diag.scale.setTo(0.8, 0.8);
    },

    update: function() {

    },

    nextAction: function() {
        if (speeches.length > 0) {
            if (speech) speech.pendingDestroy = true;
            speech = this.add.text(420, 120, speeches.shift());
        } else {
            this.state.start('play');
        }
    }
}