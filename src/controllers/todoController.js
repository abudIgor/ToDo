const Todo = require("../models/Todo");
const TodoService = require("../services/TodoService");

exports.get = (req,res) => {
    const id = req.params.id
    console.log("GET");
    res.send(`Ok Get id=${id}`);
}

exports.get = async (req, res) => {
    let id = req.params.id;
    try {
        const todo = await TodoService.getTodoById(id);
        res.json(todo);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

exports.getAll = async (req,res) => {
    try {
        const todos = await TodoService.getAllTodos();
        if(!todos) {
            return res.status(404).json("There are no todos published yet!");
        }
        res.status(201).json(todos);
    } catch (error) {
        return res.status(500).json({ error: error});
    }
}

exports.add = async (req,res) => {
   try {
        const createTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createTodo);
   } catch(error) {
        return res.status(500).json({error:error});
   }
}

exports.update = async (req, res) => {
    let id = req.params.id;
  
    try {
      const todo = {};
      todo.title = req.body.title;
      todo.description = req.body.description;
      todo.finished = req.body.finished;
  
      const updatedTodo = await TodoService.updateTodo(id, todo);
  
      if (updatedTodo.nModified === 0) {
        return res.status(404).json({});
      }
  
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  
exports.delete = async (req, res) => {
    let id = req.params.id;
  
    try {
      const deleteResponse = await TodoService.deleteTodo(id);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };