<?php
    class Chat {
        private $conn;
        private $table = 'chats';

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
                    c.time_sent DESC';
                
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
                u.username as username,
                c.id,
                c.user_id,
                c.chat_text,
                c.time_sent           
              FROM
                ' . $this->table . ' c
                LEFT JOIN
                    users u ON u.id = c.user_id
                WHERE
                    c.id = ?
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
            $this->user_id = $row['user_id'];
            $this->chat_text = $row['chat_text'];
            $this->username = $row['username'];
            $this->time_sent = $row['time_sent'];
        }
    }