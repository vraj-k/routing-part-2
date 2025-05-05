import { TitleCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.scss'],
  providers: [TitleCasePipe],
})
export class IndividualProductComponent implements OnInit {
  count = 0;
  selectedCategory = signal('');
  selectedItem = signal('');
  displayMessage = computed(() => {
    if (this.selectedCategory() && this.selectedItem())
      return `You have selected ${this.selectedItem()} from ${this.selectedCategory()} category`;
    else return 'Please select a product';
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(
      'IndividualProductComponent constructor',
      new Date().toLocaleString()
    );
  }

  ngOnInit() {
    // Scroll to top when component initializes
    window.scrollTo(0, 0);

    console.log(
      'IndividualProductComponent ngOnInit',
      new Date().toLocaleString()
    );

    this.selectedCategory.set(
      this.activatedRoute.snapshot.params['category'] as string
    );
    this.selectedItem.set(
      this.activatedRoute.snapshot.params['productName'] as string
    );
  }

  changeAddress() {
    this.router.navigateByUrl(
      'product/' +
        this.selectedCategory() +
        '/' +
        this.selectedItem() +
        this.count++
    );
  }
}
