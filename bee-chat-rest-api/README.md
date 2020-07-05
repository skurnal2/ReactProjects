# BEE CHAT REST API

This is a very basic and simple REST Api application build using Object Oriented PHP that returns chat texts and their corresponding user information. Currently hosting the API on [this site](https://sidprojectsapp.000webhostapp.com/bee-chat-rest-api/api/post/). To use, this will need us to go to the file like:<br>

- create.php (requires POST request providing user_id & chat_text)
- read.php (requires GET)
- read_single.php (requires GET request along with query string parameter of id)

## Output

This is how the outputs looks for a sinple read.php GET request:

```JSON
{
    "data": [
        {
            "id": "5",
            "user_id": "2",
            "chat_text": "This request is sent to the online hosted rest api",
            "username": "adam",
            "time_sent": "2020-07-05 06:07:49"
        },
        {
            "id": "4",
            "user_id": "1",
            "chat_text": "A post request sent by Sid through Postman! Isn't it awesome",
            "username": "sid",
            "time_sent": "2020-07-04 23:24:39"
        },
        {
            "id": "3",
            "user_id": "2",
            "chat_text": "Hi everyone!",
            "username": "adam",
            "time_sent": "2020-07-04 21:00:01"
        },
        {
            "id": "2",
            "user_id": "1",
            "chat_text": "Yo!",
            "username": "sid",
            "time_sent": "2020-07-04 20:59:48"
        },
        {
            "id": "1",
            "user_id": "1",
            "chat_text": "Hello there! This is the first entry!",
            "username": "sid",
            "time_sent": "2020-07-04 20:59:29"
        }
    ]
}
```
