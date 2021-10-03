function makeSureIsGB(prefilteredData) {
    const isPack = ['Paquete De Juegos', 'lote', 'lot', 'bundle']
    const undesiredPlatforms = ['COMMODORE', 'GB', 'GBC', 'GAMEBOY','GAME BOY','GAME BOY COLOR', 'GAMEBOY COLOR', 'GAMEBOY ADVANCE','GAME BOY ADVANCE', 'GBA', 'MEGADRIVE','MEGA DRIVE', 'XBOX', 'XBOX360', 'XBOX1', 'PS2', 'PS3', 'PS4', 'PS5', 'GAME GEAR', 'MASTER SYSTEM', 'NES', 'SNES', 'WII', 'GAME CUBE', 'NINTENDO 64', 'N64', 'NINTENDO64', 'NINTENDO SWITCH', 'PSP', 'PSVITA', 'SEGA', 'MICROSOFT', 'DREAMCAST', 'CD', 'DVD', 'VHS']
    if (undesiredPlatforms.some(el => prefilteredData[0].toLowerCase().includes(el.toLowerCase()))) {
        return false
    }
    if (isPack.some(el => prefilteredData[0].toLowerCase().includes(el.toLowerCase()))) {
        return false
    }
    return true
}

module.exports = { makeSureIsGB }