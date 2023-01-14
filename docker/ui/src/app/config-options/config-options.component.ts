import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-config-options',
  templateUrl: './config-options.component.html',
  styleUrls: ['./config-options.component.css']
})
export class ConfigOptionsComponent {
  reportDeliveryTime = '09:00';
}
