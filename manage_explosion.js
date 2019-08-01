function check_case_explosion(x, y, mine)
{
	let value = level[y][x];

	console.log(value);
	if (!value)
		return (0);
	console.log(mine);
	if (!mine)
		return (1);
	if (value == 2 && mur[y][x].texture.key == 'block')
	{
		mur[y][x].play('melt_block');
		mur[y][x].once('animationcomplete', () =>{
			mur[y][x].setTexture('vert');
			level[y][x] = 0;
		});
		socket.send("b:".concat(x.toString(), ":", y.toString()));
		//socket.emit (and only that because need return of server to set powerup)
	}
	if (value == 3)
	{
		make_a_bomb_explode(x, y)
		socket.send("E:".concat(x.toString(), ":", y.toString()));
	}
	if (value > 3)
	{
		//delete powerup
	}
	return (1);
}

function set_player_cases()
{
	let cases = [];
	Players.player.forEach(function(element) {
		cases[element.id] = [];
		let x = element.anim.x / tile_size;
		let y = element.anim.y / tile_size;
		let tmp;

		tmp = (x % 1) * 10;
		if (tmp < 1) {
			cases[element.id].push({x:Math.floor(x - 1), y:Math.floor(y)});
		}
		if (tmp > 9)
		{
			cases[element.id].push({x:Math.floor(x + 1), y:Math.floor(y)});
		}
		tmp = (y % 1) * 10;
		if (tmp < 1) {
			cases[element.id].push({x:Math.floor(x), y:Math.floor(y - 1)});
		}
		if (tmp > 9)
		{
			cases[element.id].push({x:Math.floor(x), y:Math.floor(y + 1)});
		}
		cases[element.id].push({x:Math.floor(x), y:Math.floor(y)});
	});
	return (cases);
}

function handle_continuous_explosion(min_x, min_y, mid_x, mid_y, max_x, max_y)
{
	let cases = set_player_cases();

	//	console.debug("minx:%d min_y:%d mid_x:%d mid_y:%d max_x:%d max_y:%d", min_x, min_y, mid_x, mid_y, max_x, max_y);
	for (let x = min_x; x <= max_x; x++){
		if (level[mid_y][x] == 3)
		{
			make_a_bomb_explode(x, mid_y);
			socket.send("E:".concat(x.toString(), ":", mid_y.toString()));
		}
	}
	for (let y = min_y; y <= max_y; y++){
		if (level[y][mid_x] == 3)
		{
			make_a_bomb_explode(mid_x, y);
			socket.send("E:".concat(mid_x.toString(), ":", y.toString()));
		}
	}
	for (let i = 0, len = cases.length; i < len; i++)
	{
		for (let j = 0, len2 = cases[i].length; j < len2; j++){
			if (cases[i][j].x >= min_x && cases[i][j].x <= max_x && cases[i][j].y == mid_y)
			{
				console.log("Player %d is killed\n", i);
			}
			if (cases[i][j].y >= min_y && cases[i][j].y <= max_y && cases[i][j].x == mid_x)
			{
				console.log("Player %d is killed\n", i);
			}
		}
	}
	delete cases;
	//do bomb kick later
	//
}

function make_a_bomb_explode(x, y)
{
	global.bombs.forEach(function(element) {
		if (element.pos.x == x && element.pos.y)
		{
			level[y][x] = 3;
			global.bombs.splice(global.bombs.indexOf(element), 1);
			explosion_anim(dascene, element.pos, element.length, element.mine);
			element.anim.destroy();
			delete element;
		}
	});
}
