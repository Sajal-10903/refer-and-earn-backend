-- Create database if not exists
CREATE DATABASE IF NOT EXISTS refer_and_earn_db;

-- Use the database
USE refer_and_earn_db;

-- Create table for referral data
CREATE TABLE IF NOT EXISTS referrals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    referred_by VARCHAR(100),
    referral_code VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Initial data insertion example (optional)
-- INSERT INTO referrals (fullname, email, phone, referred_by, referral_code) VALUES
-- ('John Doe', 'john.doe@example.com', '123-456-7890', 'Jane Doe', 'REF123');

-- Example of creating indexes (optional)
-- CREATE INDEX idx_email ON referrals(email);
-- CREATE INDEX idx_referral_code ON referrals(referral_code);

-- Example of foreign key constraint (if applicable)
-- ALTER TABLE referrals
-- ADD CONSTRAINT fk_referral_user_id
-- FOREIGN KEY (user_id) REFERENCES users(id)
-- ON DELETE CASCADE;

-- Example of stored procedure (optional)
-- DELIMITER //
-- CREATE PROCEDURE get_referrals()
-- BEGIN
--     SELECT * FROM referrals;
-- END //
-- DELIMITER ;

-- Example of trigger (optional)
-- DELIMITER //
-- CREATE TRIGGER before_insert_referral
-- BEFORE INSERT ON referrals
-- FOR EACH ROW
-- BEGIN
--     SET NEW.referral_code = CONCAT('REF', LPAD(LAST_INSERT_ID(), 3, '0'));
-- END //
-- DELIMITER ;
