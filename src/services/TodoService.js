const Todo = require("../models/Todo");

module.exports = class TodoService {
  
    static async getAllTodos() {
        try {
            const allTodos = await Todo.find();
            return allTodos;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async addTodo(data) {
        try {
            const newTodo = {
                title       : data.title,
                description : data.description,
                date        : data.date,
                finished    : data.finished,
            }
            const response = await new Todo(newTodo).save();
            return response;
        } catch (error) {
            console.log(`Could note add todo ${error}`);
        }
    }

    static async deleteTodo(todoId) {
        try {
            const response  = await Todo.findOneAndDelete({ _id: todoId });
            return response;
        } catch (error) {
            console.log(`Could not delete todo ${error}`);
        }
    }

    static async updateTodo(id, todo) {
        try {
            const updateResponse = await Todo.updateOne(
                {_id: id},
                { ...todo, date: new Date()}
            )
        } catch (error) {
            console.log(`Could note update todo ${error}`);
        }
    }

    static async getTodoById(todoId) {
        try {
            const todo = await Todo.findById({_id:todoId});
            return todo;
        } catch (error) {
            console.log(`Could not found. ${error}`);
        }
    }

}