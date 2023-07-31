import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IContainer } from './container';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  @Input()
  content!: IContainer;
}
