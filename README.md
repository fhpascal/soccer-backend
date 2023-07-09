### This is the REST API backend of the soccer app. Further details can be found in the included Word document.
***

Following steps need to be conducted in order to deploy the webservice on your system.

1) Install postgresql as well as pgAdmin and make sure you have db owner rights.
2) Clone this repository (VS Code, clone or some other GitHub supporting IDEs)
3) Open the project in an editor like VS Code and execute `npm install` to retrieve all needed packages
4) Execute the scripts in the db_config folder in the following order
   - `init_user_schema.sql`    This script creates a user called "soccer_dba" and a schema clled "soccer_dba".
   - `init_database.sql`      This script creates the database "soccer" and makes "soccer_dba" the owner.
   - `backup_database.sql`    Open pgAdmin, select a schema on the left (postgre) and click "Restore". Select the `backup_database.sql` file.
5) Add the .env file from Moodle to the root of your project (app.js level). In case any ports differ to the standard ports, you can change that here.
6) To run the webservice, execute `npm run dev`
7) You will have a swagger interface in order to get familiar with the implemted routes and also test them.
