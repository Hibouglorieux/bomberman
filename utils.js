function map2pixel_xy(x, y)
{
	let pixels = {
		x: x * tile_size + tile_size * 0.5,
		y: y * tile_size + tile_size * 0.5
	};
	return (pixels);
}

function pixel2map_xy(x, y)
{
	let	map = {
		x: Math.floor(x / (tile_size)),
		y: Math.floor(y / (tile_size))
	};
	return (map);
}	

function map2pixel(z)
{
	return (z * tile_size + tile_size * 0.5);
}

function pixel2map(z)
{
	return (Math.floor(z / (tile_size)));
}

function player_pixel_2_map(player)
{
	let x = player.x;
	let y = player.y;
	/* Pansement du scale
	if (player.face == "up")
		y -= 1 * scale;
	if (player.face == "down")
		y += 1 * scale;
	if (player.face == "right")
		x += 1 * scale;
	if (player.face == "left")
		x -= 1 * scale;
			*/
	let	pos = {
		x:Math.floor(x / (tile_size)),
		y:Math.floor((y + tile_size * 0.5) / (tile_size))
	}
	return (pos);
}
