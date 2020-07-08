<?php
    class Chat {
        private $conn;
        private $table = 'chats';
        private $table2 = 'users';

        //Chat Properties
        public $id;
        public $user_id;
        public $username; //This is coming from the users table
        public $chat_text;
        public $time_sent;

        //Constructor
        public function __construct($db) {
            $this->conn = $db;
        }

        //Get Chats
        public function read() {
            //Create query
            $query = 'SELECT  
                u.username as username,
                c.id,
                c.user_id,
                c.chat_text,
                c.time_sent           
              FROM
                ' . $this->table . ' c
                LEFT JOIN
                    users u ON u.id = c.user_id
                ORDER BY 
                    c.time_sent ASC';
                
            //Preparing statement
            $stmt = $this->conn->prepare($query);

            //Execute query
            $stmt->execute();

            return $stmt;
        }

        //Get Single Chat
        public function read_single() {
            //Create query
            $query = 'SELECT  
                username,
                id 
              FROM
                ' . $this->table2 . ' 
                WHERE
                    id = ?
                LIMIT 0, 1';
            
            //Preparing statement
            $stmt = $this->conn->prepare($query);

            //Binding parameters            
             $stmt->bindParam(1, $this->id);

            //Execute query
            $stmt->execute();

            //Fetching the single associate array now instead of doing this later
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            //Set Properties
            $this->user_id = $row['id'];
            $this->username = $row['username'];
        }

        //Create CHAT item
        public function create() {
            //Create Query
            $query = 'INSERT INTO ' . $this->table . '
             SET
                user_id = :user_id,
                chat_text = :chat_text';

            //Prepare statement
            $stmt = $this->conn->prepare($query);

            //Clean Data
            $this->user_id = htmlspecialchars(strip_tags($this->user_id)); //Just a way to sanitize the data
            $this->chat_text = htmlspecialchars(strip_tags($this->chat_text)); 
            

            //Bind the data
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->bindParam(':chat_text', $this->chat_text);

            //Execute the query
            if($stmt->execute()) {
                return true;
            }

            //Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);
            
            return false;
            
        }
    }