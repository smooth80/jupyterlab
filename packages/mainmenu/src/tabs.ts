// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { IJupyterLabMenu, JupyterLabMenu } from './labmenu';

/**
 * An interface for a Tabs menu.
 */
export interface ITabsMenu extends IJupyterLabMenu {}

/**
 * An extensible Tabs menu for the application.
 */
export class TabsMenu extends JupyterLabMenu implements ITabsMenu {
  /**
   * Construct the tabs menu.
   */
  constructor(options: IJupyterLabMenu.IOptions) {
    super(options);
  }
}
