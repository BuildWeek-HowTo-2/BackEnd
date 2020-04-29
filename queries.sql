

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