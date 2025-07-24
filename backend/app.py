# from flask import Flask, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/')
# def home():
#     return jsonify({"message": "Welcome to the Flask backend"})

# @app.route('/api/data')
# def get_data():
#     return jsonify({
#         "status": "success",
#         "data": {
#             "message": "Hello from Flask",
#             "items": ["Item 1", "Item 2", "Item 3"]
#         }
#     })

# if __name__ == '__main__':
#     app.run(debug=True, port=5001, host='0.0.0.0')


from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin from React frontend

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify(), 200

if __name__ == '__main__':
    app.run(port=5001, debug=True)
