function	init_id(scene, id)
{
	console.log("init_id called:%d", id);

	if (id == 1)
	{
		Players.player[1] = {
			anim:scene.add.sprite(get_coord_x(13), get_coord_y_player(11), 'b_down_0'),
			face: DOWN,
			id: 1};
		init_id.done = 1;
	}
	if (id == 2)
	{
		Players.player[2] = {
			anim:scene.add.sprite(get_coord_x(13), get_coord_y_player(1), 'r_down_0'),
			face: DOWN,
			id: 2};
		init_id.done = 2;
	}
	if (id == 3)
	{
		Players.player[3] = {
			anim:scene.add.sprite(get_coord_x(1), get_coord_y_player(11), 'u_down_0'),
			face: DOWN,
			id: 3};
		init_id.done = 3;
	}
}
