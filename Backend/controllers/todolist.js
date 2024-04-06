import { CosmosClient } from '@azure/cosmos';
 
const endpoint = '';
console.log(endpoint,"emdpoint")
const key = '==';
const databaseId = '';
const containerId = '';
 
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

const createTodoList = async (req, res, next) => {
    try {
        const newItem = req.body;
        const { resource } = await container.items.create(newItem);
        res.json(resource);
    } catch (error) {
        next(error.message);
    }
}
 
const fetchTodoList = async (req, res, next) => {
    try {
        const { resources: todolist } = await container.items.readAll().fetchAll();
        res.json(todolist);
    } catch (error) {
        next(error.message);
    }
}
 
const updateTodoList = async (req, res, next) => {
    try {
        const updatedItem = req.body;
        const { resource: updatedTodoitem } = await container.item(req.params.id).replace(updatedItem);
        res.json(updatedTodoitem);
    } catch (error) {
        next(error.message);
    }
}
 
const deleteTodoList = async (req, res, next) => {
    try {
        console.log("before container");
        console.log(req.params.id)
        await container.item(req.params.id).delete();
        console.log("container");
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}
 
export default { createTodoList, fetchTodoList, updateTodoList, deleteTodoList };