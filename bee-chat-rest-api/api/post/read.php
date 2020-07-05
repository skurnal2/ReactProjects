<?php
    //HEADERS
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Chat.php';

    //Instantiate DB and Connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate chats object
    $chats = new Chat($db);

    //Chat query
    $results = $chats->read();
    //Get row count
    $row_count = $results->rowCount();

    //Check if any chat items exist
    if($row_count > 0) {
        //Chat array
        $chats_arr = array();
        $chats_arr['data'] = array(); 

        while($row = $results->fetch(PDO::FETCH_ASSOC)) {
            extract($row); //Bring in associative array items as their own variables

            $chat_item = array(
                'id' => $id,
                'user_id' => $user_id,
                'chat_text' => $chat_text,
                'username' => $username,
                'time_sent' => $time_sent
            );

            //Push to "data"
            array_push($chats_arr['data'], $chat_item);
        }

        //Convert to JSON and Output
        echo json_encode($chats_arr);

    } else {
        //No Chats
        echo json_encode(
            array('message' => 'No Posts Found')
        );
    }