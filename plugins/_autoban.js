let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('55' || '55')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('91' || '91')) {
   	global.db.data.users[m.sender].banned = true
   }
   
/*   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
   }*/
   
   if (m.sender.startsWith('62' || '62')) {
   	global.db.data.users[m.sender].banned = true
   }
    }

export default handler
