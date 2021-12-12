const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// sample use a logging middleware.
const logMiddleware = (req, res, next) =>

{
    console.log(`MW: process request ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(logMiddleware);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));

// npm run dev