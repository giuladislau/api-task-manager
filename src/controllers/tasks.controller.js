import TasksModel from '../models/tasks.model.js';

class TasksController {

  static async getAll(req, res, next) {
    try {
      const tasks = await TasksModel.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ erro: 'ID inválido.' });
      }

      const task = await TasksModel.findById(id);

      if (!task) {
        return res.status(404).json({ erro: 'Tarefa não encontrada.' });
      }

      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { titulo, descricao, concluida } = req.body;

      if (!titulo) {
        return res.status(400).json({ erro: 'O campo titulo é obrigatório.' });
      }

      const task = await TasksModel.create({
        titulo,
        descricao,
        concluida
      });

      return res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ erro: 'ID inválido.' });
      }

      const { titulo, descricao, concluida } = req.body;

      if (!titulo) {
        return res.status(400).json({ erro: 'O campo titulo é obrigatório.' });
      }

      const updatedTask = await TasksModel.update(id, {
        titulo,
        descricao,
        concluida
      });

      if (!updatedTask) {
        return res.status(404).json({ erro: 'Tarefa não encontrada.' });
      }

      return res.status(200).json(updatedTask);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ erro: 'ID inválido.' });
      }

      const deletedTask = await TasksModel.delete(id);

      if (!deletedTask) {
        return res.status(404).json({ erro: 'Tarefa não encontrada.' });
      }

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default TasksController;