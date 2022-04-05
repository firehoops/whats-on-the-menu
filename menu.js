class Menu {
    constructor(dao) {
      this.dao = dao
    }
  
    createTable() {
      const sql = `
      CREATE TABLE IF NOT EXISTS menus (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT)`
      return this.dao.run(sql)
    }
  }
  
  module.exports = Menu;