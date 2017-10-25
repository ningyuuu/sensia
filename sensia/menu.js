const menu = {
    preload: function() {
        game.load.image('menu', './assets/menu.png');
    },

    create: function() {
        this.add.button(0, 0, 'menu', this.startScenes, this);
    },

    startScenes: function() {
        console.log('start scenes!');
        this.state.start('startScenes');
    }
}