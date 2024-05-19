from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/set_location', methods=['POST'])
def set_location():
    data = request.json
    new_lat = data.get('latitude')
    new_lon = data.get('longitude')
    return jsonify({"status": "success", "new_latitude": new_lat, "new_longitude": new_lon})

if __name__ == '__main__':
    app.run(debug=True)
