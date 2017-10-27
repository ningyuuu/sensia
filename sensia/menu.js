const menu = {
    preload: function() {
        game.load.image('menu', './assets/menu.png');
    },

    create: function() {
        const button = this.add.button(0, 0, 'menu', this.startScenes, this);
        button.scale.setTo(1.01, 1);
        this.add.text(300, 200, 'Lets go!', {
            font: 'bold 70pt Arial',
            fill: 'black',
            backgroundColor: 'rgba(240, 240, 240, 0.6)'
        });
    },

    startScenes: function() {
        console.log('start scenes!');
        this.state.start('startScenes');
    }
}