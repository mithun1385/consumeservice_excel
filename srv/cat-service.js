const cds = require('@sap/cds')
const readXlsFile = require('read-excel-file/node')

module.exports = class BoardGamesHandler extends cds.ApplicationService {
  init() {

    const { BoardGames, Files } = this.entities;

    this.on('CREATE', Files, async (req, next) => {

      const chunks = [];
      for await (const chunk of req.data.content) chunks.push(chunk);
      
      const buffer = Buffer.concat(chunks)
      const rows = await readXlsFile(buffer);
      const [header, ...body] = rows;
    
      const entries = body.map(([name, price, players, playTimeMinutes, ageRating]) => ({
        name,
        price: Number(price) * 2,
        players,
        playTimeMinutes: Number(playTimeMinutes),
        ageRating
      }));

      for (const entry of entries)
        await INSERT.into(BoardGames).entries(entry);

      return next();
    });

    return super.init()
  }
}
