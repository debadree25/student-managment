const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");

const Notif = require("../models/Notif");

router.post("", (req, res) => {
    const notif = Notif({
        detail: req.body.detail
    });
    notif.save().then(() => {
        res.status(200).json({
            message: "Saved Successfully"
        })
    }).catch(()=> {
        res.status(400).json({
            message: "not Saved"
        })
    })
})

module.exports = router;