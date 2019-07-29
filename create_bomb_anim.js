function	bomb_anim(scene, pos, length)
{
	let bomb = {pos:{x:pos.x, y:pos.y}, length:length};

	bomb.anim = scene.add.sprite(map2pixel(pos.x), map2pixel(pos.y), 'bomb-0').play('bomb-anim-0');
	
	bomb.anim.once('animationcomplete', () => {
		explosion_anim(scene, bomb.pos, bomb.length);
		global.bombs.splice(global.bombs.indexOf(bomb), 1);
		bomb.anim.destroy();
		delete bomb;
		});
	return (bomb);
}

function	explosion_anim(scene, pos, length)
{
	let x = pos.x;
	let y = pos.y;
	let explo = {anim:[scene.add.sprite(map2pixel(x), map2pixel(y), 'explo-0-mid').play('explo_mid')]};


	x--;
	while (pos.x - x <= length && x >= 0)
	{
		if (level[y][x] == 2 || level[y][x] == 1)
			break;
		let pixel_y = map2pixel(y);
		if (pos.x - x != length)
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-midleft').play('explo_midleft'));
		else
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-maxleft').play('explo_maxleft'));
		x--;
	}
	x = pos.x + 1;
	while (x - pos.x <= length && x < 15)
	{
		if (level[y][x] == 2 || level[y][x] == 1)
			break;
		let pixel_y = map2pixel(y);
		if (x - pos.x != length)
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-midright').play('explo_midright'));
		else
			explo.anim.push(scene.add.sprite(map2pixel(x), pixel_y, 'explo-0-maxright').play('explo_maxright'));
		x++;
	}
	let pixel_x = map2pixel(pos.x);
	y--;
	while (pos.y - y <= length && y >= 0)
	{
		if (level[y][x] == 2 || level[y][x] == 1)
			break;
		if (pos.y - y != length)
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-midtop').play('explo_midtop'));
		else
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-maxtop').play('explo_maxtop'));
		y--;
	}
	y = pos.y + 1;
	while (y - pos.y <= length && y < 13)
	{
		if (level[y][x] == 2 || level[y][x] == 1)
			break;
		if (y - pos.y != length)
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-middown').play('explo_middown'));
		else
			explo.anim.push(scene.add.sprite(pixel_x, map2pixel(y), 'explo-0-maxdown').play('explo_maxdown'));
		y++;
	}
	// to finish
	explo.anim.forEach((elem) =>{
		elem.setDepth(2);
	});
	global.explo.push(explo);
	explo.anim[0].once('animationcomplete', () => {
		global.explo.splice(global.bombs.indexOf(explo), 1);
		explo.anim.forEach((elem)=>{
			elem.destroy()
		});
		delete explo
		});
}
