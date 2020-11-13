class TaskRepository:

    def __init__(self, db):
        self.tasks = db.tasks

    def get_all(self):
        return self.tasks.find()

    def get_by_id(self, id: str):
        pass

    def create(self, data):
        pass

    def update(self, id: str, data):
        pass

    def delete(self, id: str):
        pass