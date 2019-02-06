**Getting started**

 In ```src``` folder you have 2 files

1. Based on ```XMLHttpRequest``` create own implementation of ```fetch```

2. after go to second part of this task, see description below

 **to start server**

  - ```npm i```

  - ```npm start``` and open browser on localhost:8000

Using your own implementation follow next steps

1. Add progress bar to upload file to server with graphic indication and percent(10% ... 21% ... 50 ... 100%)

2. Add progress bar to download file from server with only graphic indication(on top of page with width 100% and height 2-3px)

3. if file was downloaded - if it is an image - show it on center of page, else download file to your local machine

PS: remember about SOLID and other principes - KISS, DRY(google it if you don't know)

*Extra task

 1. In file ```server.js``` create edpoint ```/list```, read list of files in dir(see - [fs.readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback) )
 and send to webApp like endpoint ```ping``` but use method ```GET```.
 After, add logic to your app for loading list of exist file on server

```
 const reuest = new HttpRequest({
   baseUrl: 'http://localhost:8000',
 });

 reuest.get('/user/12345', { onDownloadProgress, headers: {contentType: undefined} })
   .then(response => {
     console.log(response);
   })
   .catch(e => {
     console.log(e)
   });

 reuest.post('/save', { data: formdata, header, onUploadProgress })
   .then(response => {
     console.log(response);
   })
   .catch(e => {
     console.log(e)
   });

 config = {
```
   ``` transformResponse ``` allows changes to the response data to be made before
   it is passed to ``` then/catch ```
   ``` transformResponse: [function (data) { ```
   Do whatever you want to transform the data
```
     return data;
   }],
```
   ``` headers ``` are custom headers to be sent
   ``` headers: {'X-Requested-With': 'XMLHttpRequest'} ```,

   ```params``` are the URL parameters to be sent with the request
   Must be a plain object or a URLSearchParams object
   ```
   params: {
     ID: 12345
   },
   ```

   ```data``` is the data to be sent as the request body
   Only applicable for request methods 'PUT', 'POST', and 'PATCH'
   When no ```transformRequest``` is set, must be of one of the following types:
   - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
   - Browser only: FormData, File, Blob
   - Node only: Stream, Buffer
```
   data: {
     firstName: 'Fred'
   },
```
   ```responseType``` indicates the type of data that the server will respond with
   options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
   ```responseType: 'json'```, default

   ```onUploadProgress``` allows handling of progress events for uploads
   ```
   onUploadProgress: function (progressEvent) {
   ```
     Do whatever you want with the native progress event
     ```
   },
    ```
   ```onDownloadProgress``` allows handling of progress events for downloads
   ```
   onDownloadProgress: function (progressEvent) {
   ```
     Do whatever you want with the native progress event
     ```
   },
 }
 ```
