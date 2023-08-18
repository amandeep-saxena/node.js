const Task = require('../model/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find(req.body);
        res.status(200).json({ tasks })

    } catch (error) {
        res.status(500).json({ msg: error })

    }

}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}


const getTask = async (req, res, next) => {

    try {
        const { id: Id } = req.params
        const task = await Task.findOne({ _id: Id });

        if (!task) {

            var error = new Error("Not found ");
            error.status = 404;

            return next(error)
            // return res.status(404).json({ msg: 'no task with id  : ${taskId}' })
        }
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error })

    }

}

const updateTask = async (req, res) => {

    try {

        const { Id: taskId } = req.params
        // console.log(req.params)
        const app = await Task.findOneAndUpdate({ _Id: taskId }, req.body, {
            new: true,
            runValidation: true
        })


        if (!app) {
            return res.status(404).json({ msg: 'no task with id  : ${taskId}' })
        }

        res.status(201).json({ app });

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}


const deleteTask = async (req, res) => {

    try {
        const { Id: taskId } = req.params;
        const TO = await Task.findOneAndDelete({ _Id: taskId })

        if (!TO) {
            return res.status(404).json({ msg: 'no task with id  : ${taskId}' })
        }

        // res.status(200).json({ task });
        res.status(203).json({ task: null, status: "done yes......" });
    } catch (error) {
        res.status(400).json({ error });

    }

}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}