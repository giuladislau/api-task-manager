import TasksModel from '../models/tasks.model.js';

/**
 * Controller responsável por tratar requisições HTTP
 * e delegar operações ao Model.
 */
class TasksController {
  static async getAll(req, res, next) {
    try {
      const tasks = await TasksModel.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { titulo, descricao } = req.body;

      if (!titulo) {
        return res.status(400).json({ erro: 'O campo titulo é obrigatório.' });
      }

      const task = await TasksModel.create({ titulo, descricao });
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const task = await TasksModel.update(id, req.body);

      if (!task) {
        return res.status(404).json({ erro: 'Tarefa não encontrada.' });
      }

      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      await TasksModel.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default TasksController;