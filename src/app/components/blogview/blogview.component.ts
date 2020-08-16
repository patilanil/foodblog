import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/servoces/blog.service';
import { CommonService } from 'src/app/servoces/common.service';
import { Blog } from 'src/app/models/blog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit {

  public blogdetail: Blog;
  public updated_blog: Blog;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('blogForm') blogForm: NgForm;
  constructor(private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private blogServise: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(response => {
      this.blogServise.getBlogDetails(response.id).subscribe(result => {
        if (result && result.length) {
          this.blogdetail = result[0];
        } else {
          alert("Details not available");
        }
      })
    })
  }

  public onModelShow() {
    this.blogForm.form.setValue({
      title: this.blogdetail.title,
      description: this.blogdetail.description
    });
  }

  public updateBlog(): void {
    if (this.blogForm.form.touched) {
      if (this.blogForm.form.valid) {
        this.blogServise.updateBlog(this.blogForm.form.value, this.blogdetail.id).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.blogdetail.title = this.blogForm.form.value.title;
          this.blogdetail.description = this.blogForm.form.value.description;
        });
      } else {
        alert('Title and Description required');
      }
    } else {
      alert('Please update data');
    }
  }


}
