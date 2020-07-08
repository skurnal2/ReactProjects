<?php
    //HEADERS
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Chat.php';

    //Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate chat object
    $chat = new Chat($db);

    //Get the ID
    $chat->id = isset($_GET['id']) ? $_GET['id'] : die();

    //Calling the method
    $chat->read_single();

    //Create array
    $chat_arr = array(        
        'user_id' => $chat->user_id,        
        'username' => $chat->username        
    );

    //Convert to JSON
    print_r(json_encode($chat_arr));