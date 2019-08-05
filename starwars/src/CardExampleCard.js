import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const CardExampleCard = props => (
  <Card.Group itemsPerRow={4}>
    <Card color="red">
      <Card.Content>
        <Card.Header>{props.starState.name}</Card.Header>
        <Card.Meta>{props.starState.gender}</Card.Meta>
        {/* <Card.Meta>{props.starState.height}</Card.Meta>
        <Card.Meta>{props.starState.skin_color}</Card.Meta> */}
        <Card.Description>{props.starState.homeworld}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="0">
          <Icon name="id badge" />
          Enemy
        </a>
      </Card.Content>
    </Card>

    <Card color="red" />
    <Card color="red" />
  </Card.Group>
);

export default CardExampleCard;
