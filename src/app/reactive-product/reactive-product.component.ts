import { TitleCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.scss'],
})
export class ReactiveProductComponent implements OnInit {
  selectedCategory = signal('');
  selectedItem = signal('');
  displayMessage = computed(() => {
    if (this.selectedCategory() && this.selectedItem())
      return `You have selected ${this.selectedItem()} from ${this.selectedCategory()} category`;
    else return 'Please select a product';
  });
  count = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(
      'ReactiveProductComponent constructor',
      new Date().toLocaleString()
    );
  }

  ngOnInit() {
    // Scroll to top when component initializes
    window.scrollTo(0, 0);

    console.log(
      'ReactiveProductComponent ngOnInit',
      new Date().toLocaleString()
    );
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(
        'ReactiveProductComponent params Change Detected',
        new Date().toLocaleString()
      );
      console.log(params);
      this.selectedCategory.set(params['category'] as string);
      this.selectedItem.set(params['productName'] as string);
    });
  }

  changeAddress() {
    this.router.navigate([
      '/reactive',
      this.selectedCategory(),
      this.selectedItem() + this.count++,
    ]);
  }
}
