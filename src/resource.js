var res = {
	Car_temp_png : "res/CarTemp.png",
	Menu_BG_png : "res/menu_bg.png",
	Game_BG_png : "res/menu_bg-v1.png",
	Game_BG1_png : "res/menu_bg-v1.png",
	Start_nope_png : "res/start_n.png",
	Start_yeah_png : "res/start_s.png"
};

var g_resources = [
	res.Car_temp_png,
	res.Menu_BG_png,
	res.Game_BG_png,
	res.Game_BG1_png,
	res.Start_nope_png,
	res.Start_yeah_png
];
for (var i in res) {
    g_resources.push(res[i]);
}