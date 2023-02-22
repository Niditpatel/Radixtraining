-- ASSIGNMENT1 --------------------------------------------------------------------------------------------------------------


CREATE TABLE Employee (
EMPLOYEE_ID INT primary key,
FIRST_NAME varchar(10),
LAST_NAME varchar(15),
SALARY INT,
JOINING_DATE datetime,
DEPARTMENT varchar(18)
);
INSERT INTO Employee VALUES (1,'John','Abraham', 1000000,'2013-01-13 12:00:00' , 'Banking' ),
(2,'Michael',' Clarke', 800000, '2013-01-13 12:00:00',' Insurance'),
(3,'Roy','Thomas',700000,'2013-01-13 12:00:00','Banking'),
(4,'Tom','Jose', 600000,'2013-01-13 12:00:00','Insurance'),
(5,'Jerry',' Pinto ',650000,'2013-01-13 12:00:00','Insurance'),
(6,'Philip','Mathew', 750000, '2013-01-13 12:00:00','Services'),
(7,'TestName1','123', 650000,  '2013-01-13 12:00:00','Services' ),
(8,'TestName2','Lname% ', 600000,'2013-01-13 12:00:00','Insurance');
SELECT * FROM Employee;
select FIRST_NAME,LAST_NAME FROM Employee;
select FIRST_NAME AS 'EMPLOYEE NAME ' FROM Employee;
select * from Employee where FIRST_NAME = 'John';
SELECT * FROM Employee where FIRST_NAME = 'John' OR FIRST_NAME = 'Roy';
SELECT * FROM Employee where FIRST_NAME LIKE 'J%';
SELECT * FROM Employee where FIRST_NAME LIKE '%O%';
SELECT * FROM Employee WHERE SALARY between 500000 AND 800000;
SELECT DISTINCT DEPARTMENT FROM Employee;
select SALARY FROM Employee order by salary desc limit 0,2;
SELECT * FROM Employee WHERE SALARY between 500000 AND 800000;

with avg_salary(SALARY) AS(
SELECT avg(SALARY)
FROM Employee
)
SELECT SALARY AS " AVG SALARY " FROM avg_salary;

SELECT * FROM Employee where LAST_NAME LIKE '%\%%';

SELECT * FROM ( SELECT *,SALARY * 0.1 AS INCENTIVE FROM Employee) temp_table where SALARY > 100000;

drop table Employee;

