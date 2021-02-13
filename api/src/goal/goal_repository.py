import pymongo
from bson.objectid import ObjectId

class GoalRepository:

    def __init__(self, db):
        self.goals = db.goals

    def get_all(self):
        return self.goals.find()

    def get_by_id(self, id: str):
        return self.goals.find_one({'_id': ObjectId(id)})

    def create(self, data):
        return self.goals.insert_one(data)

    def update(self, id: str, data):
        return self.goals.update_one({'_id': ObjectId(id)}, data)

    def delete(self, id: str):
        return self.goals.delete_one({'_id': ObjectId(id)})