import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-fruit-query-string',
  templateUrl: './individual-fruit-query-string.component.html',
  styleUrls: ['./individual-fruit-query-string.component.scss'],
})
export class IndividualFruitQueryStringComponent implements OnInit {
  selectedFruit: string = '';
  isTasty: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.selectedFruit = this.activatedRoute.snapshot.queryParams['name'];
    this.isTasty = this.activatedRoute.snapshot.queryParams['isTasty'];

    if (this.selectedFruit)
      this.selectedFruit = 'You have clicked on ' + this.selectedFruit;
    else this.selectedFruit = 'Oops! No fruit selected';

    // Reactive way
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      console.log('queryParam', queryParam);
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log('fragment', fragment);
    });
  }
}
