	function	load_player_anim()
{
		game.anims.create({
			key: 'w_up',
			frames: [
			{ key: 'w_up_1' },
			{ key: 'w_up_0' },
			{ key: 'w_up_2' },
			{ key: 'w_up_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'w_down',
			frames: [
			{ key: 'w_down_1' },
			{ key: 'w_down_0' },
			{ key: 'w_down_2' },
			{ key: 'w_down_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'w_left',
			frames: [
			{ key: 'w_left_1' },
			{ key: 'w_left_0' },
			{ key: 'w_left_2' },
			{ key: 'w_left_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'w_right',
			frames: [
			{ key: 'w_right_1' },
			{ key: 'w_right_0' },
			{ key: 'w_right_2' },
			{ key: 'w_right_0' }],
			frameRate: 10,
			repeat: 0});

		game.anims.create({
			key: 'b_up',
			frames: [
			{ key: 'b_up_1' },
			{ key: 'b_up_0' },
			{ key: 'b_up_2' },
			{ key: 'b_up_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'b_down',
			frames: [
			{ key: 'b_down_1' },
			{ key: 'b_down_0' },
			{ key: 'b_down_2' },
			{ key: 'b_down_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'b_left',
			frames: [
			{ key: 'b_left_1' },
			{ key: 'b_left_0' },
			{ key: 'b_left_2' },
			{ key: 'b_left_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'b_right',
			frames: [
			{ key: 'b_right_1' },
			{ key: 'b_right_0' },
			{ key: 'b_right_2' },
			{ key: 'b_right_0' }],
			frameRate: 10,
			repeat: 0});

		game.anims.create({
			key: 'u_up',
			frames: [
			{ key: 'u_up_1' },
			{ key: 'u_up_0' },
			{ key: 'u_up_2' },
			{ key: 'u_up_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'u_down',
			frames: [
			{ key: 'u_down_1' },
			{ key: 'u_down_0' },
			{ key: 'u_down_2' },
			{ key: 'u_down_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'u_left',
			frames: [
			{ key: 'u_left_1' },
			{ key: 'u_left_0' },
			{ key: 'u_left_2' },
			{ key: 'u_left_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'u_right',
			frames: [
			{ key: 'u_right_1' },
			{ key: 'u_right_0' },
			{ key: 'u_right_2' },
			{ key: 'u_right_0' }],
			frameRate: 10,
			repeat: 0});

		game.anims.create({
			key: 'r_up',
			frames: [
			{ key: 'r_up_1' },
			{ key: 'r_up_0' },
			{ key: 'r_up_2' },
			{ key: 'r_up_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'r_down',
			frames: [
			{ key: 'r_down_1' },
			{ key: 'r_down_0' },
			{ key: 'r_down_2' },
			{ key: 'r_down_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'r_left',
			frames: [
			{ key: 'r_left_1' },
			{ key: 'r_left_0' },
			{ key: 'r_left_2' },
			{ key: 'r_left_0' }],
			frameRate: 10,
			repeat: 0});
		game.anims.create({
			key: 'r_right',
			frames: [
			{ key: 'r_right_1' },
			{ key: 'r_right_0' },
			{ key: 'r_right_2' },
			{ key: 'r_right_0' }],
			frameRate: 10,
			repeat: 0});
}
	function create_anim()
{
		game.anims.create({
			key: 'explo_midleft',
			frames: [
			{key: 'explo-0-midleft' },
			{key: 'explo-1-midleft' },
			{key: 'explo-2-midleft' },
			{key: 'explo-3-midleft' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_maxleft',
			frames: [
			{key: 'explo-0-maxleft' },
			{key: 'explo-1-maxleft' },
			{key: 'explo-2-maxleft' },
			{key: 'explo-3-maxleft' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_mid',
			frames: [
			{key: 'explo-0-mid' },
			{key: 'explo-1-mid' },
			{key: 'explo-2-mid' },
			{key: 'explo-3-mid' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_midright',
			frames: [
			{key: 'explo-0-midright' },
			{key: 'explo-1-midright' },
			{key: 'explo-2-midright' },
			{key: 'explo-3-midright' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_maxright',
			frames: [
			{key: 'explo-0-maxright' },
			{key: 'explo-1-maxright' },
			{key: 'explo-2-maxright' },
			{key: 'explo-3-maxright' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_midtop',
			frames: [
			{key: 'explo-0-midtop' },
			{key: 'explo-1-midtop' },
			{key: 'explo-2-midtop' },
			{key: 'explo-3-midtop' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_maxtop',
			frames: [
			{key: 'explo-0-maxtop' },
			{key: 'explo-1-maxtop' },
			{key: 'explo-2-maxtop' },
			{key: 'explo-3-maxtop' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_middown',
			frames: [
			{key: 'explo-0-middown' },
			{key: 'explo-1-middown' },
			{key: 'explo-2-middown' },
			{key: 'explo-3-middown' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'explo_maxdown',
			frames: [
			{key: 'explo-0-maxdown' },
			{key: 'explo-1-maxdown' },
			{key: 'explo-2-maxdown' },
			{key: 'explo-3-maxdown' }],
			frameRate: 8,
			repeat: 0});
		game.anims.create({
			key: 'bomb-anim-0',
			frames: [
			{key: 'bomb-2' },
			{key: 'bomb-1' },
			{key: 'bomb-0' },
			{key: 'bomb-1' },
			{key: 'bomb-2' },
			{key: 'bomb-1' },
			{key: 'bomb-0' },
			{key: 'bomb-1' },
			{key: 'bomb-2' },
			{key: 'bomb-1' },
			{key: 'bomb-0' }],
			frameRate: 2,
			repeat: 0});
		game.anims.create({
			key: 'melt_block',
			frames: [
			{key: 'melt0' },
			{key: 'melt1' },
			{key: 'melt2' },
			{key: 'melt3' },
			{key: 'melt4' },
			{key: 'melt5' }],
			frameRate: 8,
			repeat: 0});

		load_player_anim()
}
