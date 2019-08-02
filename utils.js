function identify_mvt(x, value, pos)
{
	if (x == true)
	{
		if (value < pos.x)
			return LEFT;
		else
			return RIGHT;
	}
	if (value < pos.y)
		return UP;
	else
		return DOWN;
}
function set_prefix(id)
{
	if (id == 0)
		return ("w_");
	if (id == 1)
		return ("b_");
	if (id == 2)
		return ("r_");
	if (id == 3)
		return ("u_");
}
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

	let	pos = {
		x:Math.floor(x / (tile_size)),
		y:Math.floor((y + tile_size * 0.5) / (tile_size))
	}
	return (pos);
}

function get_coord_x(x)
{
    return ((x + 0.5) * tile_size);
}

function get_coord_y_player(y)
{
    return ((y + 0.5 - 0.5) * tile_size);
}

function get_coord_y(y)
{
    return ((y + 0.5) * tile_size);
}

function get_player_hitbox(x, y)
{
    var hit = tile_size - scale * mvnt_liberty;
    y += 0.5 * tile_size;
    return [[x + hit / 2, y + hit / 2], [x - hit / 2, y + hit / 2], [x + hit / 2, y - hit / 2], [x - hit / 2, y - hit / 2]]; // 0 bottom right; 1 bottom left; 2 top right; 3 top left
}

function get_case(x_y)
{
    return level[Math.floor(x_y[1] / tile_size)][Math.floor(x_y[0] / tile_size)];
}

