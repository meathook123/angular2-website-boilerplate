import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../_services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marketing-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  private data: Object = {};
  constructor(private http: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.http.get('/assets/mock/blogs/' + id + '.json').subscribe((data: Object) => {
      this.data = data;
    });
  }
}
