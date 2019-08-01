function	init_id(scene, id)
{
	console.log("init_id called:%d", id);

	if (id == 1)
	{
		if (typeof Players.player[1] != 'undefined' &&  typeof Players.player[1].anim != 'undefined')
			Players.player[1].anim.destroy();
		Players.player[1] = {
			anim:scene.add.sprite(get_coord_x(13), get_coord_y_player(11), 'b_down_0'),
			face: DOWN,
			id: 1,
			isdead:false
		};
	}
	if (id == 2)
	{
		if (typeof Players.player[2] != 'undefined' &&  typeof Players.player[2].anim != 'undefined')
			Players.player[2].anim.destroy();
		Players.player[2] = {
			anim:scene.add.sprite(get_coord_x(13), get_coord_y_player(1), 'r_down_0'),
			face: DOWN,
			id: 2,
			isdead: false
		};
	}
	if (id == 3)
	{
		if (typeof Players.player[3] != 'undefined' &&  typeof Players.player[3].anim != 'undefined')
			Players.player[3].anim.destroy();
		Players.player[3] = {
			anim:scene.add.sprite(get_coord_x(1), get_coord_y_player(11), 'u_down_0'),
			face: DOWN,
			id: 3,
			isdead: false
		};
	}
}
