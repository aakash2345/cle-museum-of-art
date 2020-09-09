import sqlite3
import json
from sqlite3 import Error
import os.path

db_path = os.path.abspath('python-scripts\cma-artworks.db')
con = sqlite3.connect(db_path)

cursorObj = con.cursor()
path = '\\cle-museum-of-art\\cle-museum-artwork-app\\src\\assets\\artwork-json-data\\'
json_begin = '{"artworks":['
json_end = ']}'


def sql_fetch(con, output_path):

    folder = output_path
    cursorObj.execute('DROP TABLE if exists output')
    cursorObj.execute('CREATE TABLE if not exists output as SELECT  distinct  a.id as artworkid,accession_number,title,tombstone,department_id as departmentid,name,c.id as creatorid, c.role,c.description FROM artwork a,artwork__department ad,artwork__creator ac, creator c,department d WHERE a.id = ad.artwork_id and a.id = ac.artwork_id and ad.department_id = d.id and ac.creator_id = c.id')
    cursorObj.execute('DELETE FROM output where Role = "NULL" ')
    cma_artworks_data = (cursorObj.execute('SELECT * FROM output')).fetchall()
    column_names = [desc[0] for desc in cursorObj.description]
    result = []
    for row in cma_artworks_data:
        row = dict(zip(column_names, row))
        result.append(row)

    out_file = output_path+'\cma_artworks.json'
    if os.path.isfile(out_file) and os.access(out_file, os.R_OK):

        os.unlink(out_file)
        create_output(out_file, result)
    else:
        create_output(out_file, result)


def create_output(output_path, result):
    with open(output_path, 'w') as ad:
        ad.write(json_begin)
        for item in result:
            json.dump(item, ad)
            if item != result[-1]:
                ad.write(',')

        ad.write(json_end)

        ad.close()


def main():
    print("Please give path as cle-museum-artwork-app/src/assets/artwork-json-data to store the output JSON file:\n")
    output_path = input(
        "Please enter the path in which the output file is to be stored :\n")
    if output_path.find(path) == -1:
        print("Entered path for output is wrong please re enter the path as mentioned:\n")
        main()
    else:
        sql_fetch(con, output_path)


if __name__ == "__main__":
    main()
