class ResponseMessage {
    expiredTokenMsg: string = "Authorization token expired";
    unauthorizedMsg: string = "Unauthorized";
    wrongSubjectTokenMsg: string = "Wrong token";
    failedRequestMsg: string = "Request failed";
    invalidDataMsg: string = "Malformed request body";
    notFoundMsg: string = "Not found";
  }
  
  export default ResponseMessage;
  