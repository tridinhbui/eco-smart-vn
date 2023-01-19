from flask import Flask, redirect, url_for, render_template, session, request
import pyrebase

# Create our app object, use this page as our settings (will pick up DEBUG)
app = Flask(__name__)


config = {
    'apiKey': "AIzaSyAfUSrTewA2En20Q3PpdiTiW7AnHIhkB9k",
    'authDomain': "eco-smart-vn.firebaseapp.com",
    'projectId': "eco-smart-vn",
    'storageBucket': "eco-smart-vn.appspot.com",
    'messagingSenderId': "745988473160",
    'appId': "1:745988473160:web:9c96a63c79a41150cdb37d",
    'measurementId': "G-CM5BN4C49T",
    'databaseURL': "",
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

app.secret_key = 'somethingsecret'


@app.route('/', methods=['GET', 'POST'])
def index():

    return render_template('index.html')
    # session đg lỗi chưa biết cách truyền dữ liệu qua template ntn


@app.route('/signin/', methods=['GET', 'POST'])
def signin():
    unsuccessful = 'Please check your credentials'
    successful = 'Login successful'

    if request.method == 'POST':
        email = request.form.get('name')
        password = request.form.get('email')
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            print(auth.get_account_info(user['idToken']))
            return render_template('signin.html', s=successful)
        except:
            return render_template('signin.html', us=unsuccessful)

    return render_template('signin.html')


@app.route('/signup/', methods=['GET', 'POST'])
def signup():
    unsuccessful = 'Please check your credentials'
    successful = 'Login successful'

    if request.method == 'POST':
        email = request.form.get('name')
        password = request.form.get('email')
        try:
            user = auth.create_user_with_email_and_password(email, password)
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            print(auth.get_account_info(user['idToken']))
            return render_template('signup.html', s=successful)
        except:
            return render_template('signup.html', us=unsuccessful)

    return render_template('signup.html')


@app.route('/logout/')
def logout():
    session.pop('user', None)
    return redirect('/')


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
