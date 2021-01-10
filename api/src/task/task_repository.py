import pymongo
from bson.objectid import ObjectId

class TaskRepository:

    def __init__(self, db):
        self.tasks = db.tasks # czy to jest stworzenie kolekcji tasks?

    # get all tasks
    def get_all(self):
        return self.tasks.find()

    # get task with a given id
    # czy tu nie będziemy potrzebowac jeszcze funkcji na np znajdowanie wszystkich tasków danego użytkownika itp?
    def get_by_id(self, id: str):
        # Convert from string to ObjectId (jest task bo nasza kolekcja w db sie tak nazywa):
        document = client.db.task.find_one({'_id': ObjectId(id)})
        return self.task.find_one(document)

    # create a task
    #instance attribute 'data' defined outside of __init__ ???
    def create(self, data):
        self.data = data
        return data.insert_one()

    # update a task
    def update(self, id: str, data):
        # we find a task to update (by id)
        document = client.db.task.find_one({'_id': ObjectId(id)})
        # document is the document we want to update and the data is the things we want to replace
        return self.task.update_one(document, data)

    # delete a task
    def delete(self, id: str):
        document = client.db.task.find_one({'_id': ObjectId(id)})
        return self.task.delete_one(document)