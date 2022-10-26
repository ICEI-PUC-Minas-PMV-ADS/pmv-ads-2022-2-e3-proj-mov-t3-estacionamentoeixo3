import React from "react";
import { Card, Paragraph, Title, Button, Avatar } from "react-native-paper";

const DetailParkOnSelected = ({ hide }) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="car" />;
  return (
    <Card
      elevation={5}
      mode="outlined"
      style={{ display: !hide ? "none" : "flex" }}
    >
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default DetailParkOnSelected;
