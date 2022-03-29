 //This is a JavaScript comment and allows you to set the background color
 scene.setBackgroundColor(9)
 //This is a variable for the character Sprite
 let mySprite = sprites.create(assets.image`Plankton`, SpriteKind.Player)
 //This is a Game Update function where you set a project to a sprite
 /*********
  *Every 1000 milliseconds a new projectile of Patrick will move away from Plankton
  The projectile will have a lifespan of 3000 milliseconds or 3 seconds
  If the project is headed with a velocity of less than zero, then.... flip the sprite over the 
  horizontal axis so it appears that it's moving correctly.  


  */
 game.onUpdateInterval(1000, function () {
     let projectile = sprites.createProjectileFromSprite(assets.image`Pat`, mySprite, randint(-25, 25), randint(-25, 25))
     projectile.lifespan = 3000
     if (projectile.vx < 0) {
         projectile.image.flipX()
     }
 })
