import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const LanguageSwitcher = () => {
  const { locale, push, asPath } = useRouter();
  const languages = ["ro", "ru", "en"];

  const handleChange = (lang: string) => {
    push(asPath, asPath, { locale: lang });
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size="sm"
        textTransform="uppercase"
        mr={6}
      >
        {locale}
      </MenuButton>
      <MenuList minWidth="65px">
        {languages
          .filter((lang) => lang !== locale)
          .map((lang) => (
            <MenuItem
              key={lang}
              onClick={() => handleChange(lang)}
              textTransform="uppercase"
              width="65px"
            >
              {lang}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};
