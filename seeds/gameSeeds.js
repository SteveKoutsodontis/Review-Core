const { Game } = require('../models');

const gameData = [
  {
    name: 'Destiny 2',
    genre: "FPS, Looter Shooter, Open World, PvP, Free to Play",
    steam_link: "https://store.steampowered.com/app/1085660/Destiny_2/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg?t=1638897108",
  },
  {
    name: 'Escape From Tarkov',
    genre: "FPS, Looter Shooter, Action Role Playing",
    steam_link: "https://www.escapefromtarkov.com/",
    image_url: "https://web-store.escapefromtarkov.com/themes/eft/images/logo.png",
  },
  {
    name: 'Gunfire Reborn',
    genre: "FPS, Co-op, Roguelite, Indie",
    steam_link: "https://store.steampowered.com/app/1217060/Gunfire_Reborn/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1217060/header.jpg?t=1639644474",
  },
  {
    name: 'Age of Empires IV',
    genre: "Strategy, RTS, Multiplayer, Medieval, Historical",
    steam_link: "https://store.steampowered.com/app/1466860/Age_of_Empires_IV/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg?t=1636080484",
  },
  {
    name: 'Day Z',
    genre: "Survival, Zombies, Multiplayer, Open World",
    steam_link: "https://store.steampowered.com/app/221100/DayZ/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg?t=1639750652",
  },
  {
    name: 'The Ascent',
    genre: "Top-Down Shooter, Cyberpunk, Action, RPG",
    steam_link: "https://store.steampowered.com/app/979690/The_Ascent/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/979690/header.jpg?t=1639576873",
  },
  {
    name: 'Astroneer',
    genre: "Open World Survival Craft, Open World, Multiplayer",
    steam_link: "https://store.steampowered.com/app/361420/ASTRONEER/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/361420/header.jpg?t=1635526925",
  },
  {
    name: 'Batman: Arkham Knight',
    genre: "Action, Open World, Superhero, Stealth, Dark",
    steam_link: "https://store.steampowered.com/app/208650/Batman_Arkham_Knight/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg?t=1634156452",
  },
  {
    name: 'BioShock Remastered',
    genre: "FPS, Story Rich, Atmospheric, Horror, Action",
    steam_link: "https://store.steampowered.com/app/409710/BioShock_Remastered/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/409710/header.jpg?t=1598321131",
  },
  {
    name: 'Cyberpunk 2077',
    genre: "Cyberpunk, Open World, RPG, Sci-fi, Futuristic",
    steam_link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1621944801",
  },
  {
    name: 'Darkest Dungeon',
    genre: "Turn-Based Combat, Dark Fantasy, Roguelike, 2D",
    steam_link: "https://store.steampowered.com/app/262060/Darkest_Dungeon/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/262060/header.jpg?t=1618936132",
  },
  {
    name: 'DARK SOULS III',
    genre: "Souls-like, Dark Fantasy, Difficult, RPG, Co-Op",
    steam_link: "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg?t=1638193506",
  },
  {
    name: 'Sekiro: Shadows Die Twice - GOTY Edition',
    genre: "Souls-like, Difficult, Action, Singleplayer, Ninja",
    steam_link: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg?t=1603904569",
  },
  {
    name: 'Dead by Daylight',
    genre: "Horro, Survival Horror, Multiplayer, Online Co-Op",
    steam_link: "https://store.steampowered.com/app/381210/Dead_by_Daylight/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1639165101",
  },
  {
    name: 'Dead Cells',
    genre: "Roguelite, Pixel Graphics, Souls-like, Roguelike",
    steam_link: "https://store.steampowered.com/app/588650/Dead_Cells/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg?t=1631802497",
  },
  {
    name: 'Dead Space',
    genre: "Horror, Sci-fi, Action, Space, Third Person",
    steam_link: "https://store.steampowered.com/app/17470/Dead_Space/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/17470/header.jpg?t=1627659306",
  },
  {
    name: 'Dying Light',
    genre: "Zombies, Survival Horror, Horror, Online Co-Op",
    steam_link: "https://store.steampowered.com/app/239140/Dying_Light/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg?t=1639484185",
  },
  {
    name: 'Hunt: Showdown',
    genre: "Multiplayer, Hunting, FPS, Dark, Battle Royale",
    steam_link: "https://store.steampowered.com/app/594650/Hunt_Showdown/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header_alt_assets_18.jpg?t=1639631108",
  },
  {
    name: 'Little Nightmares',
    genre: "Horror, Atmospheric, Adventure, Singleplayer",
    steam_link: "https://store.steampowered.com/app/424840/Little_Nightmares/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/424840/header.jpg?t=1630581910",
  },
  {
    name: 'The Room',
    genre: "Puzzle, Mystery, Point & Click, Atomspheric",
    steam_link: "https://store.steampowered.com/app/288160/The_Room/",
    image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/288160/header.jpg?t=1635861446",
  },
  
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
