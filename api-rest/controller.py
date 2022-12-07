from db import get_db


def insert_game(name, price, rate):
    db = get_db()
    cursor = db.cursor()
    statement = "INSERT INTO games(name, price, rate) VALUES (?, ?, ?)"
    cursor.execute(statement, [name, price, rate])
    db.commit()
    return True


def update_game(id, name, price, rate):
    db = get_db()
    cursor = db.cursor()
    statement = "UPDATE games SET name = ?, price = ?, rate = ? WHERE id = ?"
    cursor.execute(statement, [name, price, rate, id])
    db.commit()
    return True


def delete_game(id):
    db = get_db()
    cursor = db.cursor()
    statement = "DELETE FROM games WHERE id = ?"
    cursor.execute(statement, [id])
    db.commit()
    return True


def get_by_id(id):
    db = get_db()
    cursor = db.cursor()
    statement = "SELECT id, name, price, rate FROM games WHERE id = ?"
    cursor.execute(statement, [id])
    return cursor.fetchone()


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d
    
def get_movies():
    db = get_db()
    db.row_factory = dict_factory
    cursor = db.cursor()
    query = "SELECT * FROM movie"
    cursor.execute(query)
    return cursor.fetchall()


# def get_data():
#     datas = [['The Shawshank Redemption', 'Delhi', 'INOX', '6', '7', '150', 'img2.png'],
#     ['12 Angary Man', 'Delhi', 'PVR', '4', '9', '110', 'img3.png'],
#     ['Titanic', 'Jaipur', 'PVR', '7', '8', '120', 'img4.png']]
#     for i in datas:
#         db = get_db()
#         cursor = db.cursor()
#         statement = "INSERT INTO movie(movie, location, theater_name, row, col, price, image) VALUES (?, ?, ?, ?, ?, ?, ?)"
#         cursor.execute(statement, i)
#         db.commit()
    # db = get_db()
    # cursor = db.cursor()
    # query = "SELECT id, name, price, rate FROM games"
    # cursor.execute(query)
    # return cursor.fetchall()
