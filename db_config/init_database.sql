-- Database: soccer

-- DROP DATABASE IF EXISTS soccer;

CREATE DATABASE soccer
    WITH
    OWNER = soccer_dba
    ENCODING = 'UTF8'
    LC_COLLATE = 'German_Austria.1252'
    LC_CTYPE = 'German_Austria.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;