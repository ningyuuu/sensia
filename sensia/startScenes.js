const startScenes = {
    preload: function() {
        console.log('SCENE!');
        game.load.image('sky', './assets/sky.png');
    },

    create: function() {
        const sky = this.add.sprite(0, 0, 'sky');
        sky.scale.setTo(1.3, 1);
    }
}