### This is the REST API backend of the soccer app. Further details can be found in the included Word document.
***

Following steps need to be conducted in order to deploy the webservice on your system.

1) Install postgresql as well as pgAdmin and make sure you have db owner rights.
2) Clone this repository (VS Code, clone or some other GitHub supporting IDEs)
3) Open the project in an editor like VS Code and execute `npm install` to retrieve all needed packages
4) Execute the scripts in the db_config folder in the following order:
   - `init_user.sql`      Right click on the postgres database in pgAdmin and select Query Tool, then copy the script and execute it to creata a user "soccer_dba".
   - `init_database.sql`   In the same dialog, execute the content fo this script to create a database "soccer" with the owner "soccer_dba".
   - `init_schema.sql`   Then change to the newly created soccer database (maybe a refresh is needed) and open the Query Tool with right click on the soccer database.
   - `backup_schema.sql` Open pgAdmin, select a database on the left (soccer) and click "Restore". Select the `backup_database.sql` file.
 
   - Optional: `truncate_tables.sql`    Can be used to remove the test data from all tables.

5) Add the .env file from Moodle to the root of your project (app.js level). In case any ports differ to the standard ports, you can change that here.
6) To run the webservice, execute `npm run dev`
7) You will have a swagger interface in order to get familiar with the implemted routes and also test them.
