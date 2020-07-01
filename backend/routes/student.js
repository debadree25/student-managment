const express=require('express')
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/Student");

router.get("", async (req, res) => {
    //console.log(req.query);
    const students = await Student.find(req.query);
    if (students) {
        console.log(students);
        res.status(200).json({
            status: true,
            message: "Students Data Found",
            data: students,
        });
    } else {
        res.status(404).json({
            status: false,
            message: "Some error happened",
        });
    }
});

router.get("/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (student) {
        res.status(200).json({
            status: true,
            message: "Student Found",
            data: student,
        });
    } else {
        res.status(404).json({
            status: false,
            message: "Student Not found",
        });
    }
});

router.put("/:id", async (req, res) => {
    const resp = await Student.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body);
    if (resp.n > 0) {
        res.status(200).json({
            status: true,
            message: "Student data updated",
        });
    } else {
        res.status(404).json({
            status: false,
            message: "No data updated",
        });
    }
});

router.delete("/:id", async (req, res) => {
    const resp = await Student.deleteOne({ _id: req.params.id });
    if (resp.deletedCount > 0) {
        res.status(200).json({
            status: true,
            message: "Data deleted",
        });
    } else {
        res.status(404).json({
            status: false,
            message: "No data deleted",
        });
    }
});

router.post("/create", async (req, res) => {
    //console.log(req.body);
    const { name, department, address, joining_year, year, passing_year, email, phone, socials } = req.body;
    const student = Student({
        name,
        department,
        address,
        joining_year,
        year,
        passing_year,
        email,
        phone,
        socials: socials == null ? [] : socials,
    });
    const find = await Student.findOne({ email });
    if (!find) {
        try {
            const save = await student.save();
            //console.log(save);
            res.status(201).json({
                status: true,
                message: "Student created",
                data: save,
            });
        } catch (err) {
            res.status(400).json({
                status: false,
                message: "Unable to create student",
                error: err,
            });
        }
    } else {
        res.status(400).json({
            status: false,
            message: "Student exists",
        });
    }
});

module.exports = router;
