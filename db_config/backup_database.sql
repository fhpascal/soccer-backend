PGDMP     #    #        	        {           soccer    15.3    15.3     1           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            2           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            3           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            4           1262    16480    soccer    DATABASE     z   CREATE DATABASE soccer WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'German_Austria.1252';
    DROP DATABASE soccer;
             
   soccer_dba    false            $          0    16482    coaches 
   TABLE DATA           4   COPY soccer.coaches (coach_id, user_id) FROM stdin;
    soccer       
   soccer_dba    false    215   �       .          0    16551    codes 
   TABLE DATA           4   COPY soccer.codes (code_id, code_value) FROM stdin;
    soccer       
   soccer_dba    false    225          %          0    16485    games 
   TABLE DATA           t   COPY soccer.games (game_id, game_name, game_date, game_start, game_end, coach_id_view, coach_id_create) FROM stdin;
    soccer       
   soccer_dba    false    216   5       '          0    16489    participates_in 
   TABLE DATA           v   COPY soccer.participates_in (participation_id, player_id, game_id, location_time, location_x, location_y) FROM stdin;
    soccer       
   soccer_dba    false    218   R       )          0    16493    players 
   TABLE DATA           s   COPY soccer.players (player_id, user_id, date_of_birth, player_number, player_position, coach_id_view) FROM stdin;
    soccer       
   soccer_dba    false    220   o       +          0    16497    users 
   TABLE DATA           S   COPY soccer.users (user_id, email, password_hash, firstname, lastname) FROM stdin;
    soccer       
   soccer_dba    false    222   �       ;           0    0    codes_code_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('soccer.codes_code_id_seq', 1, true);
          soccer       
   soccer_dba    false    224            <           0    0    games_game_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('soccer.games_game_id_seq', 1, false);
          soccer       
   soccer_dba    false    217            =           0    0 $   participates_in_participation_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('soccer.participates_in_participation_id_seq', 1, false);
          soccer       
   soccer_dba    false    219            >           0    0    players_player_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('soccer.players_player_id_seq', 2, true);
          soccer       
   soccer_dba    false    221            ?           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('soccer.users_user_id_seq', 2, true);
          soccer       
   soccer_dba    false    223            $      x������ � �      .      x�3�4�=... �      %      x������ � �      '      x������ � �      )   $   x�3�4�4����54�56�4�������� F�      +   "   x�3�L,N�,NA&�9�K�2�ұR\1z\\\ G     