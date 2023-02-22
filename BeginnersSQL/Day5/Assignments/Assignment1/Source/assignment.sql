create database module5;

use  module4;

-- 1. Create a Store Procedure Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' from employee table

DELIMITER &&
CREATE PROCEDURE BANK_DEPT()
BEGIN
SELECT E.* FROM Employee E join departments D on E.DEPARTMENT = D.DEPARTMENT_NAME
where D.DEPARTMENT_NAME = "Banking";
END &&
DELIMITER ;


call BANK_DEPT();
drop procedure BANK_DEPT;

DELIMITER &&
CREATE PROCEDURE Insurance_DEPT()
BEGIN
SELECT E.* FROM Employee E join departments D on E.DEPARTMENT = D.DEPARTMENT_NAME
where D.DEPARTMENT_NAME = "Insurance";
END &&
DELIMITER ;


call Insurance_DEPT();
drop procedure Insurance_DEPT;

DELIMITER &&
CREATE PROCEDURE Services_DEPT()
BEGIN
SELECT E.* FROM Employee E join departments D on E.DEPARTMENT = D.DEPARTMENT_NAME
where D.DEPARTMENT_NAME = "Services";
END &&
DELIMITER ;


call Services_DEPT();
drop procedure Services_DEPT;

--  2. Select employee details from employee table if data exists in incentive table ? 
DELIMITER &&
CREATE PROCEDURE Check_Incentive()
BEGIN
SELECT E.* FROM Employee E join incentive I on E.EMPLOYEE_ID = I.EMPLOYEE_REF_ID;
END &&
DELIMITER ;


call  Check_Incentive();
drop procedure Check_Incentive ;

-- 3. Find Salary of the employee whose salary is more than Roy Salary 

DELIMITER &&
CREATE PROCEDURE Ques3()
BEGIN
SELECT * FROM Employee where (select SALARY from Employee where FIRST_NAME ="Roy");
END &&
DELIMITER ;

call Ques3();

--   4. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

DELIMITER &&
CREATE PROCEDURE Ques4()
BEGIN
create view all_details as
SELECT E.FIRST_NAME,E.LAST_NAME,E.SALARY,E.JOINING_DATE,I.INCENTIVE_DATE,I.INCENTIVE_AMOUNT FROM Employee E join incentive I on E.EMPLOYEE_ID = I.EMPLOYEE_REF_ID;
select * from all_details;
END &&
DELIMITER ;

call Ques4();

-- 5. Create a view to select Select first_name, incentive amount from employee and incentives 
-- table for those employees who have incentives and incentive amount greater than 3000

create  view InsentivAmount as select  E.FIRST_NAME,I.INCENTIVE_AMOUNT from Employee E , incentive I where I.INCENTIVE_AMOUNT > 3000;

select * from InsentivAmount


