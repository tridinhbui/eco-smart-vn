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
    return render_template('activities/activities.html')

@app.route('/activities/page2/')
def activities_page2():
    return render_template('activities/page2.html')

@app.route('/activities/page3/')
def activities_page3():
    return render_template('activities/page3.html')

@app.route('/activities/page4/')
def activities_page4():
    return render_template('activities/page4.html')

@app.route('/contact-us/')
def contactUs():
    return render_template('contactus.html')

@app.route('/product/')
def product():
    return render_template('product.html')

@app.route('/nav-bar/')
def navBar():
    return render_template('navbar.html')


@app.route('/slideshow/')
def slideShow():
    return render_template('slideshow.html')


@app.route('/video/')
def video():
    return render_template('video.html')
