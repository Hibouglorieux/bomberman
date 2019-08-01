const GET_MY_ID = 'I';
const ADD_PLAYER = 'A';
const MOVE = 'M';
const MELT = "b";
const BOMB = "B";
const CHAIN_EXPLOSION = "E";
const DEATH = 'D'

function init_socket()
{
	socket = new WebSocket("ws://10.1.4.4:43681/ws"); // you might want to change that to your local address, and add another redirection to 11337 port in VM dear Hubert
	console.log("Attempting Connection...");
	socket.onopen = () => {
		console.log("Successfully Connected");
		socket.send("iHi From the Client!")
	};

	socket.onclose = event => {
		console.log("Socket Closed Connection: ", event);
		socket.send("Client Closed!")
	};

	socket.onerror = error => {
		console.log("Socket Error: ", error);
	};

	socket.onmessage = function(event) {// this is the function used to tread message received throught event.data which is the string received from server
		console.log("received a message: ", event.data);
		if (event.data[0] == GET_MY_ID) // tells you which player you are
		{
			id = parseInt(event.data[2]);
			socket.send("new".concat(id.toString()));
			if (id >= 2)
				init_id(dascene, 1);
			if (id == 3)
				init_id(dascene, 2);
		}
		if (event.data[0] == ADD_PLAYER) // makes it pop on screen
			init_id(dascene, parseInt(event.data[3]));
		if (event.data[0] == MOVE)// makes other player move in real time
		{
			let nb = event.data[2].charCodeAt() - 48;
			if (typeof Players.player[nb] == 'undefined' || typeof Players.player[nb] == 'undefined' ||
			Players.player[nb].isdead == true)
				return ;
			let nb2 = parseInt(event.data.slice(3));
			let prefix = set_prefix(nb);

			let mvt = identify_mvt(event.data[1] == 'x' ? true : false, nb2, Players.player[nb].anim);
			console.debug(mvt);
			if (!Players.player[nb].anim.anims.isPlaying || Players.player[nb].face != mvt)
			{
				switch (mvt){
					case RIGHT:
						Players.player[nb].anim.play(prefix.concat("right"));
						Players.player[nb].anim.face = RIGHT;
						break;
					case LEFT:
						Players.player[nb].anim.play(prefix.concat("left"));
						Players.player[nb].anim.face = LEFT;
						break;
					case DOWN:
						Players.player[nb].anim.play(prefix.concat("down"));
						Players.player[nb].anim.face = DOWN;
						break;
					case UP:
						Players.player[nb].anim.play(prefix.concat("up"));
						Players.player[nb].anim.face = UP;
						break;
					default:
						break
				}
			}
			if (event.data[1] == 'x')
				Players.player[nb].anim.x = nb2;
			if (event.data[1] == 'y')
				Players.player[nb].anim.y = nb2;
		}
		if (event.data[0] == MELT)
		{
			let str = event.data.split(":");

			mur[parseInt(str[2])][parseInt(str[1])].play('melt_block');
			mur[parseInt(str[2])][parseInt(str[1])].power_up_inc = parseInt(str[3]);
			mur[parseInt(str[2])][parseInt(str[1])].once('animationcomplete', () =>{
				if (parseInt(str[3]) == 0)
					mur[parseInt(str[2])][parseInt(str[1])].setTexture('vert');
				//else
				//	mur[parseInt(str[2])][parseInt(str[1])].setTexture(get_power_up_texture(parseInt(str[3])));
				level[parseInt(str[2])][parseInt(str[1])]= 0; // make an array of powerup ?
			});
		}
		if (event.data[0] == BOMB)
		{
			let str = event.data.split(":");

			global.bombs.push(add_new_bomb(dascene, {x:parseInt(str[1]), y:parseInt(str[2])}, parseInt(str[3]),false));
		}
		if (event.data[0] == CHAIN_EXPLOSION)
		{
			let str = event.data.split(":");

			console.debug("received CHAIN_EXPLOSION query");
			console.debug(global.bombs);
			console.debug(event.data);
			make_a_bomb_explode(parseInt(str[1]), parseInt(str[2]))
		}
		if (event.data[0] == DEATH)
		{
			let nb = parseInt(event.data[1]);
			Players.player[nb].anim.play(set_prefix(nb).concat('death'));
			//Players.player[nb].anim.once('animationcomplete', () =>{ 
				//Players.player[nb].anim.destroy();
			//});
			Players.player[nb].isdead = true;
		}
	};
}
