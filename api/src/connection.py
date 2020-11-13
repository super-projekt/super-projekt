from pymongo import MongoClient

# connecting to the host
client = MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false')

# getting a database & specific collection
db = client['super-projekt']
user_collection = db['user']

# creating an example user to insert into collection
example_user = {'name': 'Radecki von Radetz', 'user_id': 1987}

# printing all collections
print(db.list_collection_names())

# inserting a user into a user collection
user_collection.insert_one(example_user)

# printing out what's inside the user collection in our db
print(user_collection.find_one())
