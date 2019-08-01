function	bomb_anim(scene, pos, length, mine)
{
	let bomb = {pos:{x:pos.x, y:pos.y}, length:length, mine:mine};

	bomb.anim = scene.add.sprite(map2pixel(pos.x), map2pixel(pos.y), 'bomb-0').play('bomb-anim-0');
	
	bomb.anim.once('animationcomplete', () => {
		explosion_anim(scene, bomb.pos, bomb.length, mine);
		global.bombs.splice(global.bombs.indexOf(bomb), 1);
		bomb.anim.destroy();
		delete bomb;
		});
	return (bomb);
}

function	explosion_anim(scene, pos, length, mine)
{
	let x = pos.x;
	let y = pos.y;
	let explo = {anim:[scene.add.sprite(map2pixel(x), map2pixel(y), 'explo-0-mid').play('explo_mid')], lenght:length, mine:mine};

	explo.mid_x = x;
	explo.mid_y = y;
	x--;
	while (pos.x - x <= length && x >= 0)
	{
		if (check_case_explosion(x, y))
		{
			x--;
			break;
		}
		let pixel_y = map2pixel(y);
		if (pos.x - x != length)
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-midleft').play('explo_midleft'));
		else
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-maxleft').play('explo_maxleft'));
		x--;
	}
	explo.min_x = x;
	x = pos.x + 1;
	while (x - pos.x <= length && x < 15)
	{
		if (check_case_explosion(x, y))
		{
			x++
			break;
		}
		let pixel_y = map2pixel(y);
		if (x - pos.x != length)
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-midright').play('explo_midright'));
		else
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-maxright').play('explo_maxright'));
		x++;
	}
	explo.max_x = x;
	let pixel_x = map2pixel(pos.x);
	y--;
	x = pos.x;
	while (pos.y - y <= length && y >= 0)
	{
		if (check_case_explosion(x, y))
		{
			y--;
			break;
		}
		if (pos.y - y != length)
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-midtop').play('explo_midtop'));
		else
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-maxtop').play('explo_maxtop'));
		y--;
	}
	explo.min_y = y;
	y = pos.y + 1;
	while (y - pos.y <= length && y < 13)
	{
		if (check_case_explosion(x, y))
		{
			y++;
			break;
		}
		if (y - pos.y != length)
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-middown').play('explo_middown'));
		else
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-maxdown').play('explo_maxdown'));
		y++;
	}
	explo.max = y;
	// to finish
	global.explo.push(explo);
	explo.anim[0].once('animationcomplete', () => {
		global.explo.splice(global.bombs.indexOf(explo), 1);
		explo.anim.forEach((elem)=>{
			elem.destroy()
		});
		delete explo
		});
}
