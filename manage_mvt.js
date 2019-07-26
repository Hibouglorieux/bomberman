function movement()
{
	if (key == "up")
    {
    	for (var i = 0; i < speed; i++)
    	{
    		Players.W_player.y -= 1;
    		if (get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[2]) != 0 || get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[3]) != 0)
    		{
    			Players.W_player.y += 1;
    			// break;
    		}
    	}
		if (Players.W_player.face != "up" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_up');
		Players.W_player.face = "up"
    }
	else if (key == "bottom")
    {
        for (var i = 0; i < speed; i++)
    	{
    		Players.W_player.y += 1;
    		if (get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[0]) != 0 || get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[1]) != 0)
    		{
    			Players.W_player.y -= 1;
    			// break;
    		}
    	}
		if (Players.W_player.face != "down" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_down');
		Players.W_player.face = "down"
    }
	else if (key == "left")
    {
    	for (var i = 0; i < speed; i++)
    	{
    		Players.W_player.x -= 1;
    		if (get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[3]) != 0 || get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[1]) != 0)
    		{
    			Players.W_player.x += 1;
    			// break;
    		}
    	}
		if (Players.W_player.face != "left" || !Players.W_player.anims.isPlaying)
		Players.W_player.play('w_left');
		Players.W_player.face = "left"
    }
	else if (key == "right")
    {
        for (var i = 0; i < speed; i++)
    	{
    		Players.W_player.x += 1;
    		if (get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[2]) != 0 || get_case(get_player_hitbox(Players.W_player.x, Players.W_player.y)[0]) != 0)
    		{
    			Players.W_player.x -= 1;
    			// break;
    		}
    	}
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
