var game;

// Создание объекта game (600 пикселей в ширину и 450 пикселей в высоту) 
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// Первый параметр - название нашего состояния 
// Второй параметр - объект, который будет хранить методы нашего состояния 
game.state.add('Menu', Menu);

// Добавляем состояние "Игра"game.state.add('Game', Game);

game.state.start('Menu');

game.state.add('Game_Over', Game_Over);