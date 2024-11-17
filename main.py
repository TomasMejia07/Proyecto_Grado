from flask import Flask, render_template

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

@app.route('/recuperacion')
def recuperarContraseñaCorreo():
    return render_template("recuperacion/RecuperaC_correo.html")

@app.route('/recuperacion/codigo')
def recuperarContraseñaCodigo():
    return render_template("recuperacion/RecuperaC_Codigo.html")

@app.route('/recuperacion/recuperar')
def recuperarContraseña():
    return render_template("recuperacion/Cambiar_Contraseña.html")

if __name__ == '__main__':
    app.run(debug=True) 