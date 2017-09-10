import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../_services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  private blogList: Array<Object> = [];
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    // use http request to get list

    this.http.get('/assets/mock/blogs/blog-list.json').subscribe((data: Array<Object>) => {
      this.blogList = data;
    });
  }

  goToBlog(id: string) {
    this.router.navigateByUrl('/blog/' + id);
  }
}
