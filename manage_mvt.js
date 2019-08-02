function movement(key, player, restart)
{
	let x = false;
	let y = false;

	if (typeof movement.prefix == 'undefined')
		movement.prefix = set_prefix(id);
	if (typeof movement.x == 'undefined' || typeof movement.y == 'undefined' || restart) // actually no need for this
	{
		movement.x = player.anim.x;
		movement.y = player.anim.y;
		if (restart)
			return ;
	}
	if (key == UP)
	{
		for (let i = 0; i < speed; i++)
		{
			player.anim.y -= 1;
			if (handle_case_mvt(player, get_player_hitbox(player.anim.x, player.anim.y)[2]) && 
					handle_case_mvt(player, get_player_hitbox(player.anim.x, player.anim.y)[3]))
				y = true
			else{
				player.anim.y += 1;
				break ;
			}
//			if ((get_case(get_player_hitbox(player.anim.x, player.anim.y)[2]) != 0) || get_case(get_player_hitbox(player.anim.x, player.anim.y)[3]) != 0)
//			{
//				player.anim.y += 1;
//				// break;
//			} else
//				y = true;
		}
		if (player.face != UP || !player.anim.anims.isPlaying)
			player.anim.play(movement.prefix.concat("up"));
		player.face = UP;
	}
	else if (key == DOWN)
	{
		for (let i = 0; i < speed; i++)
		{
			player.anim.y += 1;
			if (get_case(get_player_hitbox(player.anim.x, player.anim.y)[0]) != 0 || get_case(get_player_hitbox(player.anim.x, player.anim.y)[1]) != 0)
			{
				player.anim.y -= 1;
				// break;
			} else
				y = true;
		}
		if (player.face != DOWN || !player.anim.anims.isPlaying)
			player.anim.play(movement.prefix.concat("down"));
		player.face = DOWN;
	}
	else if (key == LEFT)
	{
		for (let i = 0; i < speed; i++)
		{
			player.anim.x -= 1;
			if (get_case(get_player_hitbox(player.anim.x, player.anim.y)[3]) != 0 || get_case(get_player_hitbox(player.anim.x, player.anim.y)[1]) != 0)
			{
				player.anim.x += 1;
				// break;
			} else
				x = true;
		}
		if (player.face != LEFT || !player.anim.anims.isPlaying)
			player.anim.play(movement.prefix.concat("left"));
		player.face = LEFT;
	}
	else if (key == RIGHT)
	{
		for (let i = 0; i < speed; i++)
		{
			player.anim.x += 1;
			if (get_case(get_player_hitbox(player.anim.x, player.anim.y)[2]) != 0 || get_case(get_player_hitbox(player.anim.x, player.anim.y)[0]) != 0)
			{
				player.anim.x -= 1;
				// break;
			} else
				x = true;
		}
		if (player.face != RIGHT || !player.anim.anims.isPlaying)
			player.anim.play(movement.prefix.concat("right"));
		player.face = RIGHT;
	}
	else
	{
		switch (player.face) {
			case RIGHT:
				player.anim.setTexture(movement.prefix.concat("right_0"));
				break;
			case LEFT:
				player.anim.setTexture(movement.prefix.concat("left_0"));
				break;
			case DOWN:
				player.anim.setTexture(movement.prefix.concat("down_0"));
				break;
			case UP:
				player.anim.setTexture(movement.prefix.concat("up_0"));
				break;
			default:
				break;
		}
	}
	if (x)
		socket.send("Mx".concat(player.anim.x.toString()));
	if (y)
		socket.send("My".concat(player.anim.y.toString()));
	return (x == true ? x : y);
}
