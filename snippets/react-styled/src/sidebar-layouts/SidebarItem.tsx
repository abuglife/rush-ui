import React from "react";
import tw from 'twin.macro';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AppIcon from "@/common/AppIcon";
import styled from 'styled-components';

interface SidebarItemDto {
  name: string;
  link?: string;
  icon?: string;
  counter?: number;
}
interface SidebarItemProps {
  item: SidebarItemDto;
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <ListItemStyled button key={item.name}>
      {item.icon && (
        <Icon>
          <AppIcon iconName={item.icon} />
        </Icon>
      )}
      <Title>{item.name}</Title>
      {item.counter && (
        <Counter>{item.counter}</Counter>
      )}
    </ListItemStyled>
  );
};

const ListItemStyled = styled(ListItem)`
  ${tw`px-0 py-2 relative`}
`

const Title = styled(ListItemText)`
  ${tw`text-black opacity-75`}
`

const Icon = styled(ListItemIcon)`
  ${tw`w-16 text-2xl flex items-center justify-center`}
`

const Counter = styled.div`
  ${tw`absolute right-0 top-1/2 mr-4 h-full flex items-center justify-center text-sm font-bold bg-primary rounded-full h-6 w-6 text-on-primary transform -translate-y-1/2`}
`

export default SidebarItem;
