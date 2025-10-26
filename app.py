from flask import Flask, render_template

# Initialize the Flask app
app = Flask(__name__)

@app.route('/')
def home():
    """
    Renders the main homepage.
    """
    return render_template('index.html')

if __name__ == '__main__':
    # Runs the app on localhost, port 5000
    # Set debug=True for development to see errors
    app.run(debug=True)