import React, { useState } from "react";
import tw from 'twin.macro';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SidebarItem from "./SidebarItem";
import AppIcon from "@/common/AppIcon";
import styled from 'styled-components';

interface SidebarItemDto {
  name: string;
  link?: string;
  icon?: string;
  subMenus?: SidebarItemDto[]
}
interface SidebarItemProps {
  item: SidebarItemDto;
}

const SidebarCollapseItem = ({ item }: SidebarItemProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemStyled onClick={handleClick} button key={item.name}>
        {item.icon && (
          <Icon>
            <AppIcon iconName={item.icon} />
          </Icon>
        )}
        <Title>{item.name}</Title>
        <ArrowIcon>
          <AppIcon iconName={`FiChevronRight`} />
        </ArrowIcon>
      </ListItemStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListStyled>
          {
            (item.subMenus || []).map((subItem: SidebarItemDto) => {
              return <SidebarItem isSubItem={true} key={subItem.name} item={subItem} />
            })
          }
        </ListStyled>
      </Collapse>
    </>
  );
};

interface ListItemStyledProps {
}

const ListItemStyled = styled(ListItem)<ListItemStyledProps & typeof ListItem>`
  ${tw`px-0 py-2 border-b`}
`

const Title = styled(ListItemText)`
  ${tw`text-black opacity-75 flex-grow`}
`

const Icon = styled(ListItemIcon)`
  ${tw`w-16 text-xl flex items-center justify-center`}
`

const ArrowIcon = styled(ListItemIcon)`
  ${tw`w-8 flex items-center justify-center transform rotate-0 transition-transform`}
`

const ListStyled = styled(List)`
  ${tw`bg-gray-50 py-1`}
`

export default SidebarCollapseItem;
