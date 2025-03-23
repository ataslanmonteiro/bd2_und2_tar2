const { Tema } = require('../models');

exports.criarTema = async (req, res) => {
  try {
    const tema = await Tema.create(req.body);
    res.status(201).json(tema);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarTemas = async (req, res) => {
  try {
    const temas = await Tema.findAll();
    res.json(temas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizarTema = async (req, res) => {
  try {
    const tema = await Tema.findByPk(req.params.id);
    if (tema) {
      await tema.update(req.body);
      res.json(tema);
    } else {
      res.status(404).json({ message: 'Tema não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletarTema = async (req, res) => {
  try {
    const tema = await Tema.findByPk(req.params.id);
    if (tema) {
      await tema.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Tema não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarTemaPorId = async (req, res) => {
    try {
        const tema = await Tema.findByPk(req.params.id);
        if (tema) {
            res.json(tema);
        } else {
            res.status(404).json({ message: 'Tema não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};