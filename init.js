function	init_id(scene)
{
	if (typeof init_id.done == 'undefined')
		init_id.done = 0;
	console.log("init_id called:%d", must_add);
	if (must_add == 1 && init_id.done < must_add)
	{
		Players.player[1] = {
			anim:scene.add.sprite(get_coord_x(13), get_coord_y_player(11), 'b_down_0'),
			face: DOWN};
		init_id.done = 1;
	}
	if (must_add == 2 && init_id.done < must_add)
	{
		Players.player[2] = {
			anim:scene.add.sprite(get_coord_x(13), get_coord_y_player(1), 'r_down_0'),
			face: DOWN};
		init_id.done = 2;
	}
	if (must_add == 3 && init_id.done < must_add)
	{
		Players.player[3] = {
			anim:scene.add.sprite(get_coord_x(1), get_coord_y_player(11), 'u_down_0'),
			face: DOWN};
		init_id.done = 3;
	}
	must_add = -1;
}
