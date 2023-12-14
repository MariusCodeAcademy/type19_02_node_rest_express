const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Users sever listening on port http://localhost:${PORT}`);
});
