from flask import Flask, redirect, url_for, render_template
from flask_flatpages import FlatPages

# Tell Flatpages to auto reload when a page is changed, and look for .md files
FLATPAGES_AUTO_RELOAD = True
FLATPAGES_EXTENSION = '.md'

# Create our app object, use this page as our settings (will pick up DEBUG)
app = Flask(__name__)

# For settings, we just use this file itself, very easy to configure
app.config.from_object(__name__)

# We want Flask to allow no slashes after paths, because they get turned into flat files
app.url_map.strict_slashes = False

# Create an instance of our extension
pages = FlatPages(app)

@app.route('/')
def index():
    return render_template('index.html', content = "dep trai")

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)

#Truyền vào kiểu biến String 
@app.route('/hello')
def hello():
    return render_template('index.html', content = "dep trai")

@app.route('/navbar')
def navBar():
    return render_template('navbar.html', content = "deptrai")

@app.route('/about-us')
def aboutUs():
    return render_template('aboutus.html', content = "dep trai")

@app.route('/activities')
def activities():
    return render_template('activities.html', content = "dep trai")


@app.route('/footer')
def footer():
    return render_template('footer.html', content = "dep trai")

@app.route('/slide-show')
def slideShow():
    return render_template('slideshow.html', content = "dep trai")
#Truyền vào kiểu biến String User
@app.route('/user/<name>')
def hello_user(name):
    if name == 'admin':
        return redirect(url_for('hello_admin'))
    return f"<h1> Hello {name}!</h1>"

#Truyền vào kiểu biến String Admin
@app.route('/admin')
def hello_admin():
    return f"<h1> Hello admin!</h1>"

#Truyền vào kiểu biến int
@app.route('/block/<int:block_id>')
def blog_id(block_id):
    return f"<h1> Hello {block_id}!</h1>"

app.run(host='0.0.0.0', port=5000)

# @app.get('/login')
# def login_get():
#     return show_the_login_form()

# @app.post('/login')
# def login_post():
#     return do_the_login()