-- Source : https://www.codewars.com/kata/sql-basics-position/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-10-03

select
  id,
  name,
  position(',' in characteristics) as comma
from monsters
order by comma

