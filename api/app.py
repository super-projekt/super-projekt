from flask import Flask, make_response, request
from pymongo import MongoClient


from src.goal.goal_service import GoalService
from src.task.task_service import TaskService
from src.user.user_service import UserService
from src.goal.goal_repository import GoalRepository
from src.task.task_repository import TaskRepository
from src.user.user_repository import UserRepository

client = MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false')

# getting a database & specific collection
db = client['super-projekt']

goalRepository = GoalRepository(db)
taskRepository = TaskRepository(db)
userRepository = UserRepository(db)
goalService = GoalService(goalRepository, taskRepository)
taskService = TaskService(taskRepository)
userService = UserService(userRepository)

app = Flask(__name__)



# root level

@app.route('/')
def hello_world():
    return 'super-projekt API. For Documentation follow this link: http://work.in.progress/'

# users

@app.route('/users', methods=['POST'])
def create_user():
    user_data = request.get_json()
    userService.create(user_data)
    headers = {
        "Content-Type": "application/json"
    }
    return make_response(None, 201,headers=headers)


@app.route("/users/<user_id>", methods=['GET'])
def get_user(user_id):
    user = userService.get_by_id(user_id)
    response_code = 404 if user is None else 200
    headers = {
        "Content-Type": "application/json"
    }
    return make_response(user, response_code, headers=headers)
        
# tasks

# goals



#   #   #   #   #   #   # 
if __name__ == '__main__':
    app.run()
