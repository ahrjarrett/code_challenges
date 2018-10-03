-- Source : https://www.codewars.com/kata/sql-bug-fixing-fix-the-query-totaling/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-10-03

SELECT 
  (s.transaction_date)::date AS day,
  d.name AS department,
  COUNT(s.id) AS sale_count
  FROM department d
    JOIN sale s ON d.id = s.department_id
  GROUP BY day, department
  ORDER BY day
  
