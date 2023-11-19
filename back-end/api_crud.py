from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

db_config = mysql.connector.connect(
    user = "root",
    password = "1234",
    host = "localhost",
    database = "banco_de_dados",
)

cursor = db_config.cursor()




app = Flask(__name__)
CORS(app)

@app.route('/salvar_usuario', methods = ['POST'])
def salvar_usuario():
    try:
        dados_usuarios = request.json
        nome = dados_usuarios['nome']
        telefone = dados_usuarios['telefone']
        cpf = dados_usuarios['cpf']
        estado = dados_usuarios['estado']
        cidade = dados_usuarios['cidade']
        insert_query = 'INSERT INTO usuarios (nome, telefone, cpf, estado, cidade) VALUES (%s,%s,%s,%s,%s)'
        cursor.execute(insert_query, (nome, telefone, cpf, estado, cidade))
        db_config.commit()
        return jsonify({'message': 'Usuário salvo com sucesso!'})
    except Exception:
        return jsonify({'error': 'Erro não previsto'}), 500


@app.route('/buscar', methods = ['GET'])
def buscar():
    try:
        query = 'SELECT * FROM usuarios'
        cursor.execute(query)
        usuarios = cursor.fetchall()
        lista_usuarios = [{'id': usuario[0],
                            'nome': usuario[1],
                            'telefone': usuario[2],
                            'cpf': usuario[3],
                            'estado': usuario[4],
                            'cidade': usuario[5]} for usuario in usuarios]
        return jsonify(lista_usuarios)
    except Exception:
        return jsonify({'error': 'Erro não previsto'}), 500

@app.route('/deletar/<id>', methods = ['DELETE'])
def deletar(id):
    try:
        query = "DELETE FROM usuarios WHERE idusuarios = %s"
        cursor.execute(query, (id,))
        db_config.commit()
        return jsonify({'message': 'Usuário deletado com sucesso!'})
    except Exception:
        return jsonify({'error': 'Erro não previsto'}), 500

@app.route('/editar/<id>', methods=['PUT'])
def editar(id):
    try:
        dados_usuario = request.json
        nome = dados_usuario['nome']
        telefone = dados_usuario['telefone']
        cpf = dados_usuario['cpf']
        estado = dados_usuario['estado']
        cidade = dados_usuario['cidade']
        update_query = 'UPDATE usuarios SET nome = %s, telefone = %s, cpf = %s, estado = %s, cidade = %s WHERE idusuarios = %s'
        cursor.execute(update_query, (nome, telefone, cpf, estado, cidade, id))
        db_config.commit()
        return jsonify({'message': 'Usuário editado com sucesso!'})
    except Exception:
        return jsonify({'error': 'Erro não previsto'}), 500



if __name__ == '__main__':
    app.run(port=5000, host='localhost', debug=True)

cursor.close()
db_config.close()