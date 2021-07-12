const { chromium } = require('playwright')
const config = require('../../server/db/knexfile').development
const db = require('knex')(config)
const { serverUrl } = require('./index')

jest.setTimeout(20000)

let browser
let page
beforeAll(async () => {
  browser = await chromium.launch({ headless: true, slowMo: 500 })
  await db.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(async () => {
  const context = await browser.newContext()
  page = await context.newPage()
  await db.seed.run({ directory: './server/db/seeds' })
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
  return db.destroy()
})

// Test goes here
test('Member can Login & Volunteer', async () => {
  await page.goto(serverUrl)

  await Promise.all([
    page.waitForNavigation(),
    page.click('text=Sign in')
  ])
  expect(await page.url()).toBe(`${serverUrl}/signin`)

  await page.fill('#username', 'member')
  await page.fill('#password', 'member')

  await Promise.all([
    page.waitForNavigation(),
    page.click('button', { force: true })
  ])
  expect(await page.url()).toBe(`${serverUrl}/gardens/1`)

  await page.click('text=Volunteer')
  expect(await page.content()).toMatch('Un-Volunteer')
})
