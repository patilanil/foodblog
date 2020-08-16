import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/servoces/blog.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/servoces/common.service';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent  {

  @ViewChild('template') template: TemplateRef<any>;

  private modalRef: BsModalRef;
  public blog: Blog;
  public selectedFile: File
 
  public openModal(): void {
    this.modalRef = this.modalService.show(this.template);
  }

  public onHide(): void {
    this.modalRef.hide();
  }

  constructor(private blogService: BlogService, 
    private modalService: BsModalService,
    private commonService: CommonService,
    private router: Router) {
  	this.blog = new Blog();
  }
  
  ngOnInit(): void {
  }


  addBlog(blogForm: NgForm) {
  	if(blogForm.valid){
      this.blogService.addBlog(blogForm.form.value).subscribe(res =>{
        this.commonService.notifyBlogAddition();
        this.modalRef.hide();
  	    this.blog = new Blog();
  		});
  	} else {
  		alert('Title and Description required');
  	}
  }

}
