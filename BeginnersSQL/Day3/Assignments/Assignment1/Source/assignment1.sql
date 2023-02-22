Create database Module3;

use Module3;

create table Employee (
EMPLOYEE_ID decimal(6,0) NOT NULL DEFAULT '0',
 FIRST_NAME varchar(20) DEFAULT NULL,
 LAST_NAME varchar(25) NOT NULL,
 SALARY  decimal(10,2) DEFAULT NULL,
 PHONE_NUMBER varchar(10),
 JOINING_DATE datetime,
 DEPARTMENT varchar(20),
 MANAGER_ID decimal (4,0)
);
drop table Employee;
insert into Employee values 
(1,'John','Abraham',1000000,'1234567891','2013-01-01 12.00.00 ','Banking',NULL),
(2,'Michael','Clarke', 800000,'1234567891', '2013-01-01 12.00.00  ','Insurance', 1),
(3,'Roy','Thomas',700000,'1244567891','2013-02-17 12.00.00 ','Banking',1),
(4,'Tom','Jose',600000,'1234567891', '2013-02-01 12.00.00 ','Insurance',2),
(5,'Jerry','Pintoc',650000,'1234567891','2013-02-01 12.00.00 ','Insurance',3),
(6,'Philip','Mathew',750000,'1244567891','2013-01-01 12.00.00 ','Services',3),
(7,'TestName1','123',650000,'1234567891','2013-07-01 12.00.00 ','Services',2),
(8,'TestName2','Lname%',600000,'1244567891', '2013-02-17 12.00.00 ' ,'Insurance',2);

create table incentive (
EMPLOYEE_REF_ID decimal(6,0) not null default '0',
INCENTIVE_DATE date,
INCENTIVE_AMOUNT decimal(5,0)
);

drop table incentive;
insert into incentive values (1,'2013-02-01', 5000 ),(2,'2013-02-01', 3000),(3,'2013-02-01',4000),(1,'2013-01-01', 4500 ),(2,'2013-01-01',3500);

select * from incentive;



-- 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table 

select datediff(INCENTIVE_DATE,JOINING_DATE) AS DiffreencebtwDates from Employee  join incentive on Employee.EMPLOYEE_ID = incentive.EMPLOYEE_REF_ID;

-- 2 Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 

select FIRST_NAME,INCENTIVE_AMOUNT from Employee right outer join incentive on Employee.EMPLOYEE_ID = incentive.EMPLOYEE_REF_ID where INCENTIVE_AMOUNT > 3000;

-- 3 Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives.

select FIRST_NAME,INCENTIVE_AMOUNT FROM Employee left join incentive on Employee.EMPLOYEE_ID = incentive.EMPLOYEE_REF_ID;

-- 4 Select EmployeeName, ManagerName from the employee table

create table Manager (
Manager_Id decimal(3,0) primary key,
Manager_Name  varchar(10)
);

drop table Manager;
insert into Manager values (1,"jhon"),(2,"Alax"),(3,"Neena"),(4,"Nidit");

select concat(FIRST_NAME,' ',LAST_NAME) AS Employee_Name,Manager_Name from Employee join Manager on  Employee.MANAGER_ID = Manager.Manager_Id; 

-- 5  Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives and set incentive amount as 0 for those employees who didn't get incentives;

Select FIRST_NAME, IFNULL(INCENTIVE_AMOUNT,0) from Employee A left join incentive B on A.EMPLOYEE_ID = B.EMPLOYEE_REF_ID;

--  6.  Get department,total salary with respect to a department from employee table. 

select DEPARTMENT,sum(SALARY) As Total_Salary from Employee group by DEPARTMENT ;

-- 7.  Get department,total salary with respect to a department from employee table order by total salary descending

select DEPARTMENT,sum(SALARY) As Total_Salary from Employee group by DEPARTMENT order by Total_Salary desc;

--  8. Get department wise maximum salary from employee table order by salary ascending

select DEPARTMENT,max(SALARY) as Max_Salary from Employee group by DEPARTMENT order by Max_Salary;

-- 9. Get department wise minimum salary from employee table order by salary ascending

select DEPARTMENT,min(SALARY) as Max_Salary from Employee group by DEPARTMENT order by Max_Salary;

-- 10. Select department,total salary with respect to a department from employee table where total salary greater than 800000 order by Total_Salary descending

select * from (select DEPARTMENT,sum(SALARY) as Total_Salary from Employee group by DEPARTMENT order by Total_Salary)as New_Table where Total_Salary > 800000;

-- 11. Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’.
-- Give each column an appropriate label. Sort the results by the employees’ FirstName

SELECT FIRST_NAME,CHARACTER_LENGTH(FIRST_NAME) AS LENGTH_OF_FNAME FROM Employee where substr(FIRST_NAME,1,1) IN ("M","J","A") ORDER BY FIRST_NAME; 

-- 12. Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.

SELECT FIRST_NAME,lpad(SALARY,10,'$')  FROM Employee;

-- 13. Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.

select FIRST_NAME,LAST_NAME,EMPLOYEE_ID,JOINING_DATE from Employee where month(JOINING_DATE) = "7" or day(JOINING_DATE)= "17"; 

-- 14. Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.

select character_length(FIRST_NAME) as LENGTH_of_FNAME from Employee where instr(LAST_NAME,'c') > 2;

-- 15. Write a query to extract the last 4 character of PhoneNumber.

select right(PHONE_NUMBER,4)as LAST_DIGITS from Employee ;

-- 16. Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.

update Employees set PhoneNumber = replace(phoneNumber,124,999) where phoneNumber like '%124%';

-- 17. Write a query to calculate the age in year.

alter table Employee  add column DOB date after JOINING_DATE;

update Employee set DOB = '2008-01-01' ;

select timestampdiff(year,DOB,curdate()) as AGE from Employee;

-- 18. Write a query to get the distinct Mondays from HireDate in employees tables.

select distinct(str_to_date(concat(yearweek(JOINING_DATE),'1'),'%x%v%w')) as mondays from Employee;

-- 19. Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’

update Employee set JOINING_DATE = '1987-06-01 12.00.00' where FIRST_NAME like 'j%';

select FIRST_NAME,JOINING_DATE from Employee where JOINING_DATE between  '1987-06-01' and '1987-07-30' ;

-- 20. Write a query to display the current date in the following format. Sample output : 12:00 AM Sep 5, 2014

select date_format(curdate(),'%h:%m%p  %b%d,%Y') as 'current date';

-- 21. Write a query to get the FirstName, LastName who joined in the month of June.

select FIRST_NAME, LAST_NAME from Employee where month(JOINING_DATE) = "6";

-- 22. Write a query to get first name, hire date and experience of the employees.

select FIRST_NAME,JOINING_DATE,timestampdiff(year,JOINING_DATE,curdate()) as 'Experience' from Employee;

-- 23.  Write a query to get first name of employees who joined in 1987.

 select FIRST_NAME from Employee where year(JOINING_DATE) = '1987';



