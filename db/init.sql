CREATE DATABASE dailyreport;
USE dailyreport;
CREATE TABLE IF NOT EXISTS Configuration (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    ReportTime TIME
)