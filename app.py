#!flask/bin/python
from flask import Flask
import flask.ext.sqlalchemy
import flask.ext.restless

app = Flask(__name__, static_url_path = "")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/3do5me.db'
db = flask.ext.sqlalchemy.SQLAlchemy(app)
manager = flask.ext.restless.APIManager(app, flask_sqlalchemy_db=db)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sortOrder = db.Column(db.Integer, unique=True)
    text = db.Column(db.Unicode)
    done = db.Column(db.Boolean)

db.create_all()

manager.create_api(Task,
    methods=['GET', 'POST', 'PUT', 'DELETE'], results_per_page=50)

if __name__ == '__main__':
    app.run(debug = True)
