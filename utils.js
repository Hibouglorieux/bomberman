function map2pixel_xy(x, y)
{
	let pixels = {
		x: x * 16 * scale + 8 * scale,
		y: y * 16 * scale + 8 * scale
	};
	return (pixels);
}

function pixel2map_xy(x, y)
{
	let	map = {
		x: Math.floor(x / (16 * scale)),
		y: Math.floor(y / (16 * scale))
	};
	return (map);
}	

function map2pixel(z)
{
	return (z * 16 * scale + 8 * scale);
}

function pixel2map(z)
{
	return (Math.floor(z / (16 * scale)));
}

function player_pixel_2_map(player)
{
	let x = player.x;
	let y = player.y;
	if (player.face == "up")
		y -= 8;
	if (player.face == "down")
		y += 8;
	if (player.face == "right")
		x += 8;
	if (player.face == "left")
		x -= 8;
	let	pos = {
		x:Math.floor(x / (16 * scale)),
		y:Math.floor((y + 16 * scale * 0.5) / (16 * scale))
	}
	return (pos);
}
