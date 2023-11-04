import { Layout } from "@/components";
import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const t = useTranslations("register");

  return (
    <Layout title={t("title")}>
      <Stack align="center" spacing={10}>
        <Heading as="h1" fontSize="4xl">
          {t("title")}
        </Heading>

        <VStack align="stretch" spacing={4}>
          <Button
            variant="outline"
            size="lg"
            leftIcon={<FcGoogle />}
            display="flex"
            gap="10px"
            justifyContent="flex-start"
          >
            {t("google")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            leftIcon={<PhoneIcon />}
            display="flex"
            gap="10px"
            justifyContent="flex-start"
          >
            {t("phone")}
          </Button>
          <Link href="/mpass" style={{ width: "100%", display: "block" }}>
            <Button
              variant="outline"
              size="lg"
              display="flex"
              gap="10px"
              width="full"
              justifyContent="flex-start"
            >
              <img src="/images/mpass.png" alt="MPass" width="28px" />
              {t("mpass")}
            </Button>
          </Link>
        </VStack>

        <Text color="gray.800">
          {t("haveAccount")}{" "}
          <Link href="/login">
            <Text as="span" color="brand.500" cursor="pointer" fontWeight={600}>
              {t("login")}!
            </Text>
          </Link>
        </Text>
      </Stack>
    </Layout>
  );
};

export default Register;
