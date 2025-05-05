import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-fruit',
  templateUrl: './individual-fruit.component.html',
  styleUrls: ['./individual-fruit.component.scss'],
})
export class IndividualFruitComponent {
  selectedFruit: string = '';
  description: string = '';

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Displays the current URL
    console.log(this.router.url);
    // const fruitName = this.router.url.split('/')[2];
    // console.log(fruitName);

    // console.log(this.activeRoute);
    this.selectedFruit = this.activeRoute.snapshot.params[
      'fruitName'
    ] as string;
    if (this.selectedFruit)
      this.description = 'You have clicked on ' + this.selectedFruit;
    else this.description = 'Oops! No fruit selected';
  }
}
