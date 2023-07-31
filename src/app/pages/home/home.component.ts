import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchDigestSectionComponent } from '../../components/arch-digest-section/arch-digest-section.component';
import { ContainerComponent } from '../../components/container/container.component';
import { IContainer } from 'app/components/container/container';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, ArchDigestSectionComponent, ContainerComponent],
})
export class HomeComponent {
  item1: IContainer = {
    type: 'si',
    items: ['3'],
  };

  item2: IContainer = {
    type: 'di',
    items: ['2', '1'],
  };

  item3: IContainer = {
    type: 'di',
    items: ['4', '5'],
  };

  item4: IContainer = {
    type: 'di',
    items: ['2', '1'],
  };

  s: Array<IContainer> = [this.item2, this.item1, this.item3, this.item4];
}
