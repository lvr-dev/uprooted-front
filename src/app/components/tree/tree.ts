
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from "@angular/core";
import { NodeService } from '../../services';


@Component({
  selector: 'app-tree',
  imports: [CommonModule],
  templateUrl: './tree.html',
  styleUrl: './tree.css'
})
export class TreeComponent {
  private nodeService = inject(NodeService);

  readonly nodes$ = this.nodeService.getNodes();

}
