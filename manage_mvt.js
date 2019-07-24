function movement()
{
    if (key_up.isDown)
    {
        W_player.y -= speed;
    }
	else if (key_bottom.isDown)
    {
        W_player.y += speed;
    }
    else if (key_left.isDown)
    {
        W_player.x -= speed;
    }
	else if (key_right.isDown)
    {
        W_player.x += speed;
    }
}
