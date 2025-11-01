
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from "@angular/core";
import { NodeService } from '../../services';
import { NodeComponent } from '../node/node';


@Component({
  selector: 'app-tree',
  imports: [CommonModule, NodeComponent],
  templateUrl: './tree.html',
  styleUrl: './tree.css'
})
export class TreeComponent {
  private nodeService = inject(NodeService);

  readonly nodes$ = this.nodeService.getNodes();

}
