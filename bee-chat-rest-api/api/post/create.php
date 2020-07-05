<?php
    //HEADERS
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Chat.php';

    //Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate chats object
    $chat = new Chat($db);

    //Get the Raw Posted Data
    $data = json_decode(file_get_contents("php://input")); //Will get the data from the request (POST request will be in the JSON format)
    $chat->user_id = $data->user_id;
    $chat->chat_text = $data->chat_text;

    //Create Chat item
    if($chat->create()) {
        echo json_encode(
            array('message' => 'Post Created')
        );
    } else {
        echo json_encode(
            array('message' => 'Post Not Created')
        );
    }
