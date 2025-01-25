# app/routes.py

from flask import Blueprint, request, jsonify

main_blueprint = Blueprint("main", __name__)

@main_blueprint.route("/", methods=["GET"])
def hello_world():
    return jsonify({"message": "Hello from Flask!"})

@main_blueprint.route("/echo", methods=["POST"])
def echo_data():
    data = request.json
    # echo back the received data
    return jsonify({"received": data})
