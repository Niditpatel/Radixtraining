create database module4;

use module4;


CREATE TABLE  jobs (
  JOB_ID varchar(10) NOT NULL DEFAULT '' primary key,
  JOB_TITLE varchar(35) NOT NULL,
  MIN_SALARY decimal(6,0) DEFAULT NULL,
  MAX_SALARY decimal(6,0) DEFAULT NULL
);

drop table jobs;

INSERT INTO jobs VALUES
('AD_PRES', 'President', '20000', '40000'),
('AD_VP', 'Administration Vice President', '15000', '30000'),
('AD_ASST', 'Administration Assistant', '3000', '6000'),
('FI_MGR', 'Finance Manager', '8200', '16000'),
('FI_ACCOUNT', 'Accountant', '4200', '9000'),
('AC_MGR', 'Accounting Manager', '8200', '16000'),
('AC_ACCOUNT', 'Public Accountant', '4200', '9000'),
('SA_MAN', 'Sales Manager', '10000', '20000'),
('SA_REP', 'Sales Representative', '6000', '12000'),
('PU_MAN', 'Purchasing Manager', '8000', '15000'),
('PU_CLERK', 'Purchasing Clerk', '2500', '5500'),
('ST_MAN', 'Stock Manager', '5500', '8500'),
('ST_CLERK', 'Stock Clerk', '2000', '5000'),
('SH_CLERK', 'Shipping Clerk', '2500', '5500'),
('IT_PROG', 'Programmer', '4000', '10000'),
('MK_MAN', 'Marketing Manager', '9000', '15000'),
('MK_REP', 'Marketing Representative', '4000', '9000'),
('HR_REP', 'Human Resources Representative', '4000', '9000'),
('PR_REP', 'Public Relations Representative', '4500', '10500');


CREATE TABLE IF NOT EXISTS job_history (
  EMPLOYEE_ID decimal(6,0) NOT NULL ,
  START_DATE date NOT NULL ,
  END_DATE date NOT NULL,
  JOB_ID varchar(10) NOT NULL,
  DEPARTMENT_ID decimal(4,0) DEFAULT NULL,
  PRIMARY KEY (EMPLOYEE_ID,START_DATE)
);


INSERT INTO job_history VALUES
('102', '1993-01-13', '1998-07-24', 'IT_PROG', '60'),
('101', '1989-09-21', '1993-10-27', 'AC_ACCOUNT', '110'),
('101', '1993-10-28', '1997-03-15', 'AC_MGR', '110'),
('201', '1996-02-17', '1999-12-19', 'MK_REP', '20'),
('114', '1998-03-24', '1999-12-31', 'ST_CLERK', '50'),
('122', '1999-01-01', '1999-12-31', 'ST_CLERK', '50'),
('200', '1987-09-17', '1993-06-17', 'AD_ASST', '90'),
('176', '1998-03-24', '1998-12-31', 'SA_REP', '80'),
('176', '1999-01-01', '1999-12-31', 'SA_MAN', '80'),
('200', '1994-07-01', '1998-12-31', 'AC_ACCOUNT', '90');

create table Manager 
(
Manager_ID int primary key ,
Manager_Name varchar(15),
Salary int,
expericence int 
);

drop table Manager;
insert into Manager values 
(1,"nidit",20000,10),
(2,"jhon",15000,16),
(3,"Ram",10000,17),
(4,"Raju",30000,13);

CREATE TABLE departments (
  DEPARTMENT_ID decimal(4,0) NOT NULL ,
  DEPARTMENT_NAME varchar(30) NOT NULL,
  MANAGER_ID decimal(6,0) DEFAULT NULL,
  LOCATION_ID decimal(4,0) DEFAULT NULL,
  PRIMARY KEY (DEPARTMENT_ID)
);

drop table departments; 

INSERT INTO departments (DEPARTMENT_ID, DEPARTMENT_NAME, MANAGER_ID, LOCATION_ID) VALUES
('10', 'Administration', '1', '1700'),
('20', 'Insurance', '2', '1800'),
('30', 'Purchasing', '3', '1700'),
('40', 'Human Resources', '3', '2400'),
('50', 'Services', '4', '1500'),
('60', 'IT', '1', '1400'),
('70', 'Public Relations', '3', '2700'),
('80', 'Sales', '2', '2500'),
('90', 'Executive', '3', '1700'),
('100', 'Finance', '2', '1700'),
('102', 'Accounting', '1', '1700'),
('120', 'Banking', '1', '1700'),
('130', 'Corporate Tax', '1', '1700'),
('140', 'Control And Credit', '1', '1700'),
('150', 'Shareholder Services', '1', '1700'),
('160', 'Benefits', '2', '1700'),
('170', 'Manufacturing', '3', '1700'),
('180', 'Construction', '4', '1700'),
('190', 'Contracting', '4', '1700'),
('200', 'Operations', '2', '1700'),
('210', 'IT Support', '4', '1700'),
('220', 'NOC', '3', '1700'),
('230', 'IT Helpdesk', '1', '1700'),
('240', 'Government Sales', '1', '1700'),
('250', 'Retail Sales', '2', '1700'),
('260', 'Recruiting', '3', '1700'),
('270', 'Payroll', '1', '1700');

create table Employee(
EMPLOYEE_ID int,
FIRST_NAME varchar(15),
LAST_NAME varchar(15),
SALARY decimal(10,0),
JOINING_DATE datetime,
DEPARTMENT varchar(15),
MANAGER_ID int,
JOB_ID varchar(10),
CONSTRAINT FKJOB_ID foreign key (JOB_ID) REFERENCES jobs(JOB_ID)
);
drop table Employee;
insert into Employee values (1,'John','Abraham', 1000000, '2013-01-01 12:00:00', 'Banking', NULL,'AD_PRES'),
(2, 'Michael', 'Clarke', 800000, '2013-01-01 12:00:00','Insurance' ,1,'AD_VP'),
(3, 'Roy', 'Thomas', 700000 ,'2013-02-01 12:00:00' ,'Banking' ,1 ,'AD_ASST'),
(4, 'Tom' ,'ose', 600000 ,'2013-02-01 12:00:00','Insurance' ,2,'FI_ACCOUNT'),
(5, 'Jerry', 'Pinto', 650000, '2013-02-01 12:00:00' ,'Insurance' ,3,'SA_MAN'),
(6, 'Philip' ,'Mathew' ,750000 ,'2013-01-01 12:00:00','Services' ,3,'PU_CLERK'),
(7, 'TestName1', '123' ,650000, '2013-01-01 12:00:00' ,'Services' ,2,'IT_PROG'),
(8, 'TestName2', 'Lname%',600000, '2013-02-01 12:00:00','Insurance',2,'PR_REP');

CREATE TABLE locations (
  LOCATION_ID decimal(4,0) NOT NULL DEFAULT '0' primary key,
  STREET_ADDRESS varchar(40) DEFAULT NULL,
  POSTAL_CODE varchar(12) DEFAULT NULL,
  CITY varchar(30) NOT NULL,
  STATE_PROVINCE varchar(25) DEFAULT NULL,
  COUNTRY_ID varchar(2) DEFAULT NULL
);


INSERT INTO locations  VALUES
('1000', '1297 Via Cola di Rie', '989', 'Roma', '', 'IT'),
('1100', '93091 Calle della Testa', '10934', 'Venice', '', 'IT'),
('1200', '2017 Shinjuku-ku', '1689', 'Tokyo', 'Tokyo Prefecture', 'JP'),
('1300', '9450 Kamiya-cho', '6823', 'Hiroshima', '', 'JP'),
('1400', '2014 Jabberwocky Rd', '26192', 'Southlake', 'Texas', 'US'),
('1500', '2011 Interiors Blvd', '99236', 'South San Francisco', 'California', 'US'),
('1600', '2007 Zagora St', '50090', 'South Brunswick', 'New Jersey', 'US'),
('1700', '2004 Charade Rd', '98199', 'Seattle', 'Washington', 'US'),
('1800', '147 Spadina Ave', 'M5V 2L7', 'Toronto', 'Ontario', 'CA'),
('1900', '6092 Boxwood St', 'YSW 9T2', 'Whitehorse', 'Yukon', 'CA'),
('2000', '40-5-12 Laogianggen', '190518', 'Beijing', '', 'CN'),
('2100', '1298 Vileparle (E)', '490231', 'Bombay', 'Maharashtra', 'IN'),
('2200', '12-98 Victoria Street', '2901', 'Sydney', 'New South Wales', 'AU'),
('2300', '198 Clementi North', '540198', 'Singapore', '', 'SG'),
('2400', '8204 Arthur St', '', 'London', '', 'UK'),
('2500', '"Magdalen Centre', ' The Oxford ', 'OX9 9ZB', 'Oxford', 'Ox'),
('2600', '9702 Chester Road', '9629850293', 'Stretford', 'Manchester', 'UK'),
('2700', 'Schwanthalerstr. 7031', '80925', 'Munich', 'Bavaria', 'DE'),
('2800', 'Rua Frei Caneca 1360', '01307-002', 'Sao Paulo', 'Sao Paulo', 'BR'),
('2900', '20 Rue des Corps-Saints', '1730', 'Geneva', 'Geneve', 'CH'),
('3000', 'Murtenstrasse 921', '3095', 'Bern', 'BE', 'CH'),
('3100', 'Pieter Breughelstraat 837', '3029SK', 'Utrecht', 'Utrecht', 'NL'),
('3200', 'Mariano Escobedo 9991', '11932', 'Mexico City', '"Distrito Federal', '"');


create table incentive (
EMPLOYEE_REF_ID decimal(6,0) not null default '0',
INCENTIVE_DATE date,
INCENTIVE_AMOUNT decimal(5,0)
);

drop table incentive;
insert into incentive values (1,'2013-02-01', 5000 ),(2,'2013-02-01', 3000),(3,'2013-02-01',4000),(1,'2013-01-01', 4500 ),(2,'2013-01-01',3500);

-- 1. Create a view Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' from employee table 

create view Bank_Dept as select * from Employee where DEPARTMENT="Banking";

select * from Bank_Dept;

create view Insurance_Dept as select * from Employee where DEPARTMENT="Insurance";

select * from Insurance_Dept;

create view Services_Dept as select * from Employee where DEPARTMENT="Services";

select * from Services_Dept;

-- 2. Select employee details from employee table if data exists in incentive table ?

create view Display_Details as select * from Employee where EMPLOYEE_ID in (select distinct EMPLOYEE_REF_ID from incentive);

select * from Display_Details;


-- 3. Find Salary of the employee whose salary is more than Roy Salary

create view Greater_then_Roy as select SALARY from Employee where SALARY > (select SALARY from Employee where FIRST_NAME = "Roy");

select * from Greater_then_Roy;

-- 4.  Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

CREATE VIEW Details
AS SELECT E.FIRST_NAME, E.LAST_NAME,E.SALARY, I.INCENTIVE_DATE,I.INCENTIVE_AMOUNT
FROM Employee E left join incentive I on E.EMPLOYEE_ID = I.EMPLOYEE_REF_ID;

select * from Details;

-- drop view Details;

-- 5. Create a view to select Select first_name, incentive amount from employee and incentives table for
-- those employees who have incentives and incentive amount greater than 3000 

CREATE VIEW Details1
AS SELECT E.FIRST_NAME, E.LAST_NAME,E.SALARY, I.INCENTIVE_DATE,I.INCENTIVE_AMOUNT,I.EMPLOYEE_REF_ID
FROM Employee E right join incentive I on E.EMPLOYEE_ID = I.EMPLOYEE_REF_ID where I.INCENTIVE_AMOUNT >3000;


-- drop view Details1;
select * from Details1;

-- 6. Create a View to Find the names (first_name, last_name), job, department number, and department name
-- of the employees who work in London.

create view Get_Details as select  concat(E.FIRST_NAME,'  ',E.LAST_NAME ) as Employee_Name,D.DEPARTMENT_ID,D.DEPARTMENT_NAME,L.STREET_ADDRESS,J.JOB_TITLE from 
Employee  E join departments D on E.DEPARTMENT = D.DEPARTMENT_NAME inner join  locations L on D.LOCATION_ID = L.LOCATION_ID inner join jobs J on J.JOB_ID = E.JOB_ID;

  DROP VIEW Get_Details;
	select * from Get_Details;

-- 7.  Create a view to get the department name and number of employees in the department.

CREATE VIEW DEPARTMENT_NAME_ALL AS SELECT D.DEPARTMENT_ID,D.DEPARTMENT_NAME,E.FIRST_NAME from departments D join Employee E on E.DEPARTMENT = D.DEPARTMENT_NAME;
    
   --  drop view DEPARTMENT_NAME_ALL;
    select * from DEPARTMENT_NAME_ALL;
    
-- 8. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 

create view Exprience as  SELECT EMPLOYEE_ID, JOB_TITLE,timestampdiff(day,START_DATE,END_DATE) as Days FROM job_history 
NATURAL JOIN jobs 
WHERE DEPARTMENT_ID=90; 
 
 drop view Exprience;
 select * from Exprience;
 
 --  9. Write a query to display the department name, manager name, and city. 
 
 create view Question9 as select D.DEPARTMENT_NAME,M.Manager_Name,L.CITY  from departments D
 join Manager M on D.MANAGER_ID = M.Manager_ID join locations L on L.LOCATION_ID = D.LOCATION_ID ;
 
 drop view Question9;
 select * from Question9;
 
 -- 10. Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
 
 select * from Employee;
 create view Question10 as select D.DEPARTMENT_NAME,concat(E.FIRST_NAME,'  ',E.LAST_NAME ) as Employee_Name,E.JOINING_DATE,M.Salary
 from  Employee E left join  departments D on E.MANAGER_ID = D.MANAGER_ID  inner join Manager M on D.MANAGER_ID = M.Manager_ID where M.expericence > 15  ;
 
 drop view Question10;
 select * from Question10;
 

 -- assignement 2
 
 -- 1. Write a query to rank employees based on their salary for a month Select 4th Highest salary 
 -- from employee table using ranking function 
 
 select 
 DEPARTMENT,
 FIRST_NAME,
  SALARY,
   rank() over(order by SALARY DESC) RANKING FROM Employee limit 4,1;
   
   -- 2.Get department, total salary with respect to a department from employee table.
   
   SELECT DEPARTMENT, SUM(SALARY)
FROM Employee
GROUP BY DEPARTMENT;

-- 3. Get department, total salary with respect to a department from employee table order by total salary descending

   SELECT DEPARTMENT, SUM(SALARY) as Total_Salary
FROM Employee
GROUP BY DEPARTMENT order by Total_Salary desc;

-- 4. Get department wise maximum salary from employee table order by salary ascending

select max(salary) as Max_Salary , DEPARTMENT from Employee GROUP BY DEPARTMENT order by Max_Salary;

-- 5.  Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending

   SELECT DEPARTMENT, SUM(SALARY) as Total_Salary
FROM Employee 
GROUP BY DEPARTMENT having Total_Salary > 50000  order by Total_Salary desc ; 



 


