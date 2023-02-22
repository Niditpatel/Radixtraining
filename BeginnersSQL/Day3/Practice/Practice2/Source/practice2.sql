-- ------------ PRACTICE2 ----------------

--  1. Write a SQL statement to add a foreign key constraint named fk_job_id on job_id column of job_history table referencing to the primary key job_id of jobs table.

ALTER TABLE JOB_HISTORY
ADD constraint fk_job_id FOREIGN KEY (job_id)  REFERENCES jobs(job_id);


-- 2. Write a SQL statement to drop the existing foreign key fk_job_id from job_history table on job_id column which is referencing to the job_id of jobs table. 

ALTER TABLE JOB_HISTORY
DROP FOREIGN KEY fk_job_id;


-- 3. Write a SQL statement to add a new column named location to the job_history table.

ALTER TABLE JOB_HISTORY
ADD location varchar(20);


