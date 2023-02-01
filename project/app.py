from flask import Flask, redirect, url_for, render_template

# Create our app object, use this page as our settings (will pick up DEBUG)
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
    # session đg lỗi chưa biết cách truyền dữ liệu qua template ntn


@app.route('/about-us/')
def aboutUs():
    return render_template('aboutus.html')


@app.route('/activities/')
def activities():
    return render_template('activities.html')


@app.route('/contact-us/')
def contactUs():
    return render_template('contactus.html')


@app.route('/nav-bar/')
def navBar():
    return render_template('navbar.html')


@app.route('/slideshow/')
def slideShow():
    return render_template('slideshow.html')


@app.route('/video/')
def video():
    return render_template('video.html')
