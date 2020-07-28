import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-karyawan',
  templateUrl: './detail-karyawan.component.html',
  styleUrls: ['./detail-karyawan.component.css']
})
export class DetailKaryawanComponent implements OnInit {

  constructor(
    public route: ActivatedRoute
  ) { }

  parameter:any;
  ngOnInit() {
    this.parameter=this.route.snapshot.paramMap.get('ID');
  }

}
