-- Source : http://www.codewars.com/kata/5ab7a736edbcfc8e62000007/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-08-23

select
  ss.senshi_name as sailor_senshi,
  real_name_jpn as real_name,
  cats.name as cat,
  school
  
from
  sailorsenshi as ss
  left join schools on schools.id = ss.school_id
  left join cats on cats.id = ss.cat_id


/* 
Need to make a Brad Neely App.

CREATE TABLE brad_neely_sketches (
  id int,
  title varchar,
  main_character_id int,
  created_at date,
  air_date date
)

CREATE TABLE main_characters (
  id int,
  firstname varchar,
  lastname varchar,
  episode_id int,
  powers varchar
)

CREATE TABLE china_il (
  id int,
  latitude varchar,
  longitude varchar,
  is_safe varchar,
  mayor_id int
)
*/

