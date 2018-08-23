-- Source : https://www.codewars.com/kata/sql-basics-simple-exists/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-08-23

SELECT id, name FROM departments
WHERE EXISTS (
  SELECT 
  FROM departments
  RIGHT JOIN sales ON sales.department_id = departments.id
  WHERE sales.price >= 98
)
