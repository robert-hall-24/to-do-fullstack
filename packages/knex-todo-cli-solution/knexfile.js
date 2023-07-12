import * as Path from 'path/posix'
import * as Url from 'url'

const filename = Url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(filename)

export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'),
    },
    migrations: {
      loadExtensions: [".js", ".mjs"],
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      loadExtensions: [".js", ".mjs"],
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      loadExtensions: [".js", ".mjs"],
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      loadExtensions: [".js", ".mjs"],
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: '/app/storage/prod.sqlite3',
    },
    migrations: {
      loadExtensions: [".js", ".mjs"],
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      loadExtensions: [".js", ".mjs"],
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },
}
