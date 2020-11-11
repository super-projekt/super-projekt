class UserRepository:

    def __init__(self, db):
        self.users = db.users

    def get_all(self):
        return self.users.find()

    def get_by_id(self, id: str):
        pass

    def create(self, data):
        pass

    def update(self, id: str, data):
        pass

    def delete(self, id: str):
        pass