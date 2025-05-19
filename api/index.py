from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__, template_folder='../templates', static_folder='../static')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/get_balance')
def get_balance():
    return {'balance': 30000}
