-- Source : https://www.codewars.com/kata/sql-basics-top-10-customers-by-total-payments-amount/train/sql
-- Author : Andrew Jarrett
-- Date   : 2018-10-03

select
  c.customer_id,
  c.email,
  count(p.*) as payments_count,
  sum(p.amount)::float as total_amount

from customer c
inner join payment p on p.customer_id = c.customer_id

group by c.customer_id
order by total_amount desc
limit 10

