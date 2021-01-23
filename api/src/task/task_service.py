from .task_model import Task
from .task_repository import TaskRepository

class TaskService:
    
    def __init__(self, taskRepository):
        self.taskRepository = taskRepository

    # CRUD operations

    def get_all(self):
        pass

    def get_unfinished_for_today(self):
        pass

    def get_by_id(self, task_id):
        pass

    def create(self, task_data):
        pass

    def update(self, task_id, task_data):
        pass

    def delete(self,task_id):
        pass

    # Task state changes

    def start(self, task_id):
        pass

    def finish(self, task_id):
        pass

    def cancel(self, task_id):
        pass
