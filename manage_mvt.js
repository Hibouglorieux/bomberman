function movement()
{
    if (key_up.isDown)
    {
        Players.W_player.y -= speed;
		if (Players.W_player.face != "up" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_up');
		Players.W_player.face = "up"
    }
	else if (key_bottom.isDown)
    {
        Players.W_player.y += speed;
		if (Players.W_player.face != "down" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_down');
		Players.W_player.face = "down"
    }
    else if (key_left.isDown)
    {
        Players.W_player.x -= speed;
		if (Players.W_player.face != "left" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_left');
		Players.W_player.face = "left"
    }
	else if (key_right.isDown)
    {
        Players.W_player.x += speed;
		if (Players.W_player.face != "right" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_right');
		Players.W_player.face = "right"
    }
	else
	{
		switch (Players.W_player.face) {
		case 'right':
			Players.W_player.setTexture('w_right_0');
			break;
		case 'left':
			Players.W_player.setTexture('w_left_0');
			break;
		case 'down':
			Players.W_player.setTexture('w_down_0');
			break;
		case 'up':
			Players.W_player.setTexture('w_up_0');
			break;
		default:
			break;
	}
	}
}
