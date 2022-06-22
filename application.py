
#from crypt import methods
import os
from turtle import title

from flask import Flask, session, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from dotenv import load_dotenv
from werkzeug.security import check_password_hash, generate_password_hash

from loginrequired import login_required

app = Flask(__name__)

#Check for environment variable
if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Set up database
engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))


@app.route("/")
def index():
    return render_template("inicio.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        user = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")

        if confirmation != password:
            flash("Las contraseñas no coinciden")
            return render_template("register.html")

        rows = db.execute(
            "SELECT usuario FROM users WHERE usuario=:username", {"username": user}).fetchall()

        if not rows:
            db.execute("INSERT INTO users (usuario, contraseña) VALUES (:username, :password)",
                       {"username": user, "password": generate_password_hash(password)})
            db.commit()
        elif rows:
            flash("El usuario ya está registrado")
            return render_template("register.html")

        return redirect("/levels")

    else:
        return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    session.clear()

    if request.method == "POST":
        rows = db.execute(
            "SELECT * FROM users WHERE usuario = :usuario",
                          {"usuario": request.form.get("username")}).fetchall()

        if len(rows) != 1 or not check_password_hash(rows[0]["contraseña"], request.form.get("password")):
            flash('invalid username and/or password')
            return render_template("login.html")

        session["user_id"] = rows[0]["id"]

        return redirect("/levels")
    else:
        return render_template("login.html")
    return render_template("login.html")

@app.route("/levels")
def levels():
    return render_template("levels.html")

@app.route("/colors")
def colors():
    return render_template("colors.html")

@app.route("/tarjetasmemoria")
def tarjetasmemoria():
    return render_template("tarjetas.html")

@app.route("/animals")
def animals():
    return render_template("animals.html")

@app.route("/sopadeletras")
def sopadeletras():
    return render_template("sopadeletras.html")


@app.route("/tictactoe")
def tictactoe():
    return render_template("tictactoe.html")

@app.route("/infoanimals")
def infoanimals():
    return render_template("infoanimals.html")

@app.route("/VocaAnimals")
def vocaanimals():
    return render_template("vocaanimals.html")
