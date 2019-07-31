function load_images(scene)
{
	scene.load.image('map', 'terrain.png');
	scene.load.image('w_up_0', 'anim_player/W_UP_0.png');
	scene.load.image('w_up_1', 'anim_player/W_UP_1.png');
	scene.load.image('w_up_2', 'anim_player/W_UP_2.png');
	scene.load.image('w_down_0', 'anim_player/W_DOWN_0.png');
	scene.load.image('w_down_1', 'anim_player/W_DOWN_1.png');
	scene.load.image('w_down_2', 'anim_player/W_DOWN_2.png');
	scene.load.image('w_left_0', 'anim_player/W_LEFT_0.png');
	scene.load.image('w_left_1', 'anim_player/W_LEFT_1.png');
	scene.load.image('w_left_2', 'anim_player/W_LEFT_2.png');
	scene.load.image('w_right_0', 'anim_player/W_RIGHT_0.png');
	scene.load.image('w_right_1', 'anim_player/W_RIGHT_1.png');
	scene.load.image('w_right_2', 'anim_player/W_RIGHT_2.png');
	scene.load.image('b_up_0', 'anim_player/B_UP_0.png');
	scene.load.image('b_up_1', 'anim_player/B_UP_1.png');
	scene.load.image('b_up_2', 'anim_player/B_UP_2.png');
	scene.load.image('b_down_0', 'anim_player/B_DOWN_0.png');
	scene.load.image('b_down_1', 'anim_player/B_DOWN_1.png');
	scene.load.image('b_down_2', 'anim_player/B_DOWN_2.png');
	scene.load.image('b_left_0', 'anim_player/B_LEFT_0.png');
	scene.load.image('b_left_1', 'anim_player/B_LEFT_1.png');
	scene.load.image('b_left_2', 'anim_player/B_LEFT_2.png');
	scene.load.image('b_right_0', 'anim_player/B_RIGHT_0.png');
	scene.load.image('b_right_1', 'anim_player/B_RIGHT_1.png');
	scene.load.image('b_right_2', 'anim_player/B_RIGHT_2.png');
	scene.load.image('u_up_0', 'anim_player/U_UP_0.png');
	scene.load.image('u_up_1', 'anim_player/U_UP_1.png');
	scene.load.image('u_up_2', 'anim_player/U_UP_2.png');
	scene.load.image('u_down_0', 'anim_player/U_DOWN_0.png');
	scene.load.image('u_down_1', 'anim_player/U_DOWN_1.png');
	scene.load.image('u_down_2', 'anim_player/U_DOWN_2.png');
	scene.load.image('u_left_0', 'anim_player/U_LEFT_0.png');
	scene.load.image('u_left_1', 'anim_player/U_LEFT_1.png');
	scene.load.image('u_left_2', 'anim_player/U_LEFT_2.png');
	scene.load.image('u_right_0', 'anim_player/U_RIGHT_0.png');
	scene.load.image('u_right_1', 'anim_player/U_RIGHT_1.png');
	scene.load.image('u_right_2', 'anim_player/U_RIGHT_2.png');
	scene.load.image('r_up_0', 'anim_player/R_UP_0.png');
	scene.load.image('r_up_1', 'anim_player/R_UP_1.png');
	scene.load.image('r_up_2', 'anim_player/R_UP_2.png');
	scene.load.image('r_down_0', 'anim_player/R_DOWN_0.png');
	scene.load.image('r_down_1', 'anim_player/R_DOWN_1.png');
	scene.load.image('r_down_2', 'anim_player/R_DOWN_2.png');
	scene.load.image('r_left_0', 'anim_player/R_LEFT_0.png');
	scene.load.image('r_left_1', 'anim_player/R_LEFT_1.png');
	scene.load.image('r_left_2', 'anim_player/R_LEFT_2.png');
	scene.load.image('r_right_0', 'anim_player/R_RIGHT_0.png');
	scene.load.image('r_right_1', 'anim_player/R_RIGHT_1.png');
	scene.load.image('r_right_2', 'anim_player/R_RIGHT_2.png');
	scene.load.image('explo-0-mid', 'anim_bombs/MID_EXPLO_3.png');
	scene.load.image('explo-1-mid', 'anim_bombs/MID_EXPLO_2.png');
	scene.load.image('explo-2-mid', 'anim_bombs/MID_EXPLO_1.png');
	scene.load.image('explo-3-mid', 'anim_bombs/MID_EXPLO_0.png');
	scene.load.image('explo-0-midleft', 'anim_bombs/M_LEFT_EXPLO_3.png');
	scene.load.image('explo-1-midleft', 'anim_bombs/M_LEFT_EXPLO_2.png');
	scene.load.image('explo-2-midleft', 'anim_bombs/M_LEFT_EXPLO_1.png');
	scene.load.image('explo-3-midleft', 'anim_bombs/M_LEFT_EXPLO_0.png');
	scene.load.image('explo-0-maxleft', 'anim_bombs/T_LEFT_EXPLO_3.png');
	scene.load.image('explo-1-maxleft', 'anim_bombs/T_LEFT_EXPLO_2.png');
	scene.load.image('explo-2-maxleft', 'anim_bombs/T_LEFT_EXPLO_1.png');
	scene.load.image('explo-3-maxleft', 'anim_bombs/T_LEFT_EXPLO_0.png');
	scene.load.image('explo-0-midtop', 'anim_bombs/M_UP_EXPLO_3.png');
	scene.load.image('explo-1-midtop', 'anim_bombs/M_UP_EXPLO_2.png');
	scene.load.image('explo-2-midtop', 'anim_bombs/M_UP_EXPLO_1.png');
	scene.load.image('explo-3-midtop', 'anim_bombs/M_UP_EXPLO_0.png');
	scene.load.image('explo-0-maxtop', 'anim_bombs/T_UP_EXPLO_3.png');
	scene.load.image('explo-1-maxtop', 'anim_bombs/T_UP_EXPLO_2.png');
	scene.load.image('explo-2-maxtop', 'anim_bombs/T_UP_EXPLO_1.png');
	scene.load.image('explo-3-maxtop', 'anim_bombs/T_UP_EXPLO_0.png');
	scene.load.image('explo-0-middown', 'anim_bombs/M_DOWN_EXPLO_3.png');
	scene.load.image('explo-1-middown', 'anim_bombs/M_DOWN_EXPLO_2.png');
	scene.load.image('explo-2-middown', 'anim_bombs/M_DOWN_EXPLO_1.png');
	scene.load.image('explo-3-middown', 'anim_bombs/M_DOWN_EXPLO_0.png');
	scene.load.image('explo-0-maxdown', 'anim_bombs/T_DOWN_EXPLO_3.png');
	scene.load.image('explo-1-maxdown', 'anim_bombs/T_DOWN_EXPLO_2.png');
	scene.load.image('explo-2-maxdown', 'anim_bombs/T_DOWN_EXPLO_1.png');
	scene.load.image('explo-3-maxdown', 'anim_bombs/T_DOWN_EXPLO_0.png');
	scene.load.image('explo-0-midright', 'anim_bombs/M_RIGHT_EXPLO_3.png');
	scene.load.image('explo-1-midright', 'anim_bombs/M_RIGHT_EXPLO_2.png');
	scene.load.image('explo-2-midright', 'anim_bombs/M_RIGHT_EXPLO_1.png');
	scene.load.image('explo-3-midright', 'anim_bombs/M_RIGHT_EXPLO_0.png');
	scene.load.image('explo-0-maxright', 'anim_bombs/T_RIGHT_EXPLO_3.png');
	scene.load.image('explo-1-maxright', 'anim_bombs/T_RIGHT_EXPLO_2.png');
	scene.load.image('explo-2-maxright', 'anim_bombs/T_RIGHT_EXPLO_1.png');
	scene.load.image('explo-3-maxright', 'anim_bombs/T_RIGHT_EXPLO_0.png');
	scene.load.image('block', 'anim_walls/wall_block.png');
	scene.load.image('vert', );
	scene.load.image('incassable', );
	scene.load.image('melt0', 'anim_walls/wall_melt1.png');
	scene.load.image('melt1', 'anim_walls/wall_melt2.png');
	scene.load.image('melt2', 'anim_walls/wall_melt3.png');
	scene.load.image('melt3', 'anim_walls/wall_melt4.png');
	scene.load.image('melt4', 'anim_walls/wall_melt5.png');
	scene.load.image('melt5', 'anim_walls/wall_melt6.png');
	scene.load.image('bomb-0', 'items/Bomb0.png');
	scene.load.image('bomb-1', 'items/Bomb1.png');
	scene.load.image('bomb-2', 'items/Bomb2.png');
	scene.load.image('p_speed', 'items/P_speed.png');
	scene.load.image('p_flame_up', 'items/P_flame.png');
	scene.load.image('p_bomb', 'items/P_bomb.png');
	scene.load.image('p_armor', 'items/P_armor.png');
}
