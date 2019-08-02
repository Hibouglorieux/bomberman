function handle_collision(
//replace level[y][x] by get_case_hitbox with circle hitbox
function try_to_go_up(player)
{
	let get_player_case = player_pixel_2_map(player.anim);
	let tmp_y = player_pixel2map(player.anim.y - global.power.speed);
	let has_moved = false;
	if (get_player_case.y == tmp_y || level[tmp_y][get_player_case.x] == 0 ||
	level[tmp_y][get_player_case.x] > 3) {
		player.anim.y -= global.power.speed;
		has_move = true;
	} else {
		let i;
		for (i = 0.4; i < global.power.speed; i += 0.4){
			let bl = level[player_pixel2map(player.anim.y - i)][get_player_case.x];
			if (bl > 0 && bl < 4)
				break ;
		}
		if (i > 0.5){
			has_moved = true;
			player.anim.y -= i;
		}
	}
	if (has_moved == true) {
		if (level[tmp_y][get_player_case.x] > 3){
			get_power_up(level[tmp_y][get_player_case.x]);
			level[tmp_y][get_player_case.x] = 0;
			mur[tmp_y][get_player_case.x].setTexture('vert');
			//socket.send( power up taken)
		}
	}
}
