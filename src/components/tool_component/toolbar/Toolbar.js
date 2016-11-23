import React, { PropTypes } from 'react';
import { formTreeData } from '../../../lib/helpers';
import ToolbarButton from './ToolbarButton';
import {
  signup,
  login,
  logout,
  createProject,
} from '../../../lib/api-methods';
import '../../../scss/toolbar.scss';

const Toolbar = ({
  onUndo,
  canUndo,
  onRedo,
  canRedo,
  setZoom,
  routes,
}) => (
  <div className="toolbar">
    <ToolbarButton click={canUndo ? onUndo : null}>
      <i className="fa fa-undo" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={canRedo ? onRedo : null}>
      <i className="fa fa-repeat" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => setZoom('plus')}>
      <i className="fa fa-search-plus" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => setZoom('minus')}>
      <i className="fa fa-search-minus" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { formTreeData(routes); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { signup('Cheney123', '123'); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { login('Cheney123', '123'); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { logout(); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton
      click={() => {
        createProject({
          projectProps: { name: 'random', project_tree: '12312415' },
          permissionId: 1,
        });
      }}
    >
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
  </div>
);

Toolbar.propTypes = {
  onUndo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
  onRedo: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
  setZoom: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
};

export default Toolbar;
