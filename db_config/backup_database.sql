PGDMP                 	        {           soccer    15.3    15.3 :    :           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ;           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            <           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            =           1262    24577    soccer    DATABASE     z   CREATE DATABASE soccer WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'German_Austria.1252';
    DROP DATABASE soccer;
             
   soccer_dba    false                        2615    24753    soccer    SCHEMA        CREATE SCHEMA soccer;
    DROP SCHEMA soccer;
             
   soccer_dba    false            >           0    0    SCHEMA soccer    ACL     (   GRANT ALL ON SCHEMA soccer TO postgres;
                
   soccer_dba    false    5            �            1259    24761    coaches    TABLE     T   CREATE TABLE soccer.coaches (
    coach_id integer NOT NULL,
    user_id integer
);
    DROP TABLE soccer.coaches;
       soccer         heap 
   soccer_dba    false    5            �            1259    33015    codes    TABLE     T   CREATE TABLE soccer.codes (
    code_id integer NOT NULL,
    code_value integer
);
    DROP TABLE soccer.codes;
       soccer         heap 
   soccer_dba    false    5            �            1259    33014    codes_code_id_seq    SEQUENCE     �   CREATE SEQUENCE soccer.codes_code_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE soccer.codes_code_id_seq;
       soccer       
   soccer_dba    false    5    224            ?           0    0    codes_code_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE soccer.codes_code_id_seq OWNED BY soccer.codes.code_id;
          soccer       
   soccer_dba    false    223            �            1259    24789    games    TABLE     �   CREATE TABLE soccer.games (
    game_id integer NOT NULL,
    game_name character varying,
    game_date date,
    game_start time without time zone,
    game_end time without time zone,
    coach_id_view integer,
    coach_id_create integer
);
    DROP TABLE soccer.games;
       soccer         heap 
   soccer_dba    false    5            �            1259    24788    games_game_id_seq    SEQUENCE     �   CREATE SEQUENCE soccer.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE soccer.games_game_id_seq;
       soccer       
   soccer_dba    false    5    220            @           0    0    games_game_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE soccer.games_game_id_seq OWNED BY soccer.games.game_id;
          soccer       
   soccer_dba    false    219            �            1259    33164    participates_in    TABLE     �   CREATE TABLE soccer.participates_in (
    participation_id integer NOT NULL,
    location_time time without time zone,
    location_x numeric(10,7),
    location_y numeric(10,7),
    game_id integer,
    player_id integer
);
 #   DROP TABLE soccer.participates_in;
       soccer         heap 
   soccer_dba    false    5            �            1259    33163 $   participates_in_participation_id_seq    SEQUENCE     �   CREATE SEQUENCE soccer.participates_in_participation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE soccer.participates_in_participation_id_seq;
       soccer       
   soccer_dba    false    226    5            A           0    0 $   participates_in_participation_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE soccer.participates_in_participation_id_seq OWNED BY soccer.participates_in.participation_id;
          soccer       
   soccer_dba    false    225            �            1259    24772    players    TABLE     �   CREATE TABLE soccer.players (
    player_id integer NOT NULL,
    user_id integer,
    date_of_birth date,
    player_number smallint,
    player_position character varying(50),
    coach_id_view integer
);
    DROP TABLE soccer.players;
       soccer         heap 
   soccer_dba    false    5            �            1259    24771    players_player_id_seq    SEQUENCE     �   CREATE SEQUENCE soccer.players_player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE soccer.players_player_id_seq;
       soccer       
   soccer_dba    false    5    218            B           0    0    players_player_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE soccer.players_player_id_seq OWNED BY soccer.players.player_id;
          soccer       
   soccer_dba    false    217            �            1259    24848 	   tutorials    TABLE     �   CREATE TABLE soccer.tutorials (
    tutorial_id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    published boolean
);
    DROP TABLE soccer.tutorials;
       soccer         heap 
   soccer_dba    false    5            �            1259    24847    tutorials_tutorial_id_seq    SEQUENCE     �   CREATE SEQUENCE soccer.tutorials_tutorial_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE soccer.tutorials_tutorial_id_seq;
       soccer       
   soccer_dba    false    5    222            C           0    0    tutorials_tutorial_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE soccer.tutorials_tutorial_id_seq OWNED BY soccer.tutorials.tutorial_id;
          soccer       
   soccer_dba    false    221            �            1259    24755    users    TABLE     �   CREATE TABLE soccer.users (
    user_id integer NOT NULL,
    email character varying(320),
    password_hash character varying(100),
    firstname character varying(20),
    lastname character varying(40)
);
    DROP TABLE soccer.users;
       soccer         heap 
   soccer_dba    false    5            �            1259    24754    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE soccer.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE soccer.users_user_id_seq;
       soccer       
   soccer_dba    false    5    215            D           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE soccer.users_user_id_seq OWNED BY soccer.users.user_id;
          soccer       
   soccer_dba    false    214            �           2604    33018    codes code_id    DEFAULT     n   ALTER TABLE ONLY soccer.codes ALTER COLUMN code_id SET DEFAULT nextval('soccer.codes_code_id_seq'::regclass);
 <   ALTER TABLE soccer.codes ALTER COLUMN code_id DROP DEFAULT;
       soccer       
   soccer_dba    false    224    223    224            �           2604    24792    games game_id    DEFAULT     n   ALTER TABLE ONLY soccer.games ALTER COLUMN game_id SET DEFAULT nextval('soccer.games_game_id_seq'::regclass);
 <   ALTER TABLE soccer.games ALTER COLUMN game_id DROP DEFAULT;
       soccer       
   soccer_dba    false    219    220    220            �           2604    33167     participates_in participation_id    DEFAULT     �   ALTER TABLE ONLY soccer.participates_in ALTER COLUMN participation_id SET DEFAULT nextval('soccer.participates_in_participation_id_seq'::regclass);
 O   ALTER TABLE soccer.participates_in ALTER COLUMN participation_id DROP DEFAULT;
       soccer       
   soccer_dba    false    226    225    226            �           2604    24775    players player_id    DEFAULT     v   ALTER TABLE ONLY soccer.players ALTER COLUMN player_id SET DEFAULT nextval('soccer.players_player_id_seq'::regclass);
 @   ALTER TABLE soccer.players ALTER COLUMN player_id DROP DEFAULT;
       soccer       
   soccer_dba    false    218    217    218            �           2604    24851    tutorials tutorial_id    DEFAULT     ~   ALTER TABLE ONLY soccer.tutorials ALTER COLUMN tutorial_id SET DEFAULT nextval('soccer.tutorials_tutorial_id_seq'::regclass);
 D   ALTER TABLE soccer.tutorials ALTER COLUMN tutorial_id DROP DEFAULT;
       soccer       
   soccer_dba    false    222    221    222            �           2604    24758    users user_id    DEFAULT     n   ALTER TABLE ONLY soccer.users ALTER COLUMN user_id SET DEFAULT nextval('soccer.users_user_id_seq'::regclass);
 <   ALTER TABLE soccer.users ALTER COLUMN user_id DROP DEFAULT;
       soccer       
   soccer_dba    false    214    215    215            -          0    24761    coaches 
   TABLE DATA           4   COPY soccer.coaches (coach_id, user_id) FROM stdin;
    soccer       
   soccer_dba    false    216   EC       5          0    33015    codes 
   TABLE DATA           4   COPY soccer.codes (code_id, code_value) FROM stdin;
    soccer       
   soccer_dba    false    224   bC       1          0    24789    games 
   TABLE DATA           t   COPY soccer.games (game_id, game_name, game_date, game_start, game_end, coach_id_view, coach_id_create) FROM stdin;
    soccer       
   soccer_dba    false    220   C       7          0    33164    participates_in 
   TABLE DATA           v   COPY soccer.participates_in (participation_id, location_time, location_x, location_y, game_id, player_id) FROM stdin;
    soccer       
   soccer_dba    false    226   �C       /          0    24772    players 
   TABLE DATA           s   COPY soccer.players (player_id, user_id, date_of_birth, player_number, player_position, coach_id_view) FROM stdin;
    soccer       
   soccer_dba    false    218   D       3          0    24848 	   tutorials 
   TABLE DATA           O   COPY soccer.tutorials (tutorial_id, title, description, published) FROM stdin;
    soccer       
   soccer_dba    false    222   AD       ,          0    24755    users 
   TABLE DATA           S   COPY soccer.users (user_id, email, password_hash, firstname, lastname) FROM stdin;
    soccer       
   soccer_dba    false    215   �D       E           0    0    codes_code_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('soccer.codes_code_id_seq', 1, false);
          soccer       
   soccer_dba    false    223            F           0    0    games_game_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('soccer.games_game_id_seq', 1, true);
          soccer       
   soccer_dba    false    219            G           0    0 $   participates_in_participation_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('soccer.participates_in_participation_id_seq', 5, true);
          soccer       
   soccer_dba    false    225            H           0    0    players_player_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('soccer.players_player_id_seq', 1, true);
          soccer       
   soccer_dba    false    217            I           0    0    tutorials_tutorial_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('soccer.tutorials_tutorial_id_seq', 1, true);
          soccer       
   soccer_dba    false    221            J           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('soccer.users_user_id_seq', 9, true);
          soccer       
   soccer_dba    false    214            �           2606    24765    coaches coaches_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY soccer.coaches
    ADD CONSTRAINT coaches_pkey PRIMARY KEY (coach_id);
 >   ALTER TABLE ONLY soccer.coaches DROP CONSTRAINT coaches_pkey;
       soccer         
   soccer_dba    false    216            �           2606    33020    codes codes_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY soccer.codes
    ADD CONSTRAINT codes_pkey PRIMARY KEY (code_id);
 :   ALTER TABLE ONLY soccer.codes DROP CONSTRAINT codes_pkey;
       soccer         
   soccer_dba    false    224            �           2606    24794    games games_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY soccer.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);
 :   ALTER TABLE ONLY soccer.games DROP CONSTRAINT games_pkey;
       soccer         
   soccer_dba    false    220            �           2606    33169 $   participates_in participates_in_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY soccer.participates_in
    ADD CONSTRAINT participates_in_pkey PRIMARY KEY (participation_id);
 N   ALTER TABLE ONLY soccer.participates_in DROP CONSTRAINT participates_in_pkey;
       soccer         
   soccer_dba    false    226            �           2606    24777    players players_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY soccer.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (player_id);
 >   ALTER TABLE ONLY soccer.players DROP CONSTRAINT players_pkey;
       soccer         
   soccer_dba    false    218            �           2606    24855    tutorials tutorials_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY soccer.tutorials
    ADD CONSTRAINT tutorials_pkey PRIMARY KEY (tutorial_id);
 B   ALTER TABLE ONLY soccer.tutorials DROP CONSTRAINT tutorials_pkey;
       soccer         
   soccer_dba    false    222            �           2606    24760    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY soccer.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY soccer.users DROP CONSTRAINT users_pkey;
       soccer         
   soccer_dba    false    215            �           2606    24766    coaches fk_coaches_users    FK CONSTRAINT     |   ALTER TABLE ONLY soccer.coaches
    ADD CONSTRAINT fk_coaches_users FOREIGN KEY (user_id) REFERENCES soccer.users(user_id);
 B   ALTER TABLE ONLY soccer.coaches DROP CONSTRAINT fk_coaches_users;
       soccer       
   soccer_dba    false    215    216    3209            �           2606    24795    games fk_games_coaches_view    FK CONSTRAINT     �   ALTER TABLE ONLY soccer.games
    ADD CONSTRAINT fk_games_coaches_view FOREIGN KEY (coach_id_view) REFERENCES soccer.coaches(coach_id);
 E   ALTER TABLE ONLY soccer.games DROP CONSTRAINT fk_games_coaches_view;
       soccer       
   soccer_dba    false    216    3211    220            �           2606    24783    players fk_players_coaches    FK CONSTRAINT     �   ALTER TABLE ONLY soccer.players
    ADD CONSTRAINT fk_players_coaches FOREIGN KEY (coach_id_view) REFERENCES soccer.coaches(coach_id);
 D   ALTER TABLE ONLY soccer.players DROP CONSTRAINT fk_players_coaches;
       soccer       
   soccer_dba    false    216    218    3211            �           2606    24800    games fk_players_coaches_create    FK CONSTRAINT     �   ALTER TABLE ONLY soccer.games
    ADD CONSTRAINT fk_players_coaches_create FOREIGN KEY (coach_id_create) REFERENCES soccer.coaches(coach_id);
 I   ALTER TABLE ONLY soccer.games DROP CONSTRAINT fk_players_coaches_create;
       soccer       
   soccer_dba    false    220    216    3211            �           2606    24778    players fk_players_users    FK CONSTRAINT     |   ALTER TABLE ONLY soccer.players
    ADD CONSTRAINT fk_players_users FOREIGN KEY (user_id) REFERENCES soccer.users(user_id);
 B   ALTER TABLE ONLY soccer.players DROP CONSTRAINT fk_players_users;
       soccer       
   soccer_dba    false    218    215    3209            �           2606    33172 ,   participates_in participates_in_game_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY soccer.participates_in
    ADD CONSTRAINT participates_in_game_id_fkey FOREIGN KEY (game_id) REFERENCES soccer.players(player_id) ON UPDATE CASCADE ON DELETE CASCADE;
 V   ALTER TABLE ONLY soccer.participates_in DROP CONSTRAINT participates_in_game_id_fkey;
       soccer       
   soccer_dba    false    218    226    3213            �           2606    33177 .   participates_in participates_in_player_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY soccer.participates_in
    ADD CONSTRAINT participates_in_player_id_fkey FOREIGN KEY (player_id) REFERENCES soccer.games(game_id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY soccer.participates_in DROP CONSTRAINT participates_in_player_id_fkey;
       soccer       
   soccer_dba    false    3215    226    220            -      x������ � �      5      x������ � �      1   9   x�3�tO�MU6,-HI,IM�4202�50�5��44�20 "NCK+c0#���b���� ��O      7   5   x�3�44�20�20�4�3� Nc8ːӐ���U�	B�	�Cc,Jb����        /   $   x�3�4�4202�50�50�4�t�������� Cw�      3   6   x�3�t�,*.Q)-�/�L����,V ���T�����̂���<�4�=... ���      ,   �   x���;
�0��Y>L��G�-C�Bz�,j$S
�!q��o�@JGZ��[d`��A����>0nk�E���*U�:l�,����U����H7�hÙ$�g�Is�	�E�|�|��5\�(�
C+�[a<����3���jk4�d��5�Y��t��M�R�vzd     