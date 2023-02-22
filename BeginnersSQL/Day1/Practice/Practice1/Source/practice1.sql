CREATE DATABASE MODULE1;
DROP DATABASE MODULE1;
USE MODULE1;
-- ------------------- PRACTICE1 -------------------

--  1. Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that no countries except Italy, India and China will be entered in the table. and combination of columns country_id and region_id will be unique. 

CREATE TABLE COUNTRIES (
COUNTRY_ID INT,
COUNTRY_NAME VARCHAR(50), CONSTRAINT CKCOUNTRY CHECK (COUNTRY_NAME IN ("ITALY","INDIA","CHAINA")),
REGION_ID INT,
CONSTRAINT PKCOUNTRIES PRIMARY KEY (COUNTRY_ID,REGION_ID)
);

-- Write a SQL statement to create a table named job_history including columns employee_id, start_date, end_date, job_id and department_id and make sure that the value against column end_date will be entered at the time of insertion to the format like '--/--/----'

CREATE TABLE JOB_HISTORY (
EMPLOYEE_ID INT,
START_DATE date,
END_DATE date ,
JOB_ID INT,
DEPARTMENT_ID int
);
DROP TABLE JOB_HISTORY;
INSERT INTO JOB_HISTORY VALUES (1,'2020-1-2',str_to_date('01/02/2022','%d/%m/%Y'),1,2);
select * from JOB_HISTORY;

--  3. Write a SQL statement to create a table named jobs including columns job_id, job_title, min_salary and max_salary, and make sure that, the default value for job_title is blank and min_salary is 8000 and max_salary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns. 


create table jobs(
job_id int primary key,
job_title varchar(35) default '',
min_salary int NOT NULL default 8000,constraint CHECK (min_salary = 8000),
max_salary int
);
drop table jobs;
INSERT INTO jobs (job_id) values (1);
select * from jobs;

create table depatrment(
department_id int,
department_name varchar(15),
constraint primary key (department_id)
);

-- 4. Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary, commission, manager_id and department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column department_id, reference by the column department_id of departments table, can contain only those values which are exists in the departments table and another foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which are exists in the jobs table.

create table employees(
employee_id int ,
first_name varchar(15),
last_name varchar(15),
email varchar(30),
phone_number varchar(10),
hire_date date,
job_id int ,
salary int,
commission int,
manager_id int,
department_id int ,
 primary key (employee_id),
 foreign key (department_id) references depatrment(department_id),
 foreign key (job_id) references jobs(job_id)
);
select * from employees;

