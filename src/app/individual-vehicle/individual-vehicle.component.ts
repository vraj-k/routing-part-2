import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-vehicle',
  templateUrl: './individual-vehicle.component.html',
  styleUrls: ['./individual-vehicle.component.scss'],
})
export class IndividualVehicleComponent implements OnInit {
  selectedVehicle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Scroll to top when component initializes
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      this.selectedVehicle = params['vehicleName'] as string;
    });
  }
}
