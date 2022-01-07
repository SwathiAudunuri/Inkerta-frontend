import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {




      // Inject service 
      constructor(private fileUploadService: FileUploadService,private http:HttpClient) { }
  
      
      ngOnInit(): void {
      }
    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file:any // Variable to store file
      // On file Select
      onChange(event:any) {
          this.file = event.target.files[0];
      }
    
      // OnClick of button Upload
      onUpload(e:any) {
        e.stopPropagation()
        this.loading = !this.loading;
         // const formData = new FormData(); 
        
          // Store form name as "file" with file data
         // formData.append("file", this.file, this.file.name);
        //  this.file=formData
          this.fileUploadService.upload(this.file)
          ////console.log(formData);
         // const baseApiUrl = "https://file.io"
       //   this.http.post(baseApiUrl, formData)
          //this.loading = false;
          // .subscribe(
          //     (event: any) => {
          //         if (typeof (event) === 'object') {
    
          //             // Short link via api response
          //             this.shortLink = event.link;
    
          //             this.loading = false; // Flag variable 
          //         }
          //     }
          // );
      }
}
