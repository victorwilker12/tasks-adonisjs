'use strict'

//use model Task
const Task = use('App/Models/Task')


class TaskController {
  async index({view}){

    const tasks = await Task.all


    return view.render('tasks',{
      title: 'Lastest Tasks',
      tasks: tasks
    })
  }
}

module.exports = TaskController
