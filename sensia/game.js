const width = 965;
const height = 535;

const game = new Phaser.Game(width, height, Phaser.AUTO, '');

game.state.add('menu', menu);
game.state.add('startScenes', startScenes);
game.state.add('play', play);

game.state.start('play');

// function preload() {
//     game.load.image('sky', 'assets/sky.png');
//     game.load.image('ground', 'assets/platform.png');
//     game.load.image('star', 'assets/star.png');
//     game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
// }

// function create() {

//     // enable the arcade phyiscs system
//     game.physics.startSystem(Phaser.Physics.ARCADE);

//     // add sky sprite
//     const sky = game.add.sprite(0, 0, 'sky');
//     sky.scale.setTo(1.3, 1);

//     // create a platform group
//     platforms = game.add.group();

//     // enable physics for platforms
//     platforms.enableBody = true;

//     // creating a ground
//     const ground = platforms.create(0, game.world.height - 64, 'ground');
//     ground.scale.setTo(2.6, 2);
//     ground.body.immovable = true;

//     // creating ledges
//     const ledge1 = platforms.create(600, 400, 'ground');
//     ledge1.body.immovable = true;

//     const ledge2 = platforms.create(0, 200, 'ground');
//     ledge2.body.immovable = true;
    
//     const ledge3 = platforms.create(300, 300, 'ground');
//     ledge3.body.immovable = true;

//     const ledge4 = platforms.create(300, 100, 'ground');
//     ledge4.body.immovable = true;
    
//     // creating a player
//     player = game.add.sprite(32, game.world.height - 150, 'dude');
//     game.physics.arcade.enable(player);

//     // bounce properties of player
//     player.body.bounce.y = 0.02;
//     player.body.gravity.y = 1200;
//     player.body.collideWorldBounds = true;

//     // add animations for player
//     player.animations.add('left', [0, 1, 2, 3], 10, true);
//     player.animations.add('right', [5, 6, 7, 8], 10, true);

//     // creating stars
//     stars = game.add.group();
//     stars.enableBody = true;
//     for (let i = 0; i < 10; i++ ) {
//         const star = stars.create(i*96 + 48, 0, 'star');
//         star.body.gravity.y = 300;
//         star.body.bounce.y = 0.2 + Math.random() * 0.1;
//     }

//     // cursors
//     cursors = game.input.keyboard.createCursorKeys();
// }

// function update() {
    
//     // creating collisions for player and platforms
//     const hitPlatform = game.physics.arcade.collide(player, platforms);
//     game.physics.arcade.collide(stars, platforms);

//     game.physics.arcade.overlap(player, stars, collectStar, null, this);
    
//     player.body.velocity.x = 0;
//     if (cursors.left.isDown) {
//         player.body.velocity.x = -150;
//         player.animations.play('left');
//     }

//     else if (cursors.right.isDown) {
//         player.body.velocity.x = 150;
//         player.animations.play('right');
//     }

//     else {
//         player.animations.stop();
//         player.frame = 4;
//     }

//     if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
//         player.body.velocity.y = -500;
//     }

//     function collectStar(player, star) {
//         star.kill();
//     }
// }