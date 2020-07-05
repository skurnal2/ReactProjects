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
    }