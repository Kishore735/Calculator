from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    # Run the app on all available network interfaces
    app.run(debug=True, host="192.168.29.224",port=5000)