function movement(key, player)
{
	if (typeof movement.prefix == 'undefined')
		movement.prefix = set_prefix(id);

	if (key == UP)
	{
		for (let i = 0; i < speed; i++)
		{
			player.anim.y -= 1;
			if (get_case(get_player_hitbox(player.anim.x, player.anim.y)[2]) != 0 || get_case(get_player_hitbox(player.anim.x, player.anim.y)[3]) != 0)
			{
				player.anim.y += 1;
				// break;
			}
			else
				socket.send("My".concat(player.anim.y.toString()));
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
			}
			else
				socket.send("My".concat(player.anim.y.toString()));
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
			}
			else
				socket.send("Mx".concat(player.anim.x.toString()));
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
			}
			else
				socket.send("Mx".concat(player.anim.x.toString()));
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
}
