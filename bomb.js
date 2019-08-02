function try_to_put_bomb(pos)
{
	let ret = false;

	if (global.power.pbomb > 0)
		ret = add_new_bomb(dascene, pos, 15, true);
	else if (global.power.bomb > 0)
		ret = add_new_bomb(dascene, pos, global.power.flame, true);
	if (ret != false)
		global.bombs.push(ret);
}
