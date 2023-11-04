import { useAuth } from "@/hooks";
import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  VisuallyHidden,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiFillBell, AiOutlineMenu } from "react-icons/ai";
import { BsPlus, BsFillCameraVideoFill, BsInboxesFill, BsChatLeftQuoteFill } from "react-icons/bs";
import { LanguageSwitcher } from "..";
import { useTranslations } from "next-intl";

const menuLinks = [
  {
    text: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    text: "chat",
    path: "/chat",
    icon: <BsInboxesFill />,
  },
  {
    text: "events",
    path: "/events",
    icon: <BsFillCameraVideoFill />,
  },
  {
    text: "forums",
    path: "/forums",
    icon: <BsChatLeftQuoteFill />,
  },
];

export const Header = () => {
  const t = useTranslations("common");

  const { user } = useAuth();
  const mobileNav = useDisclosure();
  const router = useRouter();

  return (
    <React.Fragment>
      <chakra.header
        w="full"
        px={{
          base: 2,
          sm: 4,
          md: 12,
        }}
        py={4}
        shadow="sm"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                {menuLinks.map((link, idx) => {
                  const isActive = router.pathname === link.path;

                  return (
                    <Link href={link.path} key={idx}>
                      <Button
                        variant={isActive ? "solid" : "ghost"}
                        leftIcon={link.icon}
                        size="sm"
                        colorScheme={isActive ? "brand" : undefined}
                      >
                        {t(link.text)}
                      </Button>
                    </Link>
                  );
                })}
              </VStack>
            </Box>
            <Link href="/">
              <img src="/logo.png" width="90" style={{ marginTop: 6 }} alt="logo" />
            </Link>

            <HStack
              spacing={3}
              ml={5}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              {menuLinks.map((link, idx) => {
                const isActive = router.pathname === link.path;

                return (
                  <Link href={link.path} key={idx}>
                    <Button
                      variant={isActive ? "solid" : "ghost"}
                      colorScheme={isActive ? "brand" : undefined}
                      leftIcon={link.icon}
                      size="sm"
                    >
                      {t(link.text)}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          </HStack>
          <HStack spacing={3} display={mobileNav.isOpen ? "none" : "flex"} alignItems="center">
            <LanguageSwitcher />
            {user ? (
              <>
                <Link href="/chat/new">
                  <Button colorScheme="brand" size="sm" leftIcon={<BsPlus />}>
                    {t("newChat")}
                  </Button>
                </Link>

                <chakra.a
                  p={3}
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  rounded="sm"
                  _hover={{
                    color: "gray.800",
                    _dark: {
                      color: "gray.600",
                    },
                  }}
                >
                  <AiFillBell />
                  <VisuallyHidden>Notifications</VisuallyHidden>
                </chakra.a>

                <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="ghost" size="sm" colorScheme="brand">
                    {t("register")}
                  </Button>
                </Link>
                <Link href="/login">
                  <Button colorScheme="brand" size="sm">
                    {t("login")}
                  </Button>
                </Link>
              </>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
