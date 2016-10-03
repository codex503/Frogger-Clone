
// Enemies our player must avoid
var Enemy = function( x, y ) {
    

    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 400;    

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    
    if (this.x <  500 ) {
      this.x += dt * this.speed; 
    } else {
      this.x = -100;
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    // assigning specific player in the images 
  this.sprite = "images/char-boy.png";
  this.x = 200;
  this.y = 300;
};

// function to reset game if player makes it to the river
Player.prototype.win_Reset_Game = function(){
  this.y = 300;
  this.x = 200;
  alert("Congratulations! You win!")
};

// check for player collisions
Player.prototype.checkCollisions = function() {
    for (i = 0; i < allEnemies.length; i++) {
      if (allEnemies[i].x == Player.y) {
        console.log("Collision!");
      }
    } 
};

Player.prototype.update = function(dt){
 
   if (this.y <= -31){
     this.win_Reset_Game();
   }

   this.checkCollisions();
};

// render player and bugs
Player.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// function to handle user input
Player.prototype.handleInput = function(keys){
  if(keys == 'left' && this.x > 0){
    this.x -= 101;
  } else if (keys == 'right' && this.x < 400){
    this.x += 101;
  } else if (keys == 'down' && this.y < 383){
    this.y += 83;
  } else if (keys == 'up' && this.y > 0){
    this.y -= 83;
  }
  console.log(this.y);
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// variable to render player
var player = new Player();
// array to add enemies
var allEnemies = [ new Enemy(100, 217), new Enemy(300, 134), new Enemy(200, 51)];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

  



    player.handleInput(allowedKeys[e.keyCode]);
});