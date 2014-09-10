#!flask/bin/python
from flask import Flask
import flask.ext.sqlalchemy
import flask.ext.restless
from sqlalchemy.sql.expression import func

app = Flask(__name__, static_url_path = "")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/3do5me.db'
db = flask.ext.sqlalchemy.SQLAlchemy(app)
manager = flask.ext.restless.APIManager(app, flask_sqlalchemy_db=db)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sortOrder = db.Column(db.Integer)
    text = db.Column(db.Unicode)
    done = db.Column(db.Boolean)

    def __init__(self, text):
        self.text = text
        self.done = False

        max_sort = db.session.query(func.max(Task.sortOrder)).scalar()
        if max_sort is not None:
            self.sortOrder = max_sort + 1
        else:
            self.sortOrder = 0

db.create_all()

manager.create_api(Task,
    methods=['GET', 'POST', 'PUT', 'DELETE'], results_per_page=50)

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug = True)
