const { Router } = require('express');
const router = Router();
server.use(express.static(path.join(__dirname, 'dist')));
router.get('/static')