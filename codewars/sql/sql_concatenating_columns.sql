-- Source : https://www.codewars.com/kata/sql-concatenating-columns/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-10-03

select concat(prefix, ' ', first, ' ', last, ' ', suffix) as title from names

