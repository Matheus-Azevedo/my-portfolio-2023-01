import React from 'react';
import { Item, Icon, Text } from './style';
import { IconType } from 'react-icons';

export default function ItemContact(
  { IconFa, LinkContact }: { IconFa: IconType, LinkContact: string }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
        {LinkContact}
      </Text>
    </Item>
  );
}