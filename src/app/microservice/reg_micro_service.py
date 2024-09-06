"""
Create Account Micro Service
"""

# -------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/registerstatus
# -------------------------
import flask
import requests
from flask_cors import CORS

my_sqldb_api_app = flask.Flask(__name__)
CORS(my_sqldb_api_app)
@my_sqldb_api_app.route("/registerstatus", methods=['POST']) # default methods=["GET"]
def my_createaccount_micro():
        import sqlite3
        my_register_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_register_db_cursor = my_register_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS register(
        username VARCHAR(100),
        password VARCHAR(100)

        )
        '''
        my_register_db_cursor.execute(my_query)
        print("done")

        data = flask.request.get_data() # Receive data sent from website
        data = data.decode()
        data = eval(data) # conver to dict


        print('data : ', data)
        # data={'name':entered_uname, 'password':entered_pass1, 'email':entered_email}

        # Check whether user already exists
        n=data['username']
        my_query = f"SELECT username FROM register WHERE username='{n}'"
        print("Executing Query : ", my_query)
        my_register_db_cursor.execute(my_query)
        print("Done")
        
        my_query_result = my_register_db_cursor.fetchall()
        print(len(my_query_result))

        if len(my_query_result) == 0:
            print("Creating new user..")
            my_query = f"INSERT INTO register VALUES('{data['username']}', '{data['password']}')"
            my_register_db_cursor.execute(my_query)
            my_register_db_connection.commit()
            print("done")
            return flask.jsonify({"message":"Account Created"}), 201

        else:
            return flask.jsonify({"message":"Account Already exists"})


# -------------------------

# -------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/registerdata
# -------------------------


        # my_query_result = my_register_db_cursor.fetchall()
        # print(len(my_query_result))

        # if len(my_query_result) == 0:
        #     print("Creating new user..")
        #     my_query = f"INSERT INTO register VALUES('{data['username']}', '{data['password']}')"
        #     my_register_db_cursor.execute(my_query)
        #
@my_sqldb_api_app.route("/registerstatus", methods=['GET']) # default methods=["GET"]
def my_createaccount_micro_get():
        import sqlite3
        my_register_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_register_db_cursor = my_register_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS register(
        username VARCHAR(100),
        password VARCHAR(100)
        )
        '''
        my_register_db_cursor.execute(my_query)
        print("done")
        my_query = '''
        SELECT * from register
        '''
        my_register_db_cursor.execute(my_query)
        print("Retrieve all data from cursor object")
        my_db_result = my_register_db_cursor.fetchall()
        print("Done")
        # dict={}
        # for l2 in my_db_result:
        #     dict[l2[0]] = l2[1:]


        return flask.jsonify({"data": my_db_result})
# --------------------------------------------------------------------

# --------------------------------------------------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/mybenef
# --------------------------------------------------------------------
CORS(my_sqldb_api_app)
@my_sqldb_api_app.route("/mybenef", methods=['POST']) # default methods=["GET"]
def my_addnewbenef_micro():
        import sqlite3
        my_newbenef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_newbenef_db_cursor = my_newbenef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS beneficiary(
        Name VARCHAR(100),
        Bank VARCHAR(100),
        Accno INTEGER,
        IFSC VARCHAR(100),
        Mob INTEGER,
        User VARCHAR(100)
        )
        '''
        my_newbenef_db_cursor.execute(my_query)
        print("done")

        data = flask.request.get_data() # Receive data sent from website
        data = data.decode()
        data = eval(data) # conver to dict

       # print(type(data))
        print('data : ', data)
        # data={'name':entered_uname, 'password':entered_pass1, 'email':entered_email}

        # Check whether user already exists
        n=data['Accno']
        my_query = f"SELECT Accno FROM beneficiary WHERE Accno='{n}'"
        print("Executing Query : ", my_query)
        my_newbenef_db_cursor.execute(my_query)
        print("Done")

        my_query_result = my_newbenef_db_cursor.fetchall()
        print(len(my_query_result))

        if len(my_query_result) == 0:
            print("Creating new user..")
            my_query = f"INSERT INTO beneficiary VALUES('{data['Name']}', '{data['Bank']}', '{data['Accno']}','{data['IFSC']}','{data['Mob']}','{data['User']}')"
            my_newbenef_db_cursor.execute(my_query)
            my_newbenef_db_connection.commit()
            print("done")
            return flask.jsonify({"message":"Account Created"}), 201

        else:
            return flask.jsonify({"message":"Account Already exists"})

#-----------------------------------------------------------

# --------------------------------------------------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/mybenef
# --------------------------------------------------------------------

@my_sqldb_api_app.route("/mybenef", methods=['GET']) # default methods=["GET"]
def my_viewbenef():
        import sqlite3
        my_benef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_benef_db_cursor = my_benef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS beneficiary(
        Name VARCHAR(100),
        Bank VARCHAR(100),
        Accno INTEGER,
        IFSC VARCHAR(100),
        Mob INTEGER,
        User VARCHAR(100)
        )
        '''

        my_benef_db_cursor.execute(my_query)
        print("done")
        my_query = '''
        SELECT * from beneficiary
        '''
        my_benef_db_cursor.execute(my_query)
        print("Retrieve all data from cursor object")
        my_db_result = my_benef_db_cursor.fetchall()
        #print("my_db_result", my_db_result)
        print("Done")
        #print("Done")
        # dict={}
        # for l2 in my_db_result:
        #     dict[l2[0]] = l2[1:]
        newarray=[]
        for i in my_db_result:

                print(i)
                arr = {"Name":i[0],"Bank":i[1],"Accno":i[2],"IFSC":i[3],"Mob":i[4],"User":i[5]}
                print(arr)
                newarray.append(arr)


        print(newarray)
    # return flask.jsonify(my_db_result)
        return flask.jsonify(newarray)
        # dict={}
        # for l2 in my_db_result:
        #     dict[l2[0]] = l2[1:]


       #return flask.jsonify({"data": my_db_result})

#-----------------------------------------------------------
CORS(my_sqldb_api_app)
@my_sqldb_api_app.route("/mybenef", methods=['DELETE']) # default methods=["GET"]
def my_deletebenef_micro():
        import sqlite3
        my_delbenef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_delbenef_db_cursor = my_delbenef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS beneficiary(
        Name VARCHAR(100),
        Bank VARCHAR(100),
        Accno INTEGER,
        IFSC VARCHAR(100),
        Mob INTEGER,
        User VARCHAR(100)
        )
        '''
        my_delbenef_db_cursor.execute(my_query)
        print("done")

        data = flask.request.get_data() # Receive data sent from website
        data = data.decode()
        data = eval(data) # conver to dict

       # print(type(data))
        print('data : ', data)
        # data={'name':entered_uname, 'password':entered_pass1, 'email':entered_email}

        # Check whether user already exists
        n=data['accno']
        my_query = f"SELECT Accno FROM beneficiary WHERE Accno='{n}'"
        print("Executing Query : ", my_query)
        my_delbenef_db_cursor.execute(my_query)
        print("Done")

        my_query_result = my_delbenef_db_cursor.fetchall()
        print(len(my_query_result))

        if len(my_query_result) == 1:
            print("Deleting user..")
            my_query = f"DELETE FROM beneficiary WHERE Accno='{n}'"
            my_delbenef_db_cursor.execute(my_query)
            my_delbenef_db_connection.commit()
            print("done")
            return flask.jsonify({"message":"Beneficiary Deleted"}), 201


#-----------------------------------------------------------

# --------------------------------------------------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/mybankacc
# --------------------------------------------------------------------

@my_sqldb_api_app.route("/mybankacc", methods=['POST']) # default methods=["GET"]
def my_addnewbank_micro():
        import sqlite3
        my_newbenef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_newbenef_db_cursor = my_newbenef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS customer(
        Name VARCHAR(100),
        Bank VARCHAR(100),
        Accno INTEGER,
        IFSC VARCHAR(100),
        Branch VARCHAR(100),
        Acctype VARCHAR(100),
        Balance INTEGER,
        UIC VARCHAR(100)
        )
        '''
        my_newbenef_db_cursor.execute(my_query)
        print("done")

        data = flask.request.get_data() # Receive data sent from website
        data = data.decode()
        data = eval(data) # conver to dict

       # print(type(data))
        print('data : ', data)
        # data={'name':entered_uname, 'password':entered_pass1, 'email':entered_email}

        # Check whether user already exists
        n=data['Accno']
        my_query = f"SELECT Accno FROM customer WHERE Accno='{n}'"
        print("Executing Query : ", my_query)
        my_newbenef_db_cursor.execute(my_query)
        print("Done")

        my_query_result = my_newbenef_db_cursor.fetchall()
        print(len(my_query_result))

        if len(my_query_result) == 0:
            print("Creating new user..")
            my_query = f"INSERT INTO customer VALUES('{data['Name']}', '{data['Bank']}', '{data['Accno']}','{data['IFSC']}','{data['Branch']}','{data['Acctype']}','{data['Balance']}','{data['UIC']}')"
            my_newbenef_db_cursor.execute(my_query)
            my_newbenef_db_connection.commit()
            print("done")
            return flask.jsonify({"message":"Account Created"}), 201

        else:
            return flask.jsonify({"message":"Account Already exists"})

#-----------------------------------------------------------
# --------------------------------------------------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/mybenef
# --------------------------------------------------------------------

@my_sqldb_api_app.route("/mybankacc", methods=['GET']) # default methods=["GET"]
def my_viewacc():
        import sqlite3
        my_benef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_benef_db_cursor = my_benef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS customer(
        Name VARCHAR(100),
        Bank VARCHAR(100),
        Accno INTEGER,
        IFSC VARCHAR(100),
        Branch VARCHAR(100),
        Acctype VARCHAR(100),
        Balance INTEGER,
        UIC VARCHAR(100)
        )
        '''

        my_benef_db_cursor.execute(my_query)
        print("done")
        #v=session.get('uname', 'not set')
        my_query = '''
        SELECT * from customer
        '''
        my_benef_db_cursor.execute(my_query)
        print("Retrieve all data from cursor object")
        my_db_result = my_benef_db_cursor.fetchall()
        #print("my_db_result", my_db_result)
        print("Done")
        # dict={}
        # for l2 in my_db_result:
        #     dict[l2[0]] = l2[1:]
        newarray=[]
        for i in my_db_result:

                print(i)
                arr = {"Name":i[0],"Bank":i[1],"Accno":i[2],"IFSC":i[3],"Branch":i[4],"Acctype":i[5],"Balance":i[6],"UIC":i[7]}
                print(arr)
                newarray.append(arr)


        print(newarray)
    # return flask.jsonify(my_db_result)
        return flask.jsonify(newarray)


        #return flask.jsonify({"data": my_db_result})

#-----------------------------------------------------------



# --------------------------------------------------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/myacctrans
# --------------------------------------------------------------------

@my_sqldb_api_app.route("/myacctrans", methods=['POST']) # default methods=["GET"]
def my_acctrans_micro():
        import sqlite3
        my_newbenef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_newbenef_db_cursor = my_newbenef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS transactions(
        Accno INTEGER,
        tobank VARCHAR(100),
        toIFSC VARCHAR(100),
        amount INTEGER,
        Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (Accno) REFERENCES customer(Accno)
        )
        '''
        my_newbenef_db_cursor.execute(my_query)
        print("done")

        data = flask.request.get_data() # Receive data sent from website
        data = data.decode()
        data = eval(data) # conver to dict

       # print(type(data))
        print('data : ', data)
        # data={'name':entered_uname, 'password':entered_pass1, 'email':entered_email}

        # Check whether user already exists
        n=data['Accno']
        my_query = f"SELECT Accno FROM customer WHERE Accno='{n}'"
        print("Executing Query : ", my_query)
        my_newbenef_db_cursor.execute(my_query)
        print("Done")

        my_query_result = my_newbenef_db_cursor.fetchall()
        print(len(my_query_result))

        if len(my_query_result) == 1:
            print("Transaction in process...")
            my_query = f"INSERT INTO transactions VALUES('{data['Accno']}','{data['tobank']}','{data['toIFSC']}','{data['amount']}', DATE('now'))"
            my_newbenef_db_cursor.execute(my_query)
            my_newbenef_db_connection.commit()
            print("done")
            
            myres = f"UPDATE customer SET Balance = Balance + '{data['amount']}' WHERE Accno='{n}'"
            my_newbenef_db_cursor.execute(myres)
            my_newbenef_db_connection.commit()
            print("done")

            return flask.jsonify({"message":"Transaction Successful"}), 201

        else:
            return flask.jsonify({"message":"Transaction Failed"})

#-----------------------------------------------------------

# --------------------------------------------------------------------
# REST API ENDPOINT : http://127.0.0.1:7070/mybeneftrans
# --------------------------------------------------------------------

@my_sqldb_api_app.route("/mybeneftrans", methods=['POST']) # default methods=["GET"]
def my_beneftrans_micro():
        import sqlite3
        my_newbenef_db_connection = sqlite3.connect("register_db.sqlite3")
        print("Connected db successfully")
        print("Obtaining cursor object")
        # Through cursor object we can execute query & retrieve the result
        my_newbenef_db_cursor = my_newbenef_db_connection.cursor()
        print("done")
        print("Creating the table if not exists")
        my_query = '''
        CREATE TABLE IF NOT EXISTS benefitransaction(
        Accno INTEGER,
        frombank VARCHAR(100),
        fromIFSC VARCHAR(100),
        amount INTEGER,
        Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (Accno) REFERENCES customer(Accno)
        )
        '''
        my_newbenef_db_cursor.execute(my_query)
        print("done")

        data = flask.request.get_data() # Receive data sent from website
        data = data.decode()
        data = eval(data) # conver to dict

       # print(type(data))
        print('data : ', data)
        # data={'name':entered_uname, 'password':entered_pass1, 'email':entered_email}

        # Check whether user already exists
        n=data['Accno']
        my_query = f"SELECT Accno FROM customer WHERE Accno='{n}'"
        print("Executing Query : ", my_query)
        my_newbenef_db_cursor.execute(my_query)
        print("Done")

        my_query_result = my_newbenef_db_cursor.fetchall()
        print(len(my_query_result))

        if len(my_query_result) == 1:
            print("Transaction in process...")
            my_query = f"INSERT INTO benefitransaction VALUES('{data['Accno']}','{data['frombank']}','{data['fromIFSC']}','{data['amount']}', DATE('now'))"
            my_newbenef_db_cursor.execute(my_query)
            my_newbenef_db_connection.commit()
            print("done")

            myres = f"UPDATE customer SET Balance = Balance - '{data['amount']}' WHERE Accno='{n}'"
            my_newbenef_db_cursor.execute(myres)
            my_newbenef_db_connection.commit()    

            return flask.jsonify({"message":"Transaction Successful"}), 201

        else:
            return flask.jsonify({"message":"Transaction Failed"})

#-----------------------------------------------------------













# -------------------------
# Run the server
# -------------------------

my_sqldb_api_app.run(host='127.0.0.1', port=7070)
# -------------------------
