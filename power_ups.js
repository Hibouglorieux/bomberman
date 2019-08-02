const NONE = 0
const FLAME_UP = 4
const BOMB_UP = 5
const BOMB_P = 6
const SPEED_UP = 7
const ARMOR = 8
function get_power_up_texture(nb)
{
	if (nb == NONE)
		return ('vert')
	if (nb == FLAME_UP)
		return ('p_flame_up')
	if (nb == BOMB_UP)
		return ('p_bomb')
	if (nb == BOMB_P)
		return ('p_sbomb')
	if (nb == SPEED_UP)
		return ('p_speed')
	if (nb == ARMOR)
		return ('p_armor')
}

function grab_powerup(x, y)
{
	let power_up = level[y][x];
	if (power_up < 4)
		return ;
	if (power_up == FLAME_UP && global.power.flame <= 9)
		global.power.flame++;
	if (power_up == BOMB_UP && global.power.bomb <= 9)
		global.power.bomb++;
	if (power_up == BOMB_P && global.power.pbomb <= 9)
		global.power.pbomb++;
	if (power_up == SPEED_UP && global.power.speed <= 9.0)
		global.power.speed += 0.4;
	if (power_up == ARMOR)
		;//damn there is a lot to do with that
	socket.send("U:".concat(x.toString(), ":", y.toString()));
	level[y][x] = 0;
	mur[y][x].setTexture('vert');
}
