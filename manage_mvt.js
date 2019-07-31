function movement(key, player)
{
	let prefix = "w_";

	if (id == 1)
		prefix = "b_"
	if (id == 2)
		prefix = "r_"
	if (id == 3)
		prefix = "u_"
	if (key == UP)
	{
		for (var i = 0; i < speed; i++)
		{
			player.anim.y -= 1;
			if (get_case(get_player_hitbox(player.anim.x, player.anim.y)[2]) != 0 || get_case(get_player_hitbox(player.anim.x, player.anim.y)[3]) != 0)
			{
				player.anim.y += 1;
				// break;
			}
			else
				socket.send("My".concat(player.anim.x.toString()));
		}
		if (player.face != UP || !player.anim.anims.isPlaying)
			player.anim.play(prefix.concat("up"));
		player.face = UP;
	}
	else if (key == DOWN)
	{
		for (var i = 0; i < speed; i++)
		{
			player.anim.y += 1;
			if (get_case(get_player_hitbox(player.anim.x, player.anim.y)[0]) != 0 || get_case(get_player_hitbox(player.anim.x, player.anim.y)[1]) != 0)
			{
				player.anim.y -= 1;
				// break;
			}
			else
				socket.send("My".concat(player.anim.x.toString()));
		}
		if (player.face != DOWN || !player.anim.anims.isPlaying)
			player.anim.play(prefix.concat("down"));
		player.face = DOWN;
	}
	else if (key == LEFT)
	{
		for (var i = 0; i < speed; i++)
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
			player.anim.play(prefix.concat("left"));
		player.face = LEFT;
	}
	else if (key == RIGHT)
	{
		for (var i = 0; i < speed; i++)
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
			player.anim.play(prefix.concat("right"));
		player.face = RIGHT;
	}
	else
	{
		switch (player.face) {
			case RIGHT:
				player.anim.setTexture(prefix.concat("right_0"));
				break;
			case LEFT:
				player.anim.setTexture(prefix.concat("left_0"));
				break;
			case DOWN:
				player.anim.setTexture(prefix.concat("down_0"));
				break;
			case UP:
				player.anim.setTexture(prefix.concat("up_0"));
				break;
			default:
				break;
		}
	}
}
