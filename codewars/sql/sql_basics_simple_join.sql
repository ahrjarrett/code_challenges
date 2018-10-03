-- Source : https://www.codewars.com/kata/sql-basics-simple-join/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-10-03

select p.*, c.name as company_name
from products p
left join companies c on c.id = p.company_id

