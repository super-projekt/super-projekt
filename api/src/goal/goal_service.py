from .goal_repository import GoalRepository
from ..task.task_repository import TaskRepository

class GoalService:
    
    def __init__(self, goalRepository, taskRepository):
        pass

    # CRUD operations

    def get_all(self):
        pass

    def get_by_id(self, goal_id):
        pass

    def create(self, goal_data):
        pass

    def update(self, goal_id, goal_data):
        pass

    def delete(self, goal_id):
        pass

    # operations with tasks

    def add_task_to_goal(self, task_id, goal_id):
        pass

    def remove_task_from_goal(self, task_id,goal_id):
        pass