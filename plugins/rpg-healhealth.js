let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`Estás sano
`.trim())
let buf = user.cat
let buff = (buf == 0 ? '5' : '' || buf == 1 ? '10' : '' || buf == 2 ? '15' : '' || buf == 3 ? '20' : '' || buf == 4 ? '25' : '' || buf == 5 ? '30' : '' || buf == 6 ? '35' : '' || buf == 7 ? '40' : '' || buf == 8 ? '45' : '' || buf == 9 ? '50' : '' || buf == 10 ? '100' : '' || buf == 11 ? '100' : '') 
    const heal = 15 + (buff * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
No tienes una, *${user.potion}* poción 
escribe *${usedPrefix}tienda comprar pocion ${count - user.potion}* para Comprarlo
`.trim())
    user.potion -= count * 1
    user.health += heal * count
    m.reply(`
Se usó la poción con éxito, ahora estás sano
`.trim())
}

handler.help = ['curar']
handler.tags = ['rpg']
handler.command = /^(curar)$/i
handler.register = true

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}