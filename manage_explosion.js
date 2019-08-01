function check_case_explosion(x, y)
{
	let value = level[y][x];

	console.log(value);
	if (!value)
		return (0);
	if (value == 2)
	{
		mur[y][x].play('melt_block');
		mur[y][x].anim.once('animationcomplete', () =>{
		mur[y][x].anim.destroy();
		});
	}
	if (value == 3)
	{
		//generate more explosion
	}
	if (value > 3)
	{
		//delete powerup
	}
	return (1);
}
