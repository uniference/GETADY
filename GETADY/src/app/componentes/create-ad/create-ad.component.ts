import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})

export class CreateAdComponent  {
  titulo = "";
  mytime: Date = new Date();
}
