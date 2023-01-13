from flask_frozen import Freezer
from project.app import app

# Create an instance of Freezer for generating the static files from
# the Flask application routes ('/', '/about-us', etc.)
freezer = Freezer(app)

if __name__ == '__main__':
    # Run the development server that generates the static files
    # using Frozen-Flask
    freezer.run(debug=True)