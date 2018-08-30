from flask import Flask, request, json, jsonify
app = Flask(__name__)
db = []


@app.route('/', methods=['GET', 'POST'])
def get_request():
    if request.method == 'POST':
        db.append(request.get_json())
    return jsonify(db)
