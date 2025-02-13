let sqlite = openDatabase('prevtev', '1.0', 'db app prevtev', 2 * 1024 * 1024)
// var sqlite = window.sqlitePlugin.openDatabase({
//   name: 'myShopping.db',
//   location: 'default'
// })
export default async ({
                        Vue
                      }) => {
  Vue.prototype.$sqlite = sqlite
}

let sql = [
  'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY ASC, name VARCHAR(100), username VARCHAR(30) UNIQUE, email VARCHAR(80) UNIQUE, password VARCHAR(200) NOT NULL, sex TINYINT(1) DEFAULT 0, birth DATE, phone VARCHAR(15), image BLOB )',
  'CREATE TABLE IF NOT EXISTS supermarkets(id INTEGER PRIMARY KEY ASC, name VARCHAR(100) UNIQUE, image BLOB )',
  'CREATE TABLE IF NOT EXISTS marks(id INTEGER PRIMARY KEY ASC, name VARCHAR(100) UNIQUE, image BLOB )',
  'CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY ASC, name VARCHAR(100), image BLOB, mark_id INTEGER)',
  'CREATE TABLE IF NOT EXISTS prices(id INTEGER PRIMARY KEY ASC, supermarket_id INTEGER, product_id INTEGER, price REAL(10,2) DEFAULT 0.0)'
]
// let sql = ['DROP TABLE IF EXISTS products']
// let sql = ['DROP DATABASE myShoppingdb']
// alert('SQL: ' + sql)
sqlite.transaction(function (tx) {
  for (let line in sql) {
    tx.executeSql(sql[line])
  }
}, function (error) {
  // alert(`Transaction ERROR: ${error.message}`)
  return 'Transaction ERROR: ' + error.message
}, function () {
  // alert('Banco Criado com sucesso!')
  return 'Banco Criado com sucesso!'
})
