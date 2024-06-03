from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)


@app.route('/', methods=["POST", "GET"])
def index():
    """
    Homepage for the website.
    """
    return render_template('html/page.html')


@app.route("/sequence", methods=["POST"])
def mode():
    """
    """
    words = json.loads(request.data)

    return render_template('html/page.html',  mode=mode, board=board)


@ app.route("/guess", methods=["POST"])
def guess():
    """
    Guess n words for a given clue, board
    """
    clue, board, n = json.loads(request.data)
    guesses = guesser.guess(clue, board, int(n))
    for i in guesses:
        for card in board:
            if card["id"] == i:
                print(card["text"])
    guess_details = jsonify(guesses=guesses)
    return guess_details


@ app.route("/clue", methods=["POST"])
def clue():
    """
    Generate a clue
    """

    board, team = json.loads(request.data)
    cluer.set_state(board=board, team=team)
    clue, targets = cluer.generate_clue()
    clue_details = jsonify(clue=clue, targets=targets)

    return clue_details


@ app.route("/instructions", methods=["GET"])
def instructions():
    """
    Render the dialog box containing the instructions
    """
    return render_template('html/instructions.html')


if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(host='127.0.0.1', port=8080, debug=True)
