const z = require("zod");

const createTodo = {
    title: z.string(),
    description: z.string()
}

const updateTodo = {
    id: z.string()
}
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}