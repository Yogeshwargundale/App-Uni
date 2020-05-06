//authenticate user loggedin
export function checkLogin():boolean {
    return localStorage.getItem("user")!==null;
}

// get status code response message
export function getStatusCodeResponse(statusCode:number){
        let statusCodeData :any= [
         {code: '200', message: 'success'},
         {code: '500', message: 'server error'},
         {code: '404', message: 'resource not found'},
         {code: '204', message: 'no content'},
         {code: '401', message: 'un-authorised'},
     ];
     const result :any = statusCodeData.filter((data :any) =>{
         return data.code == statusCode;
     });
     return result['0'].message ;
       
}