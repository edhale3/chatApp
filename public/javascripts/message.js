// import { DataTypes } from "sequelize/types";

function deleteMessage(messageId){
    $.ajax({
        url: '/message/' + messageId + '/delete-json',
        contentType:'application/json; charset=utf-8',
        DataType: 'json',
        data: JSON.stringify({messageId}),
        type: 'POST',
        success: ((result) => {
            //replace follow button with unfollow
            console.log("Result: ", result)
            $("#"+ messageId).remove();
        }),
        error: ((error) => {
            console.log( "Error: ", error)
        })
    });
}

// function newMessage (message){
//     $.ajax({
//         url: '/',
//         contentType:'application/json; charset=utf-8',
//         DataType: 'json',
//         data: JSON.stringify({message}),
//         type: 'POST',
//         success: ((result) => {
//             //replace follow button with unfollow
//             console.log("Result: ", result)
//             $("#"+ message).create();
//         }),
//         error: ((error) => {
//             console.log( "Error: ", error)
//         })
//     });
// }
