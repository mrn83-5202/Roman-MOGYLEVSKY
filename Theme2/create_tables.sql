CREATE TABLE Operations (
    Operation_ID SERIAL PRIMARY KEY,                -- Унікальний ідентифікатор операції
    Operation_Name VARCHAR(100) NOT NULL,           -- Назва операції
    Commander VARCHAR(100),                         -- Командир операції
    Operation_Start_Date DATE,                      -- Дата початку операції
    Operation_End_Date DATE                         -- Дата завершення операції
);

-- Створення таблиці для персоналу, що бере участь в операціях
CREATE TABLE Operations_Staff (
    ID SERIAL PRIMARY KEY,                          -- Унікальний ідентифікатор запису співробітника
    Name VARCHAR(100) NOT NULL,                     -- Ім'я співробітника
    Role VARCHAR(50) NOT NULL,                      -- Посада або роль співробітника
    Operation_ID INT,                               -- Ідентифікатор операції (зовнішній ключ)
    Date_Assigned DATE,                             -- Дата призначення співробітника на операцію
    FOREIGN KEY (Operation_ID) REFERENCES Operations(Operation_ID)  -- Зв'язок із таблицею Operations
);
