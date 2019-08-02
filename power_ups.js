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
	if (level[y][x] < 4)
		return ;

}
