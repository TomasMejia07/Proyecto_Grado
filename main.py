from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/hub/correo', methods=['GET','POST'])
def correo():
    return render_template("registration/correo.html")

@app.route('/hub/user')
def user():
    return render_template("registration/user.html")

if __name__ == '__main__':
    app.run(debug=True) 