import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import './CardPhoto.css';

export default class CardPhoto extends React.Component {
  render() {
    return (
      <div style={{ height: 550 }}>
        <Card class="Cards">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523890398114&di=94fb3e5a7bf92f335ba0260a3c224653&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F14%2F20150314212812_kCLmy.thumb.700_0.jpeg"
            alt="Photo1"
          />
          <CardTitle subtitle="Photo1" style={{ padding: 5, textAlign: 'center' }} />
        </Card>
      </div>
    );
  }
}
