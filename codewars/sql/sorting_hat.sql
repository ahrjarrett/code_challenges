-- Source : https://www.codewars.com/kata/sql-with-harry-potter-sorting-hat-comparators/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-08-23

SELECT * FROM students 
WHERE (
  (quality1 = 'evil' AND quality2 = 'cunning') OR
  (quality1 = 'brave' AND quality2 <> 'evil') OR
  (quality1 = 'studious' OR quality2 = 'intelligent') OR
  (quality1 = 'hufflepuff' OR quality2 = 'hufflepuff')
) ORDER BY id ASC

