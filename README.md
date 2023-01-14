Project structure:
├── project
│   ├── build           # Deployment folder for Netlify (ecosmart.netlify.app). Static files are created here by Frozen-Flask!
│   ├── static
│   │   ├── css         # CSS files for styling the pages
│   │   ├── img         # Images displayed on the pages
│   │   └── js          # JavaScript files for styling the pages
│   ├── templates       # Base templates
|   └── app.py          # Routes in the Flask app
├── venv                # Virtual environment to activate
└── build.py            # This script generates static files based on app.py and writes them to the "project/build" folder

Install requirements:
$ pip install -r requirements.txt

Activate the virtual environment::
$ venv\Scripts\activate

Run the Flask development server and build files for deployment (in virtual environment):
$ python build.py
(Then navigate to http://localhost:5000)