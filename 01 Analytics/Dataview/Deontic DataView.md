```dataview
Table 
length(rows.file.name) as numfiles, 
join(rows.file.link, ", ") as files
From "Chennai Disaster Management Plan 2021 Statements"
Group BY Deontic
```
