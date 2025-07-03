#DevTinder APIs
authRouter
-Post/signup
-Post/login
-Post/logout


ProfileRouter
-get/profile/view
-PATCH/profile/edit
-PATCH/profile/password   ///forgot password API

ConnectRequestRouter
-POST/request/send/interested/:userID  
-POST/request/send/ignored/:userID
-POST /request/review/accepted/:userId
-POST/request/review/rejected/:userId


UserConnectionRequestRouter
-GET /user/requests/received
-GET /user/connections ///this api is basically gives the information about my connection(when A send the request to B and B is received the request then it is s a coonection)
-GET  /user/feed -Gets you the profile of other users on platform


status:ignored,interested,accepted,rejected 
///how we can used the pagination concept//
/feed?page=1&limit=10; the its userfrom 1-10 //like-> .skip(0)&.limit(10)
/feed?page=2&limit=10; the its userfrom 2-20  //like-> .skip(10)&.limit(10)
///for this we used the skip and the list


