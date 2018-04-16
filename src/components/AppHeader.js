import React from 'react';
import { AppBar, IconButton } from 'material-ui';

class AppHeader extends React.Component {
  render() {
    const title = 'Blog';

    return (
      <AppBar
        showMenuIconButton={false}
        title={title}
        style={{
          zIndex: '1400',
          position: 'fixed',
          top: '0',
        }}
        iconElementRight={
          <IconButton
            iconClassName="muidocs-icon-custom-github"
            tooltip="Project in github"
            tooltipPosition="bottom-left"
            href="https://github.com/Adherentman/projectblog"
          />
        }
      />
    );
  }
}

export default AppHeader;
