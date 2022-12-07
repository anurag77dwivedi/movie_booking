import sqlite3
DATABASE_NAME = "data.db"


def get_db():
    conn = sqlite3.connect(DATABASE_NAME)
    return conn


def create_tables():
    tables = [
        """CREATE TABLE IF NOT EXISTS movie(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                movie TEXT NOT NULL,
				location TEXT NOT NULL,
				theater_name TEXT NOT NULL,
                row TEXT NOT NULL,
                col TEXT NOT NULL,
                price TEXT NOT NULL,
                image TEXT NOT NULL
            )
            """,
            """CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
				number TEXT NOT NULL
            )
            """,
            """CREATE TABLE IF NOT EXISTS seat(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT NOT NULL,
				movie_id TEXT NOT NULL,
                seat TEXT NOT NULL
            )
            """
    ]
    db = get_db()
    cursor = db.cursor()
    for table in tables:
        cursor.execute(table)
