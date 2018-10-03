-- Source : https://www.codewars.com/kata/sql-basics-simple-having/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-10-03

select age, count(*) as total_people from people
group by age
having count(age) >= 10

