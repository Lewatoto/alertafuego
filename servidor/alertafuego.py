#Servidor web
from flask import Flask, render_template, request, jsonify, Response, send_file

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/datos.csv', methods=['GET'])
def csv():
    return send_file('datos.csv',
                     mimetype='text/csv',
                     attachment_filename='datos.csv',
                     as_attachment=True)

if __name__ == '__main__':
    try:
        app.run(debug = True, host='0.0.0.0')
    except:
        print "error"
