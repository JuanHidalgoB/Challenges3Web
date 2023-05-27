const express = require('express')
const Task = require('../models/TaskScheme.js')

const crearTask = async(req, res) => {
    const task = new Task(req.body)

    try{
        task.user = req.uid
        const saved = await task.save()
        res.json({
            ok: true,
            task: saved
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Internal error"
        })
    }
}
const listarTask = async (req, res) => {
    const task = await Task.find().populate('user','name');

    try{
        res.status(200).json({
            ok:true,
            task
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            ok: false,
            msg: 'Internal Error'
        })
    }
}

const actualizarTask = async (req, res) => {
    const taskId = req.params.id;
    const { user: userId, ...taskData } = req.body;
  
    try {
      const task = await Task.findById(taskId);
  
      if (!task) {
        return res.status(404).json({
          ok: false,
          msg: 'Task no encontrada',
        });
      }
  
      if (task.user.toString() !== userId) {
        return res.status(401).json({
          ok: false,
          msg: 'No autorizado',
        });
      }
  
      const updatedTask = await Task.findByIdAndUpdate(taskId, taskData, {
        new: true,
      });
  
      res.json({
        ok: true,
        task: updatedTask,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Internal error',
      });
    }
  };

  const eliminarTask = async (req, res) => {
    const taskId = req.params.id;
    const userId = req.body.user;
  
    try {
      const task = await Task.findById(taskId);
  
      if (!task) {
        return res.status(404).json({
          ok: false,
          msg: 'Task not found',
        });
      }
  
      if (task.user.toString() !== userId) {
        return res.status(401).json({
          ok: false,
          msg: 'Unauthorized',
        });
      }
  
      await Task.findByIdAndDelete(taskId);
  
      res.json({
        ok: true,
        msg: 'Task deleted',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Internal error',
      });
    }
  }



module.exports = {
    crearTask,
    listarTask,
    actualizarTask,
    eliminarTask
}