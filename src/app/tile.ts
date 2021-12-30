import { Component, Input } from '@angular/core';
import { Content } from './content';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tile',
  template: `
<div class="thumbnail-container">
  <div>
    <img src="https://ecatalog.vecv.net/ecatalogueVECV/sol_dealer/dealer/svgs/4020-21-010-0004.svg" class="thumbnail" [attr.tileId]="content.id">
  </div>
</div>
  `,
  styles: [
    `
    .thumbnail-container {
      position:relative;
      margin: 2px 10px 0 0;
      width: 100%;
      height: 770px;
      cursor: pointer;
      overflow:auto;
      text-align:center;
      line-height:700px;
    }
    .thumbnail {
      max-width: 100%;
      height: 660px;
      max-height: 660px;
      vertical-align: middle;
    }
  `,
  ],
})
export class TileComponent {
  @Input() content: Content;
  public showHighRes = false;
}
