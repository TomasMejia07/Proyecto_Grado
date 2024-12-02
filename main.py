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

@app.route('/hub/codigo')
def codigo():
    return render_template("registration/codigo.html")

@app.route('/hub/contrasena')
def contrasena():
    return render_template("registration/contrasena.html")

@app.route('/recuperacion')
def recuperarContraseñaCorreo():
    return render_template("recuperacion/RecuperaC_correo.html")

@app.route('/recuperacion/codigo')
def recuperarContraseñaCodigo():
    return render_template("recuperacion/RecuperaC_Codigo.html")

@app.route('/recuperacion/recuperar')
def recuperarContraseña():
    return render_template("recuperacion/Cambiar_Contraseña.html")

@app.route('/dashboardAdmin')
def home():
    return render_template("dashboardAdmin/dashboardAdmin.html")

@app.route('/dashboardAdmin/categoria')
def categoriaAd():
    return render_template("dashboardAdmin/categoria.html")

@app.route('/dashboardAdmin/producto')
def productoAd():
    return render_template("dashboardAdmin/producto.html")

@app.route('/dashboardAdmin/usuario')
def usuarioAd():
    return render_template("dashboardAdmin/usuario.html")

@app.route('/dashboardAdmin/pedido')
def pedidoAd():
    return render_template("dashboardAdmin/pedido.html")

@app.route('/dashboardAdmin/crearCategoria')
def crearCategoriaAd():
    return render_template("dashboardAdmin/crearCategoria.html")

@app.route('/dashboardAdmin/crearProducto')
def crearProductoAd():
    return render_template("dashboardAdmin/crearProducto.html")

@app.route('/dashboardAdmin/crearUsuario')
def crearUsuarioAd():
    return render_template("dashboardAdmin/crearUsuario.html")

if __name__ == '__main__':
    app.run(debug=True) 