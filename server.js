const express = require("express")
const os = require("os")
const app = express()
const port = process.env.PORT || 8080
const startedAt = new Date().toISOString()
app.get("*", (_req, res) => {
  res.type("text/plain").send(
    `manara-demo-app — deployed by the Manara wizard, no clicks beyond Deploy\n` +
    `pod:        ${os.hostname()}\n` +
    `started_at: ${startedAt}\n` +
    `served_at:  ${new Date().toISOString()}\n`
  )
})
app.listen(port, () => console.log(`listening on :${port}`))
