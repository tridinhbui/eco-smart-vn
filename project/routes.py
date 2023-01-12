from flask import Flask, redirect, url_for, render_template

# Create our app object, use this page as our settings (will pick up DEBUG)
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', content = "dep trai")

#Truyền vào kiểu biến String 
@app.route('/hello/')
def hello():
    return render_template('index.html', content = "dep trai")

@app.route('/navbar/')
def navBar():
    return render_template('navbar.html', content = "deptrai")

@app.route('/about-us/')
def aboutUs():
    return render_template('aboutus.html', content = "dep trai")

@app.route('/activities/')
def activities():
    return render_template('activities.html', content = "dep trai")

@app.route('/footer/')
def footer():
    return render_template('footer.html', content = "dep trai")

@app.route('/slide-show/')
def slideShow():
    return render_template('slideshow.html', content = "dep trai")