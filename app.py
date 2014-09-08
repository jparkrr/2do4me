#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response

app = Flask(__name__, static_url_path = "")

tasks = {}

tasks[0] = {
    'sortOrder': 0,
    'text': u'Buy groceries',
    'done': False
}

tasks[1] = {
    'sortOrder': 1,
    'text': u'Learn Python',
    'done': False
}

def max_in_dict(key):
    return max(task[key] for _,task in tasks.iteritems())

def task_with_id(task_id, task):
    return dict(task, **{'id': task_id})

def task_json(task_id, task=None):
    if not task:
        task = tasks[task_id]

    return jsonify(task_with_id(task_id, task))

def tasks_json():
    sorted_tasks = sorted(tasks.iteritems(), key=lambda x: x[1]['sortOrder'])
    task_list = [task_with_id(t_id, t) for t_id, t in sorted_tasks]
    return jsonify({'tasks':task_list})

@app.route('/api/tasks', methods = ['GET'])
def get_tasks():
    return tasks_json()

@app.route('/api/tasks/<int:task_id>', methods = ['GET'])
def get_task(task_id):
    try:
        return task_json(task_id)
    except KeyError:
        abort(404)

@app.route('/api/tasks', methods = ['POST'])
def create_task():
    data = request.get_json(silent=True)
    if not data or not data['text']:
        abort(400)

    next_id = len(tasks) + 1
    task = {
        'sortOrder': max_in_dict('sortOrder')+1,
        'text': data['text'],
        'done': False
    }
    tasks[next_id] = task
    return task_json(next_id, task), 201

@app.route('/api/tasks/<int:task_id>', methods = ['PUT'])
def update_task(task_id):
    data = request.get_json(silent=True)
    if not data:
        abort(400)
    if 'done' in data and type(data['done']) is not bool:
        abort(400)

    try:
        task = tasks[task_id]
        if data['text']:
            task['text'] = str(data['text'])
        if data['done']:
            task['done'] = data['done']
        return task_json(task_id, task)

    except KeyError:
        abort(404)

@app.route('/api/tasks/<int:task_id>', methods = ['DELETE'])
def delete_task(task_id):
    try:
        del tasks[task_id]
        return jsonify({'result': True})

    except KeyError:
        abort(404)

@app.errorhandler(400)
def not_found(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify( {'error':'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug = True)
