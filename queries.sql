

SELECT t.title, t.summary, t.likes, td.step_number, td.instructions
FROM tutorials as t
JOIN tutorial_directions as td on td.tutorial_id = t.id
WHERE t.id = 2

SELECT Count('*') from likes as l
join tutorials as t on t.id = l.tutorial_id
where l.tutorial_id = 4




SELECT Count('*') from likes as l
join tutorials as t on t.id = l.tutorial_id
where l.tutorial_id = 4

SELECT t.id, t.title, t.summary, t.likes, td.step_number, td.instructions
FROM tutorial_directions as td
JOIN tutorials as t 
on t.id = td.tutorial_id
where t.id = 4



SELECT Count('DISTINCT') from likes as l
join tutorials as t on t.id = l.tutorial_id
Group BY t.id



select count(*) as likes, tutorial_id from likes where 1 or tutorial_id <> 1 group by tutorial_id


SELECT
  t.id,
  t.title,
  t.summary,
  COUNT(l.id) AS Likes
FROM
  tutorials as t
JOIN likes as l ON t.id = l.tutorial_id
Where t.id = 8


SELECT
  t.id,
  t.title,
  t.summary,
  COUNT(l.id) AS Likes
FROM
  tutorials as t
JOIN likes as l ON t.id = l.tutorial_id
where l.tutorial_id = 4
ORder by t.id desc

SELECT t.title, l.tutorial_id, Count(t.id) as likes
from tutorials as t
join likes as l on t.id = l.tutorial_id


SELECT SUM (tutorial_id) from likes 

--gets tutorials with likes ordered by desc likes
select l.tutorial_id, t.title,t.summary, count(*) 
as likes
from likes as l
join tutorials as t 
on l.tutorial_id = t.id

group by tutorial_id
order by likes desc

Select distinct t.id, t.title, t.summary, t.likes, td.step_number, td.instructions from tutorials as t join tutorial_directions as td


select l.tutorial_id, t.title, t.summary, count(*) 
as likes, td.step_number
from likes as l
join tutorials as t 
on l.tutorial_id = t.id
join tutorial_directions as td on td.tutorial_id = t.id


select l.tutorial_id, t.title, t.summary, count(*) 
as likes, td.step_number
from likes as l
join tutorials as t 
on l.tutorial_id = t.id
join tutorial_directions as td on td.tutorial_id = t.id
group by td.id



select l.tutorial_id, t.title, t.summary, count(*) 
as likes, td.step_number, td.instructions
from likes as l
join tutorials as t 
on l.tutorial_id = t.id
join tutorial_directions as td on td.tutorial_id = t.id
group by t.id
order by likes desc



select Distinct l.tutorial_id, t.title, t.summary, count(*) 
as likes, td.step_number, td.instructions
from likes as l
join tutorials as t 
on l.tutorial_id = t.id
join tutorial_directions as td on td.tutorial_id = t.id
group by t.id, td.id
order by likes desc

