import express from 'express'
const app = express()
app.use(express.json())

// Memória para armazenar as tarefas
let tasks = [];
let nextId = 1;

// Rota para listar todas as tarefas (GET)
app.get('/tarefas', (req, res) => {
    return res.status(200).json(tasks);
});

// Rota para criar uma nova tarefa (POST)
app.post('/tarefas', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
    }
    const newTask = {
        id: nextId++,
        title,
        completed: false
    };
    tasks.push(newTask);
    return res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa por ID (PUT)
app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const taskId = parseInt(id);

    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    if (title !== undefined) {
        tasks[taskIndex].title = title;
    }
    if (completed !== undefined) {
        tasks[taskIndex].completed = completed;
    }
    return res.status(200).json(tasks[taskIndex]);
});

// Rota para excluir uma tarefa por ID (DELETE)
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const taskId = parseInt(id);

    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length === initialLength) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    return res.status(204).send();
});
export default app;