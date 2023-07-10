CREATE SCHEMA IF NOT EXISTS soccer
    AUTHORIZATION soccer_dba;

GRANT ALL ON SCHEMA soccer TO postgres;

GRANT ALL ON SCHEMA soccer TO soccer_dba;