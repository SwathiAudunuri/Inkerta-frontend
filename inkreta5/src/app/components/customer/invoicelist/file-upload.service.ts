import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  // API url
  baseApiUrl = "https://file.io"
  file:any
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:any) {
  
      // Create form data
     // const formData = new FormData(); 
        
      // Store form name as "file" with file data
      //formData.append("file", file, file.name);
        this.file=file
        //console.log(this.file)
      // Make http post request over api
      // with formData as req
      return file
  }
}