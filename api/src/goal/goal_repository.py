class GoalRepository:

    def __init__(self, db):
        self.goals = db.goals

    def get_all(self):
        return self.goals.find()

    def get_by_id(self, id: str):
        pass

    def create(self, data):
        pass

    def update(self, id: str, data):
        pass

    def delete(self, id: str):
        pass