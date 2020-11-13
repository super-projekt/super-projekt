class User:

    def __init__(self, userId, login: str, password: str):
        self.id = userId
        self.login = login
        self.password = password
        self.tasks = []
        self.goals = []