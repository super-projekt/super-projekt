class Task:

    # wszystkie atrybuty jakie musi mieć task
    def __init__(self, name, description, user_id, goal_id, state):
        self.name = name
        self.description = description
        self.user_id = user_id
        self.goal_id = goal_id
        self.state = state

