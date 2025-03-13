CREATE TABLE Operations (
    Operation_ID SERIAL PRIMARY KEY,
    Operation_Name VARCHAR(100) NOT NULL,
    Commander VARCHAR(100),
    Operation_Start_Date DATE,
    Operation_End_Date DATE
);

CREATE TABLE Operations_Staff (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Role VARCHAR(50),
    Operation_ID INT,
    Date_Assigned DATE,
    FOREIGN KEY (Operation_ID) REFERENCES Operations(Operation_ID)
);