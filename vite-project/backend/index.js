const express = require("express");
const { json } = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "8bb442bb-193c-4555-9666-8ddeb11be0d3" } }
        );
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
    //return res.json({ username: username, secret: "sha256..." });
});



//   8bb442bb - 193c - 4555 - 9666 - 8ddeb11be0d3



app.listen(3001, () => {
    console.log("Server strated at port 3001")
});