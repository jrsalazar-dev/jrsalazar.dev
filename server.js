#!/usr/bin/env node

const puppeteer = require('puppeteer')
const path = require('path')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 3000

app.prepare().then(() => {
  const server = express()

  server.use(express.json())

  server.get('/pdf', async (req, res, next) => {
    try {
      const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
      const page = await browser.newPage()
      const filename = path.resolve(__dirname, '../dist/cv/index.html')
      const fileoutput = path.resolve(__dirname, './public/cv.pdf')
      //await page.goto(`file:///${filename}`)
      await page.goto('http://localhost:3000')
      await page.pdf({ path: fileoutput, format: 'A4' })

      browser.close()

      res.download(fileoutput)
    } catch (err) {
      console.log(err)
      res.status(500).send(JSON.stringify(err))
    }
  })

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err

    console.log(`> Ready on http://localhost:${port}`)
  })
})
