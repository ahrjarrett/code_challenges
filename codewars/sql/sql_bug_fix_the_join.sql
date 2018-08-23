-- Source : http://www.codewars.com/kata/sql-bug-fixing-fix-the-join/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-08-23

SELECT 
  DISTINCT j.job_title,
  ROUND(AVG(j.salary), 2)::FLOAT as average_salary,
  COUNT(p.id) as total_people,
  ROUND(SUM(j.salary), 2)::FLOAT as total_salary
  
  FROM people p
    INNER JOIN job j ON j.people_id = p.id
    GROUP BY j.job_title
    ORDER BY total_salary

